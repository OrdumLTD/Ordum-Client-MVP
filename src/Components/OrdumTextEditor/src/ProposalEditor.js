// Move to a proper folder later

import { useState } from "react";
import { useRouter } from "next/navigation";

import "./styles.css";
// import Editor from "./Editor";
import CustomProposalEditor from "./CustomProposalEditor";
import { useProposalContext } from "@/Context/submitPropolsal";

// import FileUploadDownload from "./plugins/FileUploadDownload";

export default function App() {
  const { proposalStep, changeToStep } = useProposalContext();
  const router = useRouter();

  const changePropolsalSubPage = async (step, route) => {
    changeToStep(step);
    await router.push(route);
  };

  const [html, setHTML] = useState("");
  const [templateVariables, setTemplateVariables] = useState("");
  const [editor, setEditor] = useState(null);
  const [json, setJSON] = useState("");

  const onLoad = (fileContents) => {
    const editorState = editor.parseEditorState(fileContents);
    editor.setEditorState(editorState);
    editor.dispatchCommand(CLEAR_HISTORY_COMMAND, undefined);
  };
  return (
    <div className="App">
      <div className="border border-black flex justify-between">
        <button
          className="font-bold ml-5"
          onClick={() => {
            changePropolsalSubPage(1, "/submitproposal/tldr");
          }}
        >
          1. TL;DR {"<"}
        </button>
        <div>
          <span className="font-semibold">2. The Proposal: </span>{" "}
        </div>
        <button
          className="font-bold mr-5"
          onClick={() => {
            changePropolsalSubPage(2, "/submitproposal/team");
          }}
        >
          {">"} 3. Team
        </button>
      </div>
      <div></div>
      <CustomProposalEditor documentName={"Test Proposal"} />
      {/* <FileUploadDownload onLoad={onLoad} json={json} html={html} templateVariables={templateVariables} /> */}
    </div>
  );
}
