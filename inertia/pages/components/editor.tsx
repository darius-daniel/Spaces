import { Note } from '~/utils/interfaces';
import { usePage } from '@inertiajs/react';
import axiosInstance from '~/utils/axios_instance';
import { AxiosError, AxiosResponse } from 'axios';
import { Save } from 'lucide-react';

interface Props {
  note: {
    attrs: Note;
    setter: React.Dispatch<React.SetStateAction<Note>>;
  };
}

export default function Editor({ note }: Props) {
  const prefix = usePage().url;

  const handleChange = (event: { target: { id: any; value: any } }) => {
    note.setter((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (note.attrs.id) {
      axiosInstance
        .put(`${prefix}/notes/update`, { ...note.attrs })
        .then((response: AxiosResponse<Note>) => {
          note.setter(response.data);
        })
        .catch((error: AxiosError) => console.error(error.message));
    } else {
      axiosInstance
        .post(`${prefix}/notes/create`, { ...note.attrs })
        .then((response: AxiosResponse<Note>) => {
          note.setter(response.data);
        })
        .catch((error: AxiosError) => console.error(error.message));
    }
  };

  return (
    <form className="h-full w-full px-4" onSubmit={handleSubmit}>
      <h1 className="flex flex-row w-full justify-between bg-purple-50 mb-0 mt-3 text-3xl text-purple-800 mx-auto pt-6 ps-4 rounded-t-2xl">
        Add a Note
        <button
          type="submit"
          className="bg-purple-800 hover:bg-purple-900 disabled:bg-purple-900 text-white px-5 py-2 me-5 rounded-xl"
          disabled={!note.attrs.title}
        >
          <Save />
        </button>
      </h1>
      <input
        className="text-2xl font-bold bg-purple-50 px-4 py-3 w-full hover:bg-purple-200 focus:border-none"
        placeholder="Title"
        value={note.attrs.title}
        id="title"
        onChange={handleChange}
      />

      <textarea
        name="content"
        id="content"
        value={note.attrs.content}
        className="text-[12] bg-purple-50 hover:bg-purple-200 px-4 py-3 w-full rounded-b-xl shadow-xl"
        onChange={handleChange}
        rows={15}
      />
    </form>
  );
}
