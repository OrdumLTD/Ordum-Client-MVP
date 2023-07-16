import { ChangeEvent, useState } from "react";

import { Tiptap } from "./TipTap";
import Details from "./Details";

type TextEditor = {
  text?: string;
  changeText?: (text:string) => void;
  className?: string;
};

const TextEditorDropdown: React.FC<TextEditor> = (props) => {
  const [visible, setVisilble] = useState(false);
  const [description, setDescription] = useState(props.text);

  const setVisibility = (visible: boolean) => {
    if (visible) return "visile";
    return "hidden";
  };

  return (
    <div className={"text-black " + props.className}>
      <button
        className="hover:cursor-pointer text-gray-400 mb-3"
        onClick={() => {
          setVisilble(!visible);
        }}
      >
        Click here to type and open text editor.
      </button>
      <div className={setVisibility(visible)}>
        <Tiptap text={props.text} setDescription={setDescription} changeText={props.changeText} />
        {/* <Details description={description} /> */}
      </div>
    </div>
  );
};

export default TextEditorDropdown;
