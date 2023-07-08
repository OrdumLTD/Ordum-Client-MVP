"use client";

import Member from "@/Components/Member/Member";
import MemberBasic from "@/Components/Member/MemberBasic";
import Milestone from "@/Components/milestones/Milestone/milestone";
import Task from "@/Components/tasks/task";
import Layout from "@/Components/ui/Layout";

const Test = () => {
  return (
    <div>
      <Layout>
        <div className="m-10 w-full">
          <h1 className="text-2xl font-bold">MILSTONE</h1>
          <Milestone name="1st milestone" description="Testing" />

          <div className="mt-10">
            <h1 className="text-2xl font-bold">Task</h1>
            <Task
              name="1st tast"
              description="Task testing"
              taskType="Research"
            />

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Member</h1>
              <Member name="Jone Doe" role="Boss Girl" />
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-bold">Member Basic</h1>
              <MemberBasic name="John Doe" role="CTO" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Test;
