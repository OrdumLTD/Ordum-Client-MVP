"use client";

import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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

const OrdumPreview: React.FC<Props> = (props) => {
  return (
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
          <Link href="/submitproposal/review">
            <button className="w-[10rem] font-medium text-sm px-5 bg-ordum-blue py-2 rounded-full border border-ordum-blue">
              Summary
            </button>
          </Link>
          <button className="w-[10rem] font-medium text-sm px-5 py-2 rounded-full border border-ordum-blue">
            View Proposal
          </button>
          <button className="w-[10rem] font-medium text-sm px-5 py-2 rounded-full border border-ordum-blue">
            Team
          </button>
          <Link href="/submitproposal/review-milestones">
            <button className="w-[10rem] font-medium text-sm px-5 py-2  rounded-full border border-ordum-blue">
              Milestones
            </button>
          </Link>
          <button className="w-[10rem] font-medium text-sm px-5 py-2 rounded-full border border-ordum-blue">
            Code
          </button>
        </div>

        <div className="mt-8 flex gap-4">
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
            <span className="underline hover:cursor-pointer">Example.com</span>
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
            computing technology, harnessing the principles of quantum mechanics
            to unlock immense computational power. Unlike classical computers
            that use bits to represent information as 0s and 1s, quantum
            computers employ qubits, which can exist in multiple states
            simultaneously. This fundamental property, known as superposition,
            allows quantum computers to perform parallel computations and
            explore numerous solutions simultaneously.
          </p>
          <div className="my-4 font-medium text-lg">Problem</div>
          <p>
            By leveraging superposition and another key quantum phenomenon
            called entanglement, quantum computers can solve complex problems
            with incredible speed and efficiency. They have the potential to
            revolutionize various fields, including cryptography, optimization,
            and scientific simulations. For example, quantum algorithms such as
            {`Shor's`} algorithm can efficiently factor large numbers, posing a
            significant threat to current encryption methods. Moreover, quantum
            computers excel at optimization problems, enabling faster and more
            effective solutions for logistical challenges, financial modeling,
            and supply chain management. They can analyze vast amounts of data
            and identify optimal solutions in ways that are currently infeasible
            for classical computers.
          </p>
          <div className="my-4 font-medium text-lg">Solution</div>
          <p>
            Scientific simulations stand to benefit immensely from quantum
            computers as well. They can simulate quantum systems more
            accurately, allowing scientists to explore molecular interactions,
            chemical reactions, and material properties in unprecedented detail.
            This capability has the potential to revolutionize drug discovery,
            material design, and quantum physics research. However, building and
            operating quantum computers is incredibly challenging due to the
            delicate nature of qubits. Maintaining coherence—the stability of
            {`qubits'`} quantum states—is a persistent obstacle. Quantum error
            correction techniques are being developed to mitigate errors and
            enhance the reliability of quantum computations.
          </p>
          <div className="my-4 font-medium text-lg">Team Credentials</div>
          <p>
            Researchers and companies worldwide, including IBM, Google, and
            Microsoft, are actively working on advancing quantum computing
            technologies. They are exploring various qubit implementations, such
            as superconducting circuits, trapped ions, topological qubits, and
            more, aiming to develop robust and scalable quantum systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrdumPreview;
