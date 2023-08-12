'use client'

import React, { createContext, useState, ReactNode, useContext } from "react";
import { CertificateData, signCertificate } from "@phala/sdk";
import { ContractPromise } from "@polkadot/api-contract";
import {create} from '@phala/sdk';
import { ApiPromise } from '@polkadot/api';
import { useChainApiContext } from "./ChainApiStore";
import ordumJson from '../lib/PhalaContract/Utils/ordum.json'
import { PinkContractPromise } from "@phala/sdk";
import { useEventSubscription, useContract } from 'useink'


type Props = {
  children: ReactNode;
};

// Certificate Data
interface Contract {
  cache?: CertificateData;
  contractApi: PinkContractPromise |null;
  setCertificate: (cert?: CertificateData) => void;
  loadContractApi: () => void;
}

const defaultState = {
  cache: undefined,
  contractApi: null,
  setCertificate: (cert?: CertificateData) => {return},
  loadContractApi: () => {
    return;
  },
};

const ContractContext = createContext<Contract>(defaultState);

export const PhalaContractContextProvider = ({ children }: Props) => {
 
  // Context
  const {poc5,phalaRegistry} =useChainApiContext()


  const [cache, setCache] = useState<CertificateData>();
  const [contractApi, setContractApi] = useState<PinkContractPromise|null>(null);

  const setCertificate = (cert?: CertificateData) => {
    console.log("Certificate signed")
    setCache(cert);
  };

  const loadContract =  async():Promise<PinkContractPromise|null> =>{
    if(poc5){
      const contractId:string = '0x52ea197a6163112d2a5b75f7a65e57c2a09e8b796bed275b7d831119f0430bdf';
      

      const contractKey = await phalaRegistry.getContractKeyOrFail(contractId);
      const contract = new PinkContractPromise(poc5, phalaRegistry, ordumJson, contractId, contractKey);

  
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