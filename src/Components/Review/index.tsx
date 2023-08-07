"use client";

import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

import {
  InjectedAccountWithMeta,
  InjectedExtension,
} from "@polkadot/extension-inject/types";
import OrdumPreview from "@/Components/preview";

import "@polkadot/api-augment/kusama";
import { useProposalContext } from "@/Context/submitPropolsal";
import { useWalletContext } from "@/Context/WalletStore";
import { PreimageAndReferendum } from "@/lib/Kusama/Txn/submitReferenda";
import { useChainApiContext } from "@/Context/ChainApiStore";
import Summary from "./reviewSubmenu/Summary";
import ViewProposal from "./reviewSubmenu/ViewProposal";
import Milestones from "./reviewSubmenu/Milestones/milestones";
import { newFileIpfs } from "@/lib/DeStorage/storeFile";
import { useUserContext } from "@/Context/user";

enum ReviewMenu {
  Summary,
  ViewProposal,
  Team,
  Milestones,
  Code,
}

type Props = {
  className?: string;
  teamName?: string;
  propolsalName?: string;
  date?: string;
  fundingAmount?: number;
  govType?: string;
  deadline?: string;
  startDate?: string;
  propolsalDescription?: string;
  problem?: string;
  solution?: string;
  ifYouHaveSeenSimilar?: string;
};

const SubmitProposalToDB = (token: string) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = {
    name: "Ordum Proposal",
    tldr: {
      teamAccount: "randomTeamAccount",
      projectType: "DeFi",
      contact: "ela@boss.com",
      startDate: "2023-09-20T16:32:33.000Z",
      fundingAmmount: 10000,
      deliveryDeadline: "2024-05-27T21:40:41.000Z",
      shortDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      externalLinks: ["wikipedia.com", "gihub.com"],
      _id: "64d0a918d4f5d183476584b4",
    },
    context: {
      context: "Context Example",
      knownBackups: "None",
      problemStatement:
        "Turpis massa tincidunt dui ut. Eget gravida cum sociis natoque penatibus et magnis dis. Justo nec ultrices dui sapien eget. Natoque penatibus et magnis dis parturient montes nascetur. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Massa placerat duis ultricies lacus sed turpis. Dolor sit amet consectetur adipiscing elit pellentesque. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Nam at lectus urna duis convallis convallis.",
      solution:
        "Tellus orci ac auctor augue mauris augue. Diam phasellus vestibulum lorem sed risus ultricies tristique. Sed viverra tellus in hac habitasse platea dictumst. Faucibus turpis in eu mi bibendum neque. Eget sit amet tellus cras adipiscing. Amet aliquam id diam maecenas. Consectetur adipiscing elit duis tristique. Cras pulvinar mattis nunc sed. Turpis massa tincidunt dui ut ornare. Mi eget mauris pharetra et. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Volutpat blandit aliquam etiam erat velit scelerisque in dictum. Cursus sit amet dictum sit amet justo donec enim. Non quam lacus suspendisse faucibus interdum posuere lorem.",
      targetAudience: "Web 3 Developers and B Blockchain users",
      similarSolution:
        "Nothing as close as what we are tryign to build, that we know of",
      _id: "64d0a918d4f5d183476584b5",
    },
    owner: "64d0a8f1d4f5d1834765848f",
    milestones: ["64d0a918d4f5d1834765849b", "64d0a918d4f5d183476584a6"],
    createdAt: "2023-08-07T08:04:13.887Z",
    _id: "64d0a918d4f5d183476584b3",
    updatedAt: "2023-08-07T08:19:36.482Z",
    __v: 0,
  };

  axios.post("localhost:4000/proposals", bodyParameters, config).then((res) => {
    console.log(res)
  }).catch();
};

const SubmitPropolsalPreview: React.FC<Props> = (props) => {
  const [hash, setHash] = useState<string>();

  const [menu, setMenu] = useState(ReviewMenu.Summary);

  // Context
  const { changeToStep, setProposalIndex, proposalIndex, tldr, context } =
    useProposalContext();
  const { account, signer } = useWalletContext();
  const { api, fetchChainApi } = useChainApiContext();
  const userCtx = useUserContext();

  const router = useRouter();

  const changePropolsalSubPage = async (step: number, route: string) => {
    changeToStep(step);
    router.push(route);
  };

  // useEffect(() => {
  //   if (!api) {
  //     fetchChainApi();
  //   }
  // }, []);

  // callBack fn
  const fetchIndex = (index: number) => [setProposalIndex(index)];

  // Referenda Test
  const submit = async () => {

   

    if (tldr?.fundingAmount && tldr.recieveDate) {
      const rate = tldr.exchangeRate || 24;
      await PreimageAndReferendum(
        fetchIndex,
        rate,
        signer,
        account,
        tldr.fundingAmount,
        tldr.beneficiary,
        api,
        tldr.recieveDate
      );
      SubmitProposalToDB(userCtx.userToken);
    } else {
      console.log(
        "Missing some field Funding " +
          tldr?.fundingAmount +
          "ReceiveData " +
          tldr?.recieveDate
      );
    }
  };

  return (
    <div className="p-10 w-full">
      <div className="w-full flex flex-col">
        Preview
        {/* Context */}
        <div className="flex flex-col">
          <div className="">
            <h1 className="font-bold text-4xl">
              Name of prop Name of prop Name of prop{" "}
            </h1>

            <div className="mt-10 flex flex-row gap-2">
              <div className="flex gap-1">
                <span className="text-sm font-bold">Posted by</span>
                <span className="-mt-0.5">Xylo Drone</span>
              </div>

              <div className="flex gap-1">
                <span className="text-sm font-bold">Beneficiary</span>
                <span>Name</span>
              </div>

              <div className="flex gap-1">
                <span className="text-sm font-bold">Bond</span>
                <span className="-mt-0.5">Name</span>
              </div>

              <div className="flex gap-1">
                <span className="text-sm font-bold">Decision Deposit</span>
                <span className="-mt-0.5">N/A</span>
              </div>
            </div>

            <div className="mt-5 flex flex-row gap-5">
              {/* Menu */}
              <button
                className={
                  "w-[10rem] font-medium text-sm px-5 py-2 rounded-full border border-ordum-blue" +
                  (menu === ReviewMenu.Summary ? " bg-ordum-blue " : " ")
                }
                onClick={() => {
                  setMenu(ReviewMenu.Summary);
                }}
              >
                Summary
              </button>
              <button
                className={
                  "w-[10rem] font-medium text-sm px-5 py-2 rounded-full border border-ordum-blue" +
                  (menu === ReviewMenu.ViewProposal ? " bg-ordum-blue " : " ")
                }
                onClick={() => {
                  setMenu(ReviewMenu.ViewProposal);
                }}
              >
                View Proposal
              </button>
              <button
                className={
                  "w-[10rem] font-medium text-sm px-5 py-2 rounded-full border border-ordum-blue" +
                  (menu === ReviewMenu.Team ? " bg-ordum-blue " : " ")
                }
                onClick={() => {
                  setMenu(ReviewMenu.Team);
                }}
              >
                Team
              </button>
              <button
                className={
                  "w-[10rem] font-medium text-sm px-5 py-2 rounded-full border border-ordum-blue" +
                  (menu === ReviewMenu.Milestones ? " bg-ordum-blue " : " ")
                }
                onClick={() => {
                  setMenu(ReviewMenu.Milestones);
                }}
              >
                Milestones
              </button>
              <button
                className="w-[10rem] font-medium text-sm px-5 py-2 rounded-full border border-ordum-blue"
                onClick={() => {
                  setMenu(ReviewMenu.Code);
                }}
              >
                Code
              </button>
            </div>

            <div className="">
              {menu === ReviewMenu.Summary ? <Summary /> : null}
              {menu === ReviewMenu.ViewProposal ? <ViewProposal /> : null}
              {menu === ReviewMenu.Milestones ? <Milestones /> : null}
            </div>

            {/* <div className="mt-8 flex gap-4">
              <div className="flex flex-col">
                <span className="font-bold text-sm">Posted</span>
                <span>00/00/00</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Start Date</span>
                <span>00/00/00</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Deadline</span>
                <span>00/00/00</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Requested Ammount</span>
                <span>XXXXXXXXX KSM</span>
              </div>
              <div className="flex flex-col text-sm">
                <span className="font-bold">Requested Ammount</span>
                <span>XXXXXXXX USD</span>
              </div>
            </div>

            <div className="mt-8">
              <span className="text-sm font-bold">External Links</span>
              <div className="flex gap-3 text-base">
                <span className="underline hover:cursor-pointer">
                  Example.com
                </span>
                <span className="underline hover:cursor-pointer">
                  Previos Proposal
                </span>
                <span className="underline hover:cursor-pointer">Github</span>
                <span className="underline hover:cursor-pointer">
                  Figma designs
                </span>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-medium text-xl">Short Descripton</h2>
              <div className="mt-0.5 border-t" />

              <div className="my-4 font-medium text-lg">Introduction</div>
              <p>
                Quantum computers represent a groundbreaking paradigm shift in
                computing technology, harnessing the principles of quantum
                mechanics to unlock immense computational power. Unlike
                classical computers that use bits to represent information as 0s
                and 1s, quantum computers employ qubits, which can exist in
                multiple states simultaneously. This fundamental property, known
                as superposition, allows quantum computers to perform parallel
                computations and explore numerous solutions simultaneously.
              </p>
              <div className="my-4 font-medium text-lg">Problem</div>
              <p>
                By leveraging superposition and another key quantum phenomenon
                called entanglement, quantum computers can solve complex
                problems with incredible speed and efficiency. They have the
                potential to revolutionize various fields, including
                cryptography, optimization, and scientific simulations. For
                example, quantum algorithms such as Shor's algorithm can
                efficiently factor large numbers, posing a significant threat to
                current encryption methods. Moreover, quantum computers excel at
                optimization problems, enabling faster and more effective
                solutions for logistical challenges, financial modeling, and
                supply chain management. They can analyze vast amounts of data
                and identify optimal solutions in ways that are currently
                infeasible for classical computers.
              </p>
              <div className="my-4 font-medium text-lg">Solution</div>
              <p>
                Scientific simulations stand to benefit immensely from quantum
                computers as well. They can simulate quantum systems more
                accurately, allowing scientists to explore molecular
                interactions, chemical reactions, and material properties in
                unprecedented detail. This capability has the potential to
                revolutionize drug discovery, material design, and quantum
                physics research. However, building and operating quantum
                computers is incredibly challenging due to the delicate nature
                of qubits. Maintaining coherence—the stability of qubits'
                quantum states—is a persistent obstacle. Quantum error
                correction techniques are being developed to mitigate errors and
                enhance the reliability of quantum computations.
              </p>
              <div className="my-4 font-medium text-lg">Team Credentials</div>
              <p>
                Researchers and companies worldwide, including IBM, Google, and
                Microsoft, are actively working on advancing quantum computing
                technologies. They are exploring various qubit implementations,
                such as superconducting circuits, trapped ions, topological
                qubits, and more, aiming to develop robust and scalable quantum
                systems.
              </p>
            </div> */}
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          {/* Buttons and whatnot */}
          <button className="bg-ordum-blue text-white py-2 md:py-4 px-2 rounded">
            Go Back And Edit
          </button>
          <button
            className="bg-ordum-purple text-white border border-white py-2 md:py-4 rounded"
            onClick={() => {
              submit();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmitPropolsalPreview;
