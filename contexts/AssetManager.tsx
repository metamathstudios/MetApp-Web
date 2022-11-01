import { createContext, useCallback, useState } from "react";
import { getAssets } from "../utils";
import { rpcUrls } from "../blockchain/constants";

export type Asset = {
    name: string;
    image: string;
    network: number;
    id: string;
    contractAddress: string;
};

interface IAssetManagerContext {
    balance: number;
    assets: Asset[];
    fetch: (chainId: number, address: string) => void;
}

export const AssetManagerContext = createContext<IAssetManagerContext>({
    balance: 0,
    assets: [],
    fetch: (chainId: number, address: string) => {},
});

const AssetManager = ({ children }) => {
    const [assets, setAssets] = useState<Asset[]>([]);
    const [balance, setBalance] = useState<number>(0);

    const fetch = useCallback((chainId: number, address: string) => {

        const _baseUrl = rpcUrls[chainId];

        getAssets(address, _baseUrl)
            .then((assets) => {
                let _assets : Asset[] = [];
                setBalance(assets.ownedNfts.length)
                for(let i = 0; i < assets.ownedNfts.length; i++) {

                const _asset: Asset = {
                    name: assets.ownedNfts.at(i).metadata.name,
                    image: assets.ownedNfts.at(i).metadata.image,
                    network: chainId,
                    id: assets.ownedNfts.at(i).id.tokenId,
                    contractAddress: assets.ownedNfts.at(i).contract.address,
                };

                _assets.push(_asset);
            }

            setAssets(_assets);

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <AssetManagerContext.Provider
            value={{
                balance,
                assets,
                fetch,
            }}
        >
            {children}
        </AssetManagerContext.Provider>
    );
}

export default AssetManager;