import { Editor } from '@tiptap/react';
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Undo,
  Redo,
  Code,
  QuoteIcon,
} from 'lucide-react';

interface Props {
  content: string;
  editor: Editor | null;
}

function Toolbar({ content, editor }: Props) {
  if (!editor) return <></>;
  return (
    <div className="px-4 py-3 rounded-tl-md rounded-tr-md flex justify-between items-start gap-5 w-full flex-wrap border border-b-0 border-gray-700">
      <div className="flex justify-start items-center gap-5 w-full lg:w-10/12 flex-wrap">
        <button
          onClick={(event) => {
            event.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive('bold') ? 'bg-sky-700 text-white p-2 rounded-lg' : 'text-sky-400'
          }
        >
          <Bold className="w-5 h-5" />
        </button>

        <button
          onClick={(event) => {
            event.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive('italic') ? 'bg-sky-700 text-white p-2 rounded-lg' : 'text-sky-400'
          }
        >
          <Italic className="w-5 h-5" />
        </button>

        <button
          onClick={(event) => {
            event.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive('underline') ? 'bg-sky-700 text-white p-2 rounded-lg' : 'text-sky-400'
          }
        >
          <Underline className="w-5 h-5" />
        </button>

        <button
          onClick={(event) => {
            event.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive('strike') ? 'bg-sky-700 text-white p-2 rounded-lg' : 'text-sky-400'
          }
        >
          <Strikethrough className="w-5 h-5" />
        </button>

        <button
          onClick={(event) => {
            event.preventDefault();
            editor.chain().focus().toggleHeading({ level: 2 }).run();
          }}
          className={
            editor.isActive('heading', { level: 2 })
              ? 'bg-sky-700 text-white p-2 rounded-lg'
              : 'text-sky-400'
          }
        >
          <Heading2 className="w-5 h-5" />
        </button>

        <button
          onClick={(event) => {
            event.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive('bulletList') ? 'bg-sky-700 text-white p-2 rounded-lg' : 'text-sky-400'
          }
        >
          <List className="w-5 h-5" />
        </button>

        <button
          onClick={(event) => {
            event.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive('orderedList') ? 'bg-sky-700 text-white p-2 rounded-lg' : 'text-sky-400'
          }
        >
          <ListOrdered className="w-5 h-5" />
        </button>

        <button
          onClick={(event) => {
            event.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive('blockQuote') ? 'bg-sky-700 text-white p-2 rounded-lg' : 'text-sky-400'
          }
        >
          <QuoteIcon className="w-5 h-5" />
        </button>

        <button
          onClick={(event) => {
            event.preventDefault();
            editor.chain().focus().toggleCode().run();
          }}
          className={
            editor.isActive('blockCode') ? 'bg-sky-700 text-white p-2 rounded-lg' : 'text-sky-400'
          }
        >
          <Code className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
