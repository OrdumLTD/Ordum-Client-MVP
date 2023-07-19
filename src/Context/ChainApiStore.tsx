'use client';

import { OnChainRegistry} from "@phala/sdk";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { createContext, useContext, useState, ReactNode } from "react";
import {typesBundleForPolkadot} from '@crustio/type-definitions';


type Props = {
    children: ReactNode
}

interface ChainApiInterface {
    api?:ApiPromise;
    fetchChainApi: () => void;
    poc5?:ApiPromise;
    fetchPoc5Api:() => void;
    crustApi?: ApiPromise;
    fetchCrustApi:() => void;
}

const defaultChainApiState:ChainApiInterface = {
    api: undefined,
    fetchChainApi:()=>{return},
    poc5:undefined,
    fetchPoc5Api: () => {return},
    crustApi:undefined,
    fetchCrustApi:() =>{return}

}

const ChainApiContext = createContext<ChainApiInterface>(defaultChainApiState);

export const ChainApiContextProvider = ({children}:Props) =>{
    const [chainApi, setChainApi] = useState<ApiPromise>();
    const [poc5,setPoc5] = useState<ApiPromise>();
    const [crustApi,setCrustApi] = useState<ApiPromise>();



    const fetchChainApi = async() =>{
        let wsProvider = new WsProvider('ws://127.0.0.1:8000');
        let chain_api = await ApiPromise.create({provider:wsProvider});
        chain_api.isReady
        setChainApi(chain_api);
        console.log("Chain Connected")
    }

    const fetchPoc5Api = async() =>{
        let wsProvider = new WsProvider('wss://poc5.phala.network/ws');
        let chain_api = await ApiPromise.create({provider:wsProvider});
        chain_api.isReady
        setPoc5(chain_api);
        console.log("Connected to Poc5")
    }

    const fetchCrustApi = async() =>{
        let wsProvider = new WsProvider('wss://rpc-rocky.crust.network');
        let chain_api = await ApiPromise.create({
            provider:wsProvider,
            typesBundle: typesBundleForPolkadot
        });
        chain_api.isReady
        setChainApi(chain_api);
        console.log("Connected to Crust Rocky")
    }

    return (
        <ChainApiContext.Provider value={{fetchChainApi,api:chainApi,poc5,fetchPoc5Api,crustApi,fetchCrustApi}}>
            {children}
        </ChainApiContext.Provider>
    )
};

export const useChainApiContext = () => useContext(ChainApiContext);
