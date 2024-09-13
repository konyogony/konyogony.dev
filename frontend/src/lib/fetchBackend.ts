import axios from 'axios';

const backendUrl = 'http://localhost:5001';

export const fetchBackend = (url: string, method: 'get' | 'post' = 'get') => {
    const request = method === 'get' ? axios.get : axios.post;
    return request(backendUrl + url)
        .then((response) => {
            return response.data;
        })
        .catch((e) => {
            console.error('Failed to fetch:', e);
        });
};
