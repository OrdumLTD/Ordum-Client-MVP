/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { EditorState, LexicalEditor } from "lexical";

import { CLEAR_HISTORY_COMMAND } from "lexical";

/**
 * Takes a file and inputs its content into the editor state as an input field.
 * @param editor - The lexical editor.
 */
export function importFile(editor: LexicalEditor) {
  readTextFileFromSystem((text) => {
    console.log(text)
    const json = JSON.parse(text);
    console.log( JSON.stringify(json.editorState))
    const editorState = editor.parseEditorState(
      JSON.stringify(json.editorState)
    );
    editor.setEditorState(editorState);
    editor.dispatchCommand(CLEAR_HISTORY_COMMAND, undefined);
  });
}

function readTextFileFromSystem(callback: (text: string) => void) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.addEventListener("change", (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (target.files) {
      const file = target.files[0];
      const reader = new FileReader();
      reader.readAsText(file, "UTF-8");

      reader.onload = (readerEvent) => {
        if (readerEvent.target) {
          const content = readerEvent.target.result;
          callback(content as string);
        }
      };
    }
  });
  input.click();
}

type DocumentJSON = {
  editorState: EditorState;
  lastSaved: number;
  source: string | "Lexical";
};

/**
 * Generates a .json file containing the current editor state
 * @param editor - The lexical editor.
 * @param config - An object that optionally contains fileName and source. fileName defaults to
 * the current date (as a string) and source defaults to json.
 */
export function exportFile(
  editor: LexicalEditor,
  config: Readonly<{
    fileName?: string;
    source?: string;
  }> = Object.freeze({})
) {
  const now = new Date();
  const editorState = editor.getEditorState(); 
  const documentJSON: DocumentJSON = {
    editorState: editorState,
    lastSaved: now.getTime(),
    source: config.source || "Lexical",
  };
  const fileName = config.fileName || now.toISOString();
  exportBlob(documentJSON, `${fileName}.json`);
}

// Adapted from https://stackoverflow.com/a/19328891/2013580
function exportBlob(data: DocumentJSON, fileName: string) {
  const a = document.createElement("a");
  const body = document.body;

  if (body === null) {
    return;
  }

  body.appendChild(a);
  a.style.display = "none";
  const json = JSON.stringify(data);
  const blob = new Blob([json], {
    type: "octet/stream",
  });
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
}

// Adds the current text proposal to state
export function addFileToState(
  addToState: ({}) => void,
  editor: LexicalEditor,
  config: Readonly<{
    fileName?: string;
    source?: string;
  }> = Object.freeze({})
) {
  const now = new Date();
  const editorState = editor.getEditorState();
  // console.log(editorState)
  const documentJSON: DocumentJSON = {
    editorState: editorState,
    lastSaved: now.getTime(),
    source: config.source || "Lexical",
  };
//  console.log(documentJSON.editorState)
  const json = JSON.stringify(documentJSON.editorState);
  // console.log(json)
  // const blob = new Blob([json], {
  //   type: "octet/stream",
  // });
  addToState(json);
}


// FIX THIS NOW
export function readFileFromState(editor: LexicalEditor) {
  // readTextFileFromState((text =>{
  //   console.log(123)
  //   const json = JSON.parse(text);
  //   console.log( JSON.stringify(json.editorState))
  //   const editorState = editor.parseEditorState(
  //     JSON.stringify(json.editorState)
  //   );
  //   editor.setEditorState(editorState);
  //   editor.dispatchCommand(CLEAR_HISTORY_COMMAND, undefined);
  // }))
}

function readTextFileFromState(callback: (text: string) => void){

}
