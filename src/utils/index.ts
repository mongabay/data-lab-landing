import xmlToJs from 'xml-js';
import useSWR from 'swr';

import type { Article } from '@/types/article';

const FEED_URL =
  'https://news.mongabay.com/feed/?post_type=post&feedtype=bulletpoints&topic=mongabay-data-studio';

// Shapes produced by xml-js in compact mode
type XmlNode = {
  _text?: string;
  _cdata?: string;
  _attributes?: Record<string, string>;
};

type FeedItem = {
  pubDate?: XmlNode;
  title?: XmlNode;
  link?: XmlNode;
  'dc:creator'?: XmlNode;
  enclosure?: XmlNode | XmlNode[];
};

const text = (node?: XmlNode) => node?._text ?? node?._cdata;

/** The feed is remote input: only absolute https URLs are rendered as href or src. */
const httpsUrl = (value: unknown): string | undefined => {
  if (typeof value !== 'string') return undefined;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' ? parsed.href : undefined;
  } catch {
    return undefined;
  }
};

const imageUrl = (enclosure?: XmlNode | XmlNode[]) => {
  const list = Array.isArray(enclosure) ? enclosure : enclosure ? [enclosure] : [];
  const image = list.find((e) => e._attributes?.type?.startsWith('image/')) ?? list[0];
  return httpsUrl(image?._attributes?.url);
};

const toArticle = (item: FeedItem): Article | undefined => {
  const date = text(item.pubDate);
  const title = text(item.title);
  const url = httpsUrl(text(item.link));
  const image = imageUrl(item.enclosure);

  if (!date || !title || !url || !image) return undefined;

  return { date, title, url, image, author: text(item['dc:creator']) ?? '' };
};

/**
 * Parse the RSS feed into articles. Items missing a required field or carrying a
 * non-https URL are dropped; a malformed or reshaped feed yields [] instead of throwing.
 */
export const parseFeed = (xml: string): Article[] => {
  try {
    const feed = JSON.parse(xmlToJs.xml2json(xml, { compact: true }));
    const items = feed?.rss?.channel?.item;
    const list: FeedItem[] = Array.isArray(items) ? items : items ? [items] : [];
    return list.map(toArticle).filter((article): article is Article => article !== undefined);
  } catch {
    return [];
  }
};

/** Fetch and format posts */
export const useData = () =>
  useSWR(FEED_URL, async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Feed request failed with status ${res.status}`);
    return parseFeed(await res.text());
  });
