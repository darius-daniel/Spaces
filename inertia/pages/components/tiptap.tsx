import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './toolbar';
import Underline from '@tiptap/extension-underline';

interface Props {
  content: string;
  onChange: Function;
}

function Tiptap({ content, onChange }: Props) {
  const handleChange = (newContent: string) => onChange(newContent);
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class:
          'flex flex-col px-4 py-3 justify-start border border-gray-700 text-gray items-start w-full h-96 gap-3 font-medium text-[16px] pt-4 rounded-b-md outline-none',
      },
    },
    onUpdate: ({ editor }) => handleChange(editor.getHTML()),
  });

  return (
    <div className="w-full px-4">
      <Toolbar editor={editor} content={content} />
      <EditorContent editor={editor} style={{ whiteSpace: 'pre-line' }} />
    </div>
  );
}

export default Tiptap;
