import { useUserContext } from "@/Context/user";
import { useProposalContext } from "@/Context/submitPropolsal";
import { goBackTLDR, goBackCotext } from "../../goBackFucntions";
import Link from "next/link";

const Summary = () => {
  const {
    tldr,
    context,
  } = useProposalContext();

  return (
    <div>
      <div className="mt-8 flex gap-4">
        <div className="flex flex-col">
          <span className="font-bold text-sm">Posted</span>
          <span>No yet</span>
        </div>
        <div className="flex flex-col text-sm">
          <span className="font-bold">Start Date</span>
          <span>{tldr?.startingDate ?? goBackTLDR()}</span>
        </div>
        <div className="flex flex-col text-sm">
          <span className="font-bold">Deadline</span>
          <span>{tldr?.deadLine ?? goBackTLDR()}</span>
        </div>
        <div className="flex flex-col text-sm">
          <span className="font-bold">Requested Ammount</span>
          <span>{tldr?.fundingAmount ?? goBackTLDR()} USD</span>
        </div>
      </div>

      <div className="mt-8">
        <span className="text-sm font-bold">External Links</span>
        <div className="flex gap-3 text-base">
          {/* <span className="underline hover:cursor-pointer">Example.com</span>
          <span className="underline hover:cursor-pointer">
            Previos Proposal
          </span>
          <span className="underline hover:cursor-pointer">Github</span>
          <span className="underline hover:cursor-pointer">Figma designs</span> */}
          {tldr?.externalLinks ? (
            <ul className="flex gap-2">
              {tldr?.externalLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item} className="underline">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            goBackTLDR()
          )}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-medium text-xl">Short Descripton</h2>
        <div className="mt-0.5 border-t" />

        <div className="my-4 font-medium text-lg">Introduction</div>
        <p>
        <p>{context?.contextOfTheProposal ?? goBackCotext()}</p>
        </p>
        <div className="my-4 font-medium text-lg">Problem</div>
        <p>{context?.problemStatement ?? goBackCotext()}</p>
        <div className="my-4 font-medium text-lg">Solution</div>
        <p>{context?.solution ?? goBackCotext()}</p>
        <div className="my-4 font-medium text-lg">Team Credentials</div>
        <p>
          Coming soon
        </p>
      </div>
    </div>
  );
};

export default Summary;
