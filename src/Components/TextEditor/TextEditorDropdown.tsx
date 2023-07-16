import { SetStateAction, useState } from "react";

import { Tiptap } from "./TipTap";
import Details from "./Details";

type TextEditor = {
  text?: string;
  changeText?: React.Dispatch<SetStateAction<string>>;
  className?: string;
};

const TextEditorDropdown: React.FC<TextEditor> = (props) => {
  const [visible, setVisilble] = useState(true);
  const [description, setDescription] = useState(props.text);

  const setVisibility = (visible: boolean) => {
    if (visible) return "visile";
    return "hidden";
  };

  return (
    <div className={"text-black " + props.className}>
      <button
        className="hover:cursor-pointer text-gray-400"
        onClick={() => {
          setVisilble(!visible);
        }}
      >
        Click here to type and open text editor.
      </button>
      <div className={setVisibility(visible)}>
        <Tiptap setDescription={setDescription} changeText={props.changeText} />
        {/* <Details description={description} /> */}
      </div>
    </div>
  );
};

export default TextEditorDropdown;
