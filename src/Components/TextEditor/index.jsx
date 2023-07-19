import { useState } from "react";

import { Tiptap } from "./TipTap";
import Details from "./Details"

const TextEditor = ({changeText}) => {

  const [description, setDescription] = useState("");

  return (
    <div className="">
      {/* {console.log(description)} */}
      <Tiptap setDescription={setDescription} changeText={changeText}/>
      {/* <Details description={description} /> */}
    </div>
  );
}

export default TextEditor;