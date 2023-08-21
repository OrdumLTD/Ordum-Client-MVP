"use client";

"useclient";

// import Editor from "@/Components/LexicalTextEditor/Editor";
import Editor from "@/Components/OrdumTextEditor/Editor";
// import Editor from "@/Components/TestEditor/packages/lexical-playground/src/Editor";
import { useState } from "react";

const TextEditor: React.FC = () => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState(text);

  return (
    <div className="m-10">
      <Editor />
    </div>
  );
};

export default TextEditor;
