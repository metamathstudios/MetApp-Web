import axios from 'axios';

export type apiRequest = {
    method: string,
    url: string,
    body?: any,
}

export const getAssets = async (address: string , baseURL: string) => {

    const request: apiRequest = {
        method: 'GET',
        url: `${baseURL}/getNFTs/?owner=${address}`,
    }

    const response = await axios(request)
    return response.data.result
}