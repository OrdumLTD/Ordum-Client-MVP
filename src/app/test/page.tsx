"use client";

import MemberEdit from "@/Components/Member/MemberEdit";
import MemberBasic from "@/Components/Member/MemberBasic";
import Milestone from "@/Components/milestones/Milestone/milestone";
import Team from "@/Components/Team";
import Task from "@/Components/tast/task";
import Layout from "@/Components/ui/Layout";
import MemberCreate from "@/Components/Member/MemberCreate";
import TaskPreview from "@/Components/tast/TestPreview";
import MilestoneCreate from "@/Components/milestones/MilestoneCreate";
import Button from "@/Components/ui/buttons/Button";

const Test = () => {
  return (
    <div>
      <Button className="" primeColor>
            Hi there buddy
          </Button>
      <Layout>
        <div className="m-10">
          <Button className="" primeColor>
            Hi there buddy
          </Button>

          <Button className="block my-10" secondaryColor>
            Hi there buddy
          </Button>

          <Button className="block my-10" primeColor>
            Hi there buddy
          </Button>
          <div className="">
            <h1 className="text-2xl font-bold">MILSTONE CREATE</h1>
            <MilestoneCreate />

            <h1 className="mt-10 text-2xl font-bold">Task</h1>
            <Task
            // name="1st tast"
            // description="Task testing"
            // taskType="Research"
            />

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Task preview</h1>
              <TaskPreview name="Test Work" type="Type test" />
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Member Create</h1>
              <MemberCreate />
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Member Edit</h1>
              <MemberEdit name="Jone Doe" role="Boss Girl" />
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Member Basic</h1>
              <MemberBasic name="John Doe" role="CTO" />
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Team page</h1>
              <Team
                members={[
                  { name: "Jane Doe", role: "The boss" },
                  { name: "Crypto Joe", role: "The tech guy" },
                ]}
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Test;
