'use client'

import { CertificateData, signCertificate} from "@phala/sdk";
import type { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
import { ApiPromise } from "@polkadot/api";
import { Signer } from "@polkadot/types/types";


// Main logic for caching and context state
export let certificateCache: Promise<CertificateData>;

export const onSignCertificate = async(
    api:ApiPromise,
    signer: Signer,
    account:InjectedAccountWithMeta
    
    ):Promise<CertificateData> =>{

    if(certificateCache) return certificateCache;
    let certificate:CertificateData;

    return certificateCache = (async() =>{
        certificate = await signCertificate({
            api,
            signer,
            account:account
        })
        return certificate
    })()
}
