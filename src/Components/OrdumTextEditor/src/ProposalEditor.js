import { useState } from "react";
import "./styles.css";
// import Editor from "./Editor";
import CustomProposalEditor from "./CustomProposalEditor"
// import FileUploadDownload from "./plugins/FileUploadDownload";

export default function App() {
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
        <div>1. TL;DR</div>
        <div><span className="font-semibold">2. The Proposal: </span> </div>
        <div>3. Team</div>
    </div>
    <div>

    </div>
      <CustomProposalEditor documentName={"Test Proposal"}/>
      {/* <FileUploadDownload onLoad={onLoad} json={json} html={html} templateVariables={templateVariables} /> */}
    </div>
  );
}
