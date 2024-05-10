import { useCurrentEditor } from '@tiptap/react';

import { LuHeading1, LuHeading2, LuHeading3 } from 'react-icons/lu';
import { TbBlockquote } from 'react-icons/tb';
import { GrRedo, GrUndo } from 'react-icons/gr';
import { RiCodeBlock, RiListOrdered2, RiListUnordered } from 'react-icons/ri';
import { FaBold, FaCode, FaItalic, FaParagraph, FaUnderline } from 'react-icons/fa6';

export default function EditorToolbar() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <div className="flex flex-row">
      <div className="flex flex-row me-4">
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive('paragraph')
              ? 'bg-violet-200 p-1'
              : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <FaParagraph />
          </span>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={
            editor.isActive('heading', { level: 1 })
              ? 'bg-violet-200 p-1'
              : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <LuHeading1 />
          </span>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={
            editor.isActive('heading', { level: 2 })
              ? 'bg-violet-200 p-1'
              : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <LuHeading2 />
          </span>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={
            editor.isActive('heading', { level: 3 })
              ? 'bg-violet-200 p-1'
              : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <LuHeading3 />
          </span>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={
            editor.isActive('blockquote')
              ? 'bg-violet-200 p-1'
              : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <TbBlockquote />
          </span>
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className={
            editor.isActive('undo') ? 'bg-violet-200 p-1' : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <GrUndo />
          </span>
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className={
            editor.isActive('redo') ? 'bg-violet-200 p-1' : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <GrRedo />
          </span>
        </button>
      </div>

      <div className="flex flex-row me-4">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold') ? 'bg-violet-200 p-1' : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <FaBold />
          </span>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive('italic')
              ? 'bg-violet-200 p-1'
              : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <FaItalic />
          </span>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={
            editor.isActive('strike')
              ? 'bg-violet-200 p-1'
              : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <FaUnderline />
          </span>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={
            editor.isActive('codeBlock')
              ? 'bg-violet-200 p-1'
              : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <RiCodeBlock />
          </span>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={
            editor.isActive('code') ? 'bg-violet-200 p-1' : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <FaCode />
          </span>
        </button>
      </div>

      <div className="flex flex-row me-4">
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={
            editor.isActive('bulletList')
              ? 'bg-violet-200 p-1'
              : 'bg-violet-100 hover:bg-violet-200 p-1'
          }
        >
          <span>
            <RiListUnordered />
          </span>
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={
            editor.isActive('orderedList')
              ? 'bg-violet-200 p-1'
              : 'bg-violet-100 hover:bg-violet-200 p-1 me-4'
          }
        >
          <span>
            <RiListOrdered2 />
          </span>
        </button>
      </div>

      <hr className="text-slate-600 mt-1 mb-2" />
    </div>
  );
}
