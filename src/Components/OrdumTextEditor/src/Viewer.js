// Use only to view document, not edit them.
// Make sure all nodes and plugins match the edit doc, minus the Actions and Toolbar.

import dynamic from "next/dynamic";
import React from "react";

import "./styles.css";

import ExampleTheme from "./themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";
const TableCellResizer = dynamic(() => import("./plugins/TableCellResizer"), {
  ssr: false,
});
const ImagesPlugin = dynamic(() => import("./plugins/ImagesPlugin"), {
  ssr: false,
});
import { ImageNode } from "./nodes/ImageNode";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";
// import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
// import ActionsPlugin from './plugins/ActionsPlugin';

function Placeholder() {
  return <div className="editor-placeholder">Nothing to view here</div>;
}

const editorConfig = {
  // The editor theme
  theme: ExampleTheme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  //Cannot edit text docment
  editable: false,
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    ImageNode,
    AutoLinkNode,
    LinkNode,
  ],
};

export default function Viewer(props) {
  console.log(props.doc);
  const config =
    props?.doc === undefined
      ? editorConfig
      : {
          ...editorConfig,
          editorState: props.doc.editorState,
        };

  return (
    <LexicalComposer initialConfig={config}>
      <div className="editor-container">
        {/* <ToolbarPlugin /> */}
        <div className="editor-inner">
          <RichTextPlugin
            contentEditable={<ContentEditable className="editor-input" />}
            placeholder={<Placeholder />}
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          {/* <TreeViewPlugin /> */}
          <AutoFocusPlugin />
          <CodeHighlightPlugin />
          <ListPlugin />
          <LinkPlugin />
          <AutoLinkPlugin />
          <TablePlugin />
          <TableCellResizer />
          <ImagesPlugin />
          <ListMaxIndentLevelPlugin maxDepth={7} />
          <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
          {/* <ActionsPlugin isRichText={true}/> */}
        </div>
      </div>
    </LexicalComposer>
  );
}
