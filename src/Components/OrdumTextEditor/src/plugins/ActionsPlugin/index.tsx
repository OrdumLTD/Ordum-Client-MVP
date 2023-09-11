import type { LexicalEditor } from "lexical";

// import { exportFile, importFile } from "@lexical/file";

import { useProposalContext } from "../../../../..//Context/submitPropolsal";

import { readFileFromState, importFile, addFileToState } from "./fileHandling";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
// import * as React from "react";
import React, { useEffect, useState } from "react";

import useModal from "../../hooks/useModal";

const ActionsPlugin = ({
  isRichText,
  trigger,
}: {
  isRichText: boolean;
  trigger: () => {};
}): JSX.Element => {
  const { contextProposal, changeProposalContext } = useProposalContext();

  const [editor] = useLexicalComposerContext();
  const [isEditorEmpty, setIsEditorEmpty] = useState(true);
  const [modal, showModal] = useModal();
  const [proposalName, setProposalName] = useState("ExampleName");

  // if contextProposal is not null: Populate
  useEffect(() => {
    //@ts-ignore
    readFileFromState(editor, contextProposal);
  });

  useEffect(() => {
    //@ts-ignore
    if (trigger) {
      addFileToState(changeProposalContext, editor, {
        fileName: `Ordum ${new Date().toISOString()}`,
        source: "Ordum",
      });
    }
  }, [trigger]);

  return (
    <div className="actions w-full flex items-center justify-between">
      <input
        className="border font-semibold p-2"
        value={proposalName}
        onChange={(e) => setProposalName(e.target.value)}
      />
      <div>
        <button
          className="action-button import"
          onClick={() => importFile(editor)}
          title="Import"
          aria-label="Import editor state from JSON"
        >
          <i className="import" />
        </button>
        {/* <button
          className="action-button export"
          onClick={() =>
            exportFile(editor, {
              fileName: `Ordum ${new Date().toISOString()}`,
              source: "Ordum",
            })
          }
          title="Export"
          aria-label="Export editor state to JSON"
        >
          <i className="export" />
        </button> */}
        <button
          className="action-button export"
          onClick={() =>
            addFileToState(changeProposalContext, editor, {
              fileName: `Ordum ${new Date().toISOString()}`,
              source: "Ordum",
            })
          }
          title="Save"
          aria-label="Store document in state"
        >
          <i className="export" />
        </button>
      </div>
      {modal}
    </div>
  );
};

export default ActionsPlugin;
