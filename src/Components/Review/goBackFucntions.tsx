import Link from "next/link";

const goBackTLDR = () => {
  return (
    <Link href={"/submitproposal/tldr"} className="underline text-blue-400">
      Go back and edit
    </Link>
  );
};

const goBackCotext = () => {
  return (
    <Link
      href={"/submitproposal/theproposal"}
      className="underline text-blue-400"
    >
      Go back and edit
    </Link>
  );
};

export { goBackTLDR, goBackCotext };
