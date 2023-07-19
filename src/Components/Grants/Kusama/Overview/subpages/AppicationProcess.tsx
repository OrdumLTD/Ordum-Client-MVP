import Image from "next/image";
import Link from "next/link";

import smallSpender from "@/assets/graphs/small-spender.png";
import mediumSpender from "@/assets/graphs/medium-spender.png";
import bigSpender from "@/assets/graphs/big-spender.png";

// enum About {
//   Summary,
//   Activity,
//   Team,
// }

const ApplicationProcess = () => {
  //   const [aboutMenu, setAboutMenu] = useState(About.Summary);

  return (
    <div className=" mx-10 md:ml-16 md:mr-32  font-space-grotesk flex flex-col ">
      <div>
        <div className="flex mb-5">
          <button className="-mr text-2xl border rounded-full border-white border-1 w-12 h-12 font-semibold">
            1
          </button>
          <h3 className="ml-4 text-3xl">Understand the governance process </h3>
        </div>
        <div className="ml-14">
          <p className="mt-8 text-base">
            Both treasury proposals and network updates are executed through
            on-chain governance. It can be quite overwhelming and you are
            welcome to check out the full{" "}
            <a
              href="https://guide.kusama.network/docs/maintain-guides-polkadot-opengov/#origins-and-tracks"
              className="underline"
            >
              wiki here
            </a>
            . However, if you only wish to apply for a grant, we&rsquo;ve
            prepared a summary to get you started.{" "}
          </p>

          <p className="mt-8">
            The Kusama OpenGov model works in a way where 1x token = 1x vote.
            Once the vote is cast the tokens are locked up for a certain
            duration, and if the user chooses to do so for longer, the power of
            their vote can increase up to 6 times. Mind you;{" "}
            <span className="underline">staked</span> tokens can also be used to
            vote - which increases their utility.
          </p>

          <p className="mt-8">
            The treasury has multiple tracks, but the ones relevant to you are:
          </p>

          <ol className="mt-8">
            <li>
              <span className="font-semibold">1. Small Spender</span> - up to
              333.33 KSM from the treasury at once.
            </li>
            <li>
              <span className="font-semibold">2. Medium Spender</span> - up to
              3333.33 KSM from the treasury at once.
            </li>
            <li>
              <span className="font-semibold">3. Big Spender</span> - up to
              33333.33 KSM from the treasury at once.
            </li>
          </ol>

          <p className="mt-8">
            Note: *With further integrations we will also introduce bounties,
            which have been allocated curators and funds for specific types of
            projects.*{" "}
          </p>

          <p className="mt-8">
            Outline your project in either{" "}
            <a
              href="https://docs.google.com/document/d/14E019tobfgoQTGgX4LRnbh7grOlD8yQsfqWuAgrsJMw/edit"
              className="underline"
            >
              this template{" "}
            </a>{" "}
            or within <Link href="/dashboard">Ordum</Link>. Once you know how
            much your proposal costs, choose a track. Keep in mind that the
            difficulty of criteria increases proportionally with the amount of
            financing you require.
          </p>

          <p className="mt-8">
            If the proponent is not well known in the community then it is
            suggested to break down the project into milestones which can be
            payed out per delivery. With this method you can establish a
            reputation, grow, learn and build up your skills.
          </p>

          <p className="mt-8 font-semibold">
            There are 2 main criteria that impact the outcome of your proposal:
          </p>

          <ol className="mt-8">
            <li>
              - the approval rate (the basic voting: AYE-pass, NAY-reject,
              Abstain-neither).
            </li>
            <li>
              - support threshold (the % of all tokens in circulation used on 1
              referenda/proposal).
            </li>
          </ol>

          <p className="mt-8">
            Both of these can be visualised as curves that vary per track, which
            drop along the{" "}
            <span className="font-semibold">decision period </span>, lasting for
            14 days.{" "}
          </p>

          <p className="mt-8">
            If the proposal is passing, after 14 days it entered a confirmation
            period, whose duration differs per track. This period can be
            shortened if there is a high participation % and high approval
            rate(this is highly uncommon). If the proposal is still passing
            within this period, then it is confirmed and the only thing left to
            wait for is the execution of funds, which usually happens when there
            is a treasury burn(a mechanism in the tokenomics to prevent
            inflation). The proposal can enter the confirmation period multiple
            times, but they are limited per track.
          </p>

          <p className="mt-8 font-bold">
            Below are the curves per track and their submission deposits:
          </p>

          <p className="mt-8">
            {" "}
            1. Small Spender - up to 333.33 KSM from the treasury at once.
            Submission Deposit: 3.33 KSM{" "}
          </p>

          <Image
            className="mt-8"
            src={smallSpender}
            alt="Small spender graph"
            width={800}
          />

          <p className="mt-8">
            2. Medium Spender - up to 333.33 KSM from the treasury at once.
            Submission Deposit: 6.67 KSM
          </p>

          <Image
            className="mt-8"
            src={mediumSpender}
            alt="Medium spender graph"
            width={800}
          />

          <p className="mt-8">
            3. Big Spender - up to 33333.33 KSM from the treasury at once.
            Submission Deposit: 13.33 KSM
          </p>

          <Image
            className="mt-8"
            src={bigSpender}
            alt="Big spender graph"
            width={800}
          />
        </div>

        <div className="flex mt-16 mb-5">
          <button className="-mr text-2xl border rounded-full border-white border-1 w-12 h-12 font-semibold">
            2
          </button>
          <h3 className="ml-4 text-3xl">Join Element</h3>
        </div>
        <div className="ml-14">
          <p className="mt-8">
            If you think that the Kusama Treasury is the right choice for your
            project, create a{" "}
            <a href="https://element.io/" className="underline">
              Riot/Element
            </a>{" "}
            account to join our communication channels if you do not have one
            yet.
          </p>
          <ol className="mt-8 ml-10">
            <li>
              a.{" "}
              <a
                href="https://kusama.subsquare.io/login?redirect=%2F"
                className="underline"
              >
                Kusama Direction:
              </a>{" "}
              it is for discussions about Governance-related initiatives on the
              Kusama network, including submissions to the treasury.
            </li>
            <li>
              b.{" "}
              <a
                href="https://matrix.to/#/!HfRYKXBoPmDBCAWUEJ:polkadot.builders?via=web3.foundation&via=matrix.org&via=matrix.parity.io"
                className="underline"
              >
                Kusama Watercooler:
              </a>{" "}
              it is for any questions related to the Kusama network and the
              Kusama community in general.
            </li>
          </ol>
        </div>

        <div className="flex mt-16 mb-5">
          <button className="-mr text-2xl border rounded-full border-white border-1 w-12 h-12 font-semibold">
            3
          </button>
          <h3 className="ml-4 text-3xl">Draft Your Propolsal</h3>
        </div>
        <div className="ml-14">
          <p className="mt-8">
            Create the proposal document that will be submitted to the community
            to assess the quality of your initiative. A proposal template can be
            found <a className="underline">here</a> for you to use as a guide,
            but this is only a recommendation on how to structure your
            presentation to increase the odds of having informed discussions.
            Alternatively, you can{" "}
            <Link href="/dashboard">
              create your project proposal directly within Ordum.
            </Link>
          </p>
          <p className="mt-8">
            {" "}
            Note: Your proposal must present a problem, define a goal, and
            propose an  instrument to achieve this goal. Think about your
            project in the mid and long-term and make sure to include notes
            about any type of funding required to maintain the project{" "}
            <span className="font-semibold">after</span> its initial
            developments.
          </p>
        </div>

        <div className="flex mt-16 mb-5">
          <button className="-mr text-2xl border rounded-full border-white border-1 w-12 h-12 font-semibold">
            4
          </button>
          <h3 className="ml-4 text-3xl">Create Identity</h3>
        </div>
        <div className="ml-14">
          <p className="mt-8">
            Make sure that all accounts that will be used to post the Treasury
            proposal information on-chain have an{" "}
            <a className="underline">on-chain identity</a>.
          </p>
        </div>

        <div className="flex mt-16 mb-5">
          <button className="-mr text-2xl border rounded-full border-white border-1 w-12 h-12 font-semibold">
            5
          </button>
          <h3 className="ml-4 text-3xl">Seek Feedack</h3>
        </div>
        <div className="ml-14">
          <p className="mt-8">
            Post your proposal document (in view only) and all its information
            as a{" "}
            <a
              href="https://kusama.polkassembly.io/discussions"
              className="underline"
            >
              discussion
            </a>{" "}
            on one of Kusama’s forums such as{" "}
            <a
              href="https://kusama.polkassembly.io/discussions"
              className="underline"
            >
              Polkassembly
            </a>
            ,{" "}
            <a
              href="https://kusama.subsquare.io/discussions"
              className="underline"
            >
              Subsquare
            </a>
            , or{" "}
            <a
              href="https://treasury.bright.dev/learn-more?networkId=kusama"
              className="underline"
            >
              BrightTreasury
            </a>{" "}
            so that all feedback provided remains accessible.
          </p>
        </div>

        <div className="flex mt-16 mb-5">
          <button className="-mr text-2xl border rounded-full border-white border-1 w-12 h-12 font-semibold">
            6
          </button>
          <h3 className="ml-5 text-3xl">
            Update proposal based on feedback and submit proposal
          </h3>
        </div>
        <div className="ml-14">
          <p className="mt-8">
            Submit the proposal as an OpenGov referendum under the appropriate
            Track and pay the Decision deposit to finalise your submission.
          </p>
        </div>

        <div className="flex mt-16 mb-5">
          <button className="-mr text-2xl border rounded-full border-white border-1 w-12 h-12 font-semibold">
            7
          </button>
          <h3 className="ml-4 text-3xl">
            Add relevant information to your proposal
          </h3>
        </div>
        <div className="ml-14">
          <p className="mt-8">
            Log onto
            <a
              href="https://kusama.polkassembly.io/login"
              className="underline"
            >
              Polkassembly
            </a>{" "}
            or{" "}
            <a
              href="https://kusama.subsquare.io/login?redirect=%2F"
              className="underline"
            >
              Subsquare
            </a>{" "}
            with the same account used to submit the proposal on-chain and add
            contextual information to the post that was auto-generated by your
            on-chain submission. You should edit the title and description of
            the post to match all the information from earlier discussions, such
            as the proposal document, link to the original discussion, and any
            other relevant information. If you have applied through Ordum, all
            the information will be displayed within the platform.{" "}
          </p>
        </div>

        <div className="flex mt-16 mb-5">
          <button className="-mr text-2xl border rounded-full border-white border-1 w-12 h-12 font-semibold">
            8
          </button>
          <h3 className="ml-4 text-3xl">Engage</h3>
        </div>
        <div className="ml-14">
          {" "}
          <p className="mt-8">
            Continue to engage with the Community on Kusama forums and channels
            for the duration of the referendum, and at regular intervals after
            its approval.
          </p>
        </div>

        <div className="flex mt-16 mb-5">
          <button className="-mr text-2xl border rounded-full border-white border-1 w-12 h-12 font-semibold">
            9
          </button>
          <h3 className="ml-4 text-3xl">Report</h3>
        </div>
        <div className="ml-14">
          <p className="mt-8">
            Publish a proposal report on Kusama forums before seeking further
            funding for your project(s).
          </p>
        </div>
        {/* CTAs */}
        <div className="mt-16 ml-14 mb-20 flex flex-col gap-4">
          <button className="bg-black text-white py-2 md:py-4">
            Join Element and get to know the community
          </button>
          <button className="border py-2 md:py-4">
            Get in Touch With Any Questions
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcess;
