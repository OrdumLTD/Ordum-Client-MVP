"use client";

"useclient";

// import Editor from "@/Components/LexicalTextEditor/Editor";
// import Editor from "@/Components/OrdumTextEditor/Editor";
// import Editor from "@/Components/TestEditor/packages/lexical-playground/src/Editor";
import Editor from "@/Components/OrdumTextEditor/src/app"
import Viewer from "@/Components/OrdumTextEditor/src/Viewer"
import { useState } from "react";

const TextEditor: React.FC = () => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState(text);

  const file = {editorState: "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"It WORKS\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}"}


  // editorState: "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"It WORKS\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}"
  
  return (
    <div className="m-10">
      <Viewer doc={file} />
    </div>
  );
};

export default TextEditor;
