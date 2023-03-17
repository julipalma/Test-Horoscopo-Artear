import axios from 'axios';

const basePack = process.env.REACT_APP_API;
const api =  process.env.REACT_APP_ENDPOINT_NAME;
const password = process.env.REACT_APP_API_PASSWORD;

const generalConfig = {
    headers: {
        'Authorization': `${password}`,
        'Content-Type': 'application/json;charset=UTF-8'
    }
};


export const handleGetItems = async () => {
    const response = await axios.get(`${basePack}${api}`, generalConfig);
    const { data } = response;    
    return data;
}

export const handleGetItem = async (query) => {
    const response = await axios.get(`${basePack}?${query}`, generalConfig);
    const { data } = response;
    return data;
}