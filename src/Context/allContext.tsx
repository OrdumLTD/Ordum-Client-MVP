import { ReactNode } from "react";

import { ChainApiContextProvider } from "@/Context/ChainApiStore";
import { PhalaContractContextProvider } from "@/Context/PhalaContractApiStore";
import {
  ApplicantNameNIdContextProvider,
  FetchedIndividualProfileContextProvider,
  FetchedProfileContextProvider,
  IndidvualNameNIdContextProvider,
  IndividualProfileContextProvider,
  ProfileContextProvider,
} from "@/Context/ProfileStore";
import { ProposalContextProvider } from "@/Context/submitPropolsal";
import { UserContextProvider } from "@/Context/user";
import { WalletContextProvider } from "@/Context/WalletStore";
import { PolskassemblyContextProvider } from "./PolkassembyContext";
import { ReferendaContextProvider } from "./ReferendaContext";

type Props = {
  children: ReactNode;
};

export const AllContextProvider = ({ children }: Props) => {
  return (
    <WalletContextProvider>
      <ChainApiContextProvider>
        <PhalaContractContextProvider>
          <ProfileContextProvider>
            <IndividualProfileContextProvider>
              <FetchedIndividualProfileContextProvider>
                <FetchedProfileContextProvider>
                  <ProposalContextProvider>
                    <ApplicantNameNIdContextProvider>
                      <IndidvualNameNIdContextProvider>
                        <UserContextProvider>
                          <PolskassemblyContextProvider>
                            <ReferendaContextProvider>
                              {children}
                            </ReferendaContextProvider>
                          </PolskassemblyContextProvider>
                        </UserContextProvider>
                      </IndidvualNameNIdContextProvider>
                    </ApplicantNameNIdContextProvider>
                  </ProposalContextProvider>
                </FetchedProfileContextProvider>
              </FetchedIndividualProfileContextProvider>
            </IndividualProfileContextProvider>
          </ProfileContextProvider>
        </PhalaContractContextProvider>
      </ChainApiContextProvider>
    </WalletContextProvider>
  );
};

export default AllContextProvider;
