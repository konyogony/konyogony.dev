import axios from 'axios';

const backendUrl = 'https://localhost:5001';

const isValidContentType = (contentType: string | undefined) => {
    const validContentTypes = ['application/json', 'text/plain'];

    if (validContentTypes.some((type) => contentType?.includes(type))) {
        return true;
    } else {
        return false;
    }
};

export const getFromBackend = (url: string) => {
    const headers = {
        Accept: 'application/json, text/plain',
    };

    return axios
        .get(backendUrl + url, { headers })
        .then((response) => {
            if (isValidContentType(response.headers['content-type'])) {
                return response.data;
            } else {
                throw new Error('Unsupported content type: ' + response.headers['content-type']);
            }
        })
        .catch((e) => {
            console.error('Failed to fetch GET:', e);
        });
};

export const postToBackend = (url: string, data: any) => {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain',
    };

    return axios
        .post(backendUrl + url, data, { headers })
        .then((response) => {
            if (isValidContentType(response.headers['content-type'])) {
                return response.data;
            } else {
                throw new Error('Unsupported content type: ' + response.headers['content-type']);
            }
        })
        .catch((e) => {
            console.error('Failed to fetch POST:', e);
        });
};
