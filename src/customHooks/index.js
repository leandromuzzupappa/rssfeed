import { useState, useEffect } from 'react';
import axios from 'axios';

const HandleFetchNews = (rss) => {
    const rss2jsonURL = 'https://api.rss2json.com/v1/api.json?rss_url=';
    const urlFormated = rss.replace(/(\/)/g, '%2F').replace(':', '%3A');
    const url = `${rss2jsonURL}${urlFormated}`;

    const [data, setData] = useState(false);

    useEffect(() => {
        if (!data) {
            getRssData(rss);
        }
    }, []);

    const getRssData = () => {
        axios
            .get(url)
            .then((res) => {
                if (res.status === 200) {
                    setData({
                        status: res.status,
                        title: res.data.feed.title,
                        url: res.data.feed.url,
                        image: res.data.feed.image,
                        posts: res.data.items,
                    });
                } else {
                    console.log('err1');
                }
            })
            .catch((err) => {
                console.log('err2', err);
            });
    };

    return data;
};

export default HandleFetchNews;
