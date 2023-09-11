"use client";

import { ReactNode, useEffect } from "react";
import SideBar from "./sidebar/page";
import Header from "./header/page";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  useEffect(() => {}, []);

  return (
    <main className="flex flex-col h-screen ">
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 overflow-hidden">
          <div className="flex">
            <SideBar />
          </div>
          <div className="flex flex-1 flex-col">
            <Header />
            <div className="flex flex-1 overflow-y-auto overflow-hidden paragraph ">
              <div className="ml-8 md:ml-20">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
