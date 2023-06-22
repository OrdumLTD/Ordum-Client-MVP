'use client';

import { ApiPromise, WsProvider } from "@polkadot/api";
import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

type Props = {
    children: ReactNode
}

interface ChainApiInterface {
    api?:ApiPromise;
    fetchChainApi: () => void;
}
const defaultChainApiState:ChainApiInterface = {
    api: undefined,
    fetchChainApi:()=>{return}
}

const ChainApiContext = createContext<ChainApiInterface>(defaultChainApiState);

export const ChainApiContextProvider = ({children}:Props) =>{
    const [chainApi, setChainApi] = useState<ApiPromise>();
    
    const fetchChainApi = async() =>{
        let wsProvider = new WsProvider('ws://127.0.0.1:9944');
        let chain_api = await ApiPromise.create({provider:wsProvider});
        chain_api.isReady
        setChainApi(chain_api);
        console.log("Chain Connected")
    }

    return (
        <ChainApiContext.Provider value={{fetchChainApi,api:chainApi}}>
            {children}
        </ChainApiContext.Provider>
    )
};

export const useChainApiContext = () => useContext(ChainApiContext);
