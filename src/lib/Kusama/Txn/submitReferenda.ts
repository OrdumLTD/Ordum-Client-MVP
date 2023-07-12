'use client'

import type { InjectedAccountWithMeta, InjectedExtension } from "@polkadot/extension-inject/types";
import { ApiPromise } from "@polkadot/api";
import { useContext } from "react";
import '@polkadot/api-augment/kusama';
import { convertToBlockNumber, getTrackKsm } from "../Utils";
import { Signer } from "@polkadot/types/types";
import { AccountId } from "@/lib/PhalaContract/Types/types";


// Import the context for wallet and chain context
// Preimage
export const PreimageAndReferendum = async (
   setIndexToStore:(index:number)=>void,
   rate: number,
   signer?: Signer,
   account?: InjectedAccountWithMeta,
   amount?: number,
   beneficiary?: AccountId,
   chainAPI?: ApiPromise,
   date?:string,
 ) =>  {
   // Get the signer from the account
 
   if(signer && account && amount && beneficiary && chainAPI){
      const amountKsm = getTrackKsm(amount,rate);

      const tx_preimage_hex = chainAPI?.tx.treasury
      //@ts-ignore
     .spend(amountKsm, beneficiary)
     .toHex()
     .slice(2);
     
   const preimageData = tx_preimage_hex;
 
   const call_preimage = chainAPI.tx.preimage.notePreimage(tx_preimage_hex);
   console.log("Submitting Preimage")
 
   await call_preimage.signAndSend(
     account.address,
     { signer},
     ({status,events})=>{
       if(status?.isFinalized){
         console.log("Finalized Preimage")

         events?.map(event =>{
           console.log(event.toHuman())
           //@ts-ignore
           if(event.toHuman().event.section == "preimage"){
             console.log("huurayy")
             //@ts-ignore
             // store the preimage Hash in the context
             const preimageHash = event.toHuman().event.data.hash_;
             
           }
         })
         
         submitProposal(
           setIndexToStore,
           rate,
           account,chainAPI,
           amount,
           preimageData,
           signer,
           date
           ).catch((err)=> console.log(err))
       }
     }
    );
   }
 };




export const submitProposal = async(
    setIndexToStore:(index:number)=>void,rate:number,
    account?: InjectedAccountWithMeta,chainAPI?:ApiPromise,amount?:number,
    preimage_data?:string, signer?: Signer,date?:string
    ) =>{

      if(account && chainAPI && preimage_data && signer && amount && date){
        console.log("On referendum submit")
      
         // Calculate track 
      const {Track} = getTrackKsm(amount,rate);

      const blockNumber = convertToBlockNumber(date);
      
      const tx_submit_hash = chainAPI?.tx.referenda.submit({Origins:Track},{Inline:preimage_data},{At:blockNumber}); 

      await tx_submit_hash?.signAndSend(account.address,{ signer },({status,events}) =>{
      

        if(status.isInBlock){
               console.log("Inblock")
            }else if(status.isFinalized){
               console.log("Finalized Referendum")
            }
            events?.map(event =>{
              //@ts-ignore
              if(event.toHuman().event.method === 'Submitted'){
                //@ts-ignore
                const index = event.toHuman().event.data.index
                setIndexToStore(index)
              }
            })
        }).catch(err => console.log(err))

      }
      

  }