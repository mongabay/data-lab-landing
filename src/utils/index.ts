import xmlToJs from 'xml-js';

const convertData = (data: string) => {
    const result = xmlToJs.xml2json(data, { compact: true, spaces: 4 });
    return result;

}

/** Fetch and format posts  */
export const getData = async () => {
    try {
        const res = await fetch('https://news.mongabay.com/feed/?post_type=post&feedtype=bulletpoints&list=data-lab');

        const rawData = convertData(await res.text());
        const parsedData = JSON.parse(rawData).rss.channel.item.map((item: any) => ({
            date: item.pubDate._text,
            title: item.title._text,
            description: item["content:encoded"]._cdata,
            image: item.enclosure._attributes.url,
            url: item.link._text,
        }))

        if (Array.isArray(parsedData)) {
            if (parsedData.every(d => d.date && d.title && d.description && d.image && d.url)) {
                return { isError: false, data: parsedData };
            }
        }

        return { isError: true, data: [] };
    } catch (e) {
        return { isError: true, data: [] };
    }
}