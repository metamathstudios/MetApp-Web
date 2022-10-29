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

export const login = async (email: string, password: string, baseURL: string) => {
    const request: apiRequest = {
        method: 'POST',
        url: `${baseURL}/login`,
        body: {
            "email" : email,
            "password" : password
        }
    }

    const response = await axios(request)
    return response.data
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