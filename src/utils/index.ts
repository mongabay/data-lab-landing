import xmlToJs from 'xml-js';
import useSWR from 'swr'

const convertData = (data: string) => {
    const result = xmlToJs.xml2json(data, { compact: true, spaces: 4 });
    return result;

}

/** Fetch and format posts  */
export const useData = () => {
  return useSWR(
    `https://news.mongabay.com/feed/?post_type=post&feedtype=bulletpoints&list=data-lab`,
    async (url: string) => {
        const res = await fetch(url);

        const rawData = convertData(await res.text());
        const parsedData = JSON.parse(rawData).rss.channel.item.map((item: any) => ({
            date: item.pubDate._text,
            title: item.title._text,
            description: item["content:encoded"]._cdata,
            image: Array.isArray(item.enclosure)
                ? item.enclosure?.find(
                    (item: any) => item._attributes.type.startsWith('image')
                )?._attributes.url
                : item.enclosure?._attributes?.url,
            url: item.link._text,
        }))

        if (Array.isArray(parsedData)) {
            if (parsedData.every(d => d.date && d.title && d.description && d.image && d.url)) {
                return parsedData;
            }
        }

        return [];
    }
  );
}