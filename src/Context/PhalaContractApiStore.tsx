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
      const contractId:string = '0x5484856af003365826835c9bcc9a0ab23127aa7e76fa1e385df4c2760515803c';
      

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