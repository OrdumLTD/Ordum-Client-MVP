import type {LexicalEditor} from 'lexical';

import {exportFile, importFile} from '@lexical/file';

import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import * as React from 'react';
import { useState} from 'react';

import useModal from '../../hooks/useModal';

export default function ActionsPlugin({
  isRichText,
}: {
  isRichText: boolean;
}): JSX.Element {
  const [editor] = useLexicalComposerContext();
  const [isEditorEmpty, setIsEditorEmpty] = useState(true);
  const [modal, showModal] = useModal();

  return (
    <div className="actions">
      <button
        className="action-button import"
        onClick={() => importFile(editor)}
        title="Import"
        aria-label="Import editor state from JSON">
        <i className="import" />
      </button>
      <button
        className="action-button export"
        onClick={() =>
          exportFile(editor, {
            fileName: `Ordum ${new Date().toISOString()}`,
            source: 'Ordum',
          })
        }
        title="Export"
        aria-label="Export editor state to JSON">
        <i className="export" />
      </button>
      {modal}
    </div>
  );
}
