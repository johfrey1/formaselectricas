import axios from 'axios';
const baseDomain = 'https://formaselectricas.com';
// export const wp = 'https://wp.nouhtml5.com';
//export const wp = 'http://wp.diaryforlife.info';

const authorization_prefix = 'Bearer ';

export const customHeaders = {
    "Accept": 'application/json',
    /* Authorization: authorization_prefix + token || undefined*/
    auth: {
        "username": "ck_08859804ef3afaa6ec1c974be94bba1cd7684c49",
        "password": "cs_28c18b6466a94d0eb81f3616a509659ca2107cce"
    }
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(
            key =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
