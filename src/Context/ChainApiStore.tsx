'use client';

import { options } from "@phala/sdk";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

type Props = {
    children: ReactNode
}

interface ChainApiInterface {
    api?:ApiPromise;
    fetchChainApi: () => void;
    poc5?:ApiPromise;
    fetchPoc5Api:() => void;
}

const defaultChainApiState:ChainApiInterface = {
    api: undefined,
    fetchChainApi:()=>{return},
    poc5:undefined,
    fetchPoc5Api: () => {return}

}

const ChainApiContext = createContext<ChainApiInterface>(defaultChainApiState);

export const ChainApiContextProvider = ({children}:Props) =>{
    const [chainApi, setChainApi] = useState<ApiPromise>();
    const [poc5,setPoc5] = useState<ApiPromise>();



    const fetchChainApi = async() =>{
        let wsProvider = new WsProvider('ws://127.0.0.1:8000');
        let chain_api = await ApiPromise.create({provider:wsProvider});
        chain_api.isReady
        setChainApi(chain_api);
        console.log("Chain Connected")
    }

    const fetchPoc5Api = async() =>{
        let wsProvider = new WsProvider('wss://poc5.phala.network/ws');
        let chain_api = await ApiPromise.create(options({provider:wsProvider}));
        chain_api.isReady
        setPoc5(chain_api);
        console.log("Connected to Poc5")
    }

    return (
        <ChainApiContext.Provider value={{fetchChainApi,api:chainApi,poc5,fetchPoc5Api}}>
            {children}
        </ChainApiContext.Provider>
    )
};

export const useChainApiContext = () => useContext(ChainApiContext);
