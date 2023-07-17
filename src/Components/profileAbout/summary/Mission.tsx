"use client";
//ToDo - Add props for links and

import Link from "next/link";

type Mission = {
  children?: React.ReactNode;
  className?: string;
};

const Mission: React.FC<Mission> = ({ className }) => {
  return (
    <div className={" " + className}>
      <div>
        <p className="text-lg md:text-3xl">Mission</p>
        <div className=" mt-5">
          <span>Proposals may consist of (but are not limited to):</span>
          <ul className="mx-4 list-disc">
            <li>Infrastructure deployment and continued operation.</li>
            <li>
              Network security operations (monitoring services, continuous
              auditing).
            </li>
            <li>Ecosystem provisions (collaborations with friendly chains).</li>
            <li>
              Marketing activities (advertising, paid features, collaborations).
            </li>
            <li>
              Community events and outreach (meetups, pizza parties,
              hackerspaces).
            </li>
            <li>
              Software development (wallets and wallet integration, clients and
              client upgrades)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mission;
