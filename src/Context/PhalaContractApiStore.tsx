'use client'

import React, { createContext, useState, ReactNode, useContext } from "react";
import { CertificateData, signCertificate } from "@phala/sdk";
import { ContractPromise } from "@polkadot/api-contract";
import {create} from '@phala/sdk';
import { ApiPromise } from '@polkadot/api';
import { useChainApiContext } from "./ChainApiStore";
import ordumJson from '../lib/PhalaContract/Utils/ordum.json'


type Props = {
  children: ReactNode;
};

// Certificate Data
interface Contract {
  cache?: CertificateData;
  contractApi: ContractPromise |null;
  setCertificate: (cert?: CertificateData) => void;
  loadContractApi: () => void;
}

const defaultState = {
  cache: undefined,
  contractApi: null,
  setCertificate: (cert?: CertificateData) => {
    return;
  },
  loadContractApi: () => {
    return;
  },
};

const ContractContext = createContext<Contract>(defaultState);

export const PhalaContractContextProvider = ({ children }: Props) => {
 
  // Context
  const {poc5} =useChainApiContext()


  const [cache, setCache] = useState<CertificateData>();
  const [contractApi, setContractApi] = useState<ContractPromise|null>(null);

  const setCertificate = (cert?: CertificateData) => {
    console.log("Certificate signed")
    setCache(cert);
  };

  const loadContract =  async():Promise<ContractPromise|null> =>{
    if(poc5){
      const contractId:string = '0xce25074286b8a42077536cca2e55d2c95d84151d48cec3a6e261fad55a31db65';
      const pruntime:string = 'https://poc5.phala.network/tee-api-1';
  
      // check for undefined Erros
      //@ts-ignore
      const contrapi: ApiPromise = await((await create({api:poc5,baseURL:pruntime,contractId})).api).isReady;
  
      const contract = new ContractPromise(
        //@ts-ignore
        contrapi,
        ordumJson,
        contractId
      );
      return contract

    }else{
      return null
    }
    
  }

  const loadContractApi = async() => {
    const contract = await loadContract()
    setContractApi(contract);
    console.log("Phala Contract Loaded")
  };

  

  const context = {
    cache,
    contractApi,
    setCertificate,
    loadContractApi,
  };

  return (
    <ContractContext.Provider value={context}>
      {children}
    </ContractContext.Provider>
  );
};

export const usePhalaContractContext =()=> useContext(ContractContext); 