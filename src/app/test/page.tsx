"use client";

import MemberEdit from "@/Components/Member/MemberEdit";
import MemberBasic from "@/Components/Member/MemberBasic";
import Milestone from "@/Components/milestones/Milestone/milestone";
import Team from "@/Components/Team";
import Task from "@/Components/task/Task";
import Layout from "@/Components/ui/Layout";
import MemberCreate from "@/Components/Member/MemberCreate";
import TaskPreview from "@/Components/task/TestPreview";
import MilestoneCreate from "@/Components/milestones/MilestoneCreate";
import Button from "@/Components/ui/buttons/Button";
import Dropdown from "@/Components/ui/Dropdown";
// import TextEditor from "@/Components/TextEditor";
// import TextEditorDropdown from "@/Components/TextEditor/TextEditorDropdown";
import Modal from "@/Components/ui/Modal";
import { v4 } from "uuid";
import { useEffect, useState } from "react";

import subscanApiHeaders from "@/global/subscanHeader";
import { useReferendaContext } from "@/Context/ReferendaContext";
import axios from "axios";

const Test = () => {
  const [modalIsOpen, setModalisOpen] = useState(false);
  const [uuid, setUuid] = useState("");

  const [milestones, setMilestones] = useState<any>([]);

  const referendaCtx = useReferendaContext();

  const AddMileStone = (milestone: any) => {
    setMilestones([...milestones, milestone]);
  };

  //
  const getReferendumCount = async (): Promise<number> => {
    let result;
    const raw = JSON.stringify({
      row: 1,
      page: 0,
    });
    await axios
      .post(
        "https://kusama.api.subscan.io/api/scan/referenda/referendums",
        raw,
        subscanApiHeaders
      )
      .then((res) => {
        result = res.data.data.count;
        return result;
      })
      .catch((e) => {
        console.log(e);
      });
    return result;
  };

  const getAllReferenda = async (count: number) => {
    let result = [];

    //Subscan use pagination - 100 rows per page
    const rows = 100;
    const reminder = count % 100;
    const numberOfPages = (count - reminder) / rows;

    console.log(numberOfPages);
    console.log("Fetching from Subscan");

    const populateReferendaContext = async () => {
      for (let i = numberOfPages + 1; i > 0; i--) {
        const raw = JSON.stringify({
          row: 100,
          page: i - 1,
        });
        await axios
          .post(
            "https://kusama.api.subscan.io/api/scan/referenda/referendums",
            raw,
            subscanApiHeaders
          )
          .then((res) => {
            result = [...result, ...res.data.data.list];
          });
      }
      const proposals = result.map((item) => {
        return {
          referendum_index: item?.referendum_index,
          account: {
            address: item?.account.address,
            display: item?.account.display,
            identity: item?.account.identity,
          },
          origins: item?.origins,
        };
      });
      referendaCtx.addProposals(proposals);
      // console.log(proposals)
    };

    populateReferendaContext();
  };

  return (
    <div>
      {" "}
      <div className="m-2 flex flex-col gap-2 items-start">
        <button
          className="border p-2 border-2 border-black rounded-md"
          onClick={() => getReferendumCount().then((res) => console.log(res))}
        >
          Test getCount
        </button>
        <button
          className="border p-2 border-2 border-black rounded-md"
          onClick={() =>
            getReferendumCount().then((res) => getAllReferenda(res))
          }
        >
          Test getAll
        </button>
      </div>
      <div>Data: </div>
      {referendaCtx.propsals ? <ul>{referendaCtx.propsals.map(() => 1)}</ul> : null}
    </div>
  );
};

export default Test;

{
  /* <Layout>
        <div className="m-10">
          <div className="mt-10 mb-20">
            <h1 className="text-3xl font-bold">NEW MILESTONES</h1>
            <div className="mt-10">
              <MilestoneCreate addMilestone={setMilestones}/>
            </div>
          </div>

          <div className="mt-10 mb-20">
            <h1 className="text-3xl font-bold">TEST UUID</h1>
            <button onClick={() => setUuid(v4())}> Create a new UUID</button>
            <p>New UUID: {uuid}</p>
          </div>
          <div>
            <TextEditorDropdown />
          </div>
          <button onClick={() => setModalisOpen(!modalIsOpen)}>
            Show modal
          </button>
          <Modal isOpen={modalIsOpen} handleIsOpen={setModalisOpen}>
            {" "}
            <p className="text-black">Test</p>{" "}
          </Modal>
          {/* <Modal>
            <div className="flex flex-col overflow-auto">
              <MemberCreate />
            </div>
          </Modal> */
}

{
  /* <div className="mt-10 text-black w-8/12">
            <TextEditor />
          </div> */
}

//     <Dropdown />

//     <Button className="" primeColor>
//       Hi there buddy
//     </Button>

//     <Button className="block my-10" secondaryColor>
//       Hi there buddy
//     </Button>

//     <Button className="block my-10" primeColor>
//       Hi there buddy
//     </Button>
//     <div className="">
//       <h1 className="text-2xl font-bold">MILSTONE CREATE</h1>
//       <MilestoneCreate />

//       <h1 className="mt-10 text-2xl font-bold">Task</h1>
//       <Task
//       // name="1st tast"
//       // description="Task testing"
//       // taskType="Research"
//       />

//       <div className="mt-10">
//         <h1 className="text-2xl font-bold">Task preview</h1>
//         <TaskPreview name="Test Work" type="Type test" />
//       </div>

//       <div className="mt-10">
//         <h1 className="text-2xl font-bold">Member Create</h1>
//         <MemberCreate />
//       </div>

//       <div className="mt-10">
//         <h1 className="text-2xl font-bold">Member Edit</h1>
//         <MemberEdit name="Jone Doe" role="Boss Girl" />
//       </div>

//       <div className="mt-10">
//         <h1 className="text-2xl font-bold">Member Basic</h1>
//         <MemberBasic name="John Doe" role="CTO" />
//       </div>

//       <div className="mt-10">
//         <h1 className="text-2xl font-bold">Team page</h1>
//         <Team
//           members={[
//             { name: "Jane Doe", role: "The boss" },
//             { name: "Crypto Joe", role: "The tech guy" },
//           ]}
//         />
//       </div>
//     </div>
//   </div>
// </Layout> */}
