import axios from 'axios';

/* export type apiRequest = {
    method: string,
    url: string,
    headers?: any,
    body?: any,
} */

export const getAssets = async (address: string, baseURL: string): Promise<any> => {
    const request: any = {
        method: 'GET',
        url: `${baseURL}/getNFTs/?owner=${address}`,
    }

    const response = await axios(request)
    return response.data
}

export const login = async (email: string, password: string, baseURL: string): Promise<any> => {

    const data = JSON.stringify({ "email": email, "password": password });

    const request: any = {
        method: 'POST',
        url: `${baseURL}/login`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: data
    }

    const response = await axios(request)
    return response
}

export const register = async (name: string, email: string, password: string, baseURL: string): Promise<any> => {

    const data = JSON.stringify({ "name": name, "email": email, "password": password });

    const request: any = {
        method: 'POST',
        url: `${baseURL}/users/register`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        data: data
    }

    const response = await axios(request)
    return response
}

export const getUserData = async (baseURL: string): Promise<any> => {

    const auth = localStorage.getItem('userToken')

    const request: any = {
        method: 'GET',
        url: `${baseURL}/info`,
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${auth}`
        },
        maxRedirects: 0,
        data: ''
    }

    const response = await axios(request)
    return response
}

/* const assets = [
    {        
        name : "NFT Name",
        image : "https://ipfs.io/ipfs/Qm...",
        qrcode : "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=0x2B57a6d9c5aC697d6BCDCB28ADB2e660640e0bc5",
        network : "ethereum",
        expiration : 1654000000, 
    },
    {
        name : "NFT Name",
        image : "https://ipfs.io/ipfs/Qm...",
        qrcode : "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://testnets.opensea.io/assets/goerli/0xd7c84e8c2237262897212d86fb795ef6dae90890/2",
        network : "ethereum",
        expiration : 1654000000,
    },
]; */