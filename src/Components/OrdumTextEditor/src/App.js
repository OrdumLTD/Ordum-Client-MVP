import { useState } from "react";
import "./styles.css";
import Editor from "./Editor";
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
      <h1>Ordum`s Text Editor Example</h1>
      <p>This may look different in the app</p>
      <Editor />
      {/* <FileUploadDownload onLoad={onLoad} json={json} html={html} templateVariables={templateVariables} /> */}
    </div>
  );
}
