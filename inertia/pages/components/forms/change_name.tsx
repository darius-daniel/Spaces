import { useForm, usePage } from '@inertiajs/react';
import { User } from '~/utils/interfaces';

export default function NameChangeForm() {
  const { props } = usePage();
  const user: any & User = props.$attributes;
  const { data, setData, patch, errors, processing } = useForm({
    firstName: user.firstName,
    lastName: user.lastName,
  });

  const errorStyles = 'ps-1 -mt-4 mb-3 text-pink-500 text-sm';
  const labelStyles = 'ps-1 text-purple-800 text-sm';

  function handleChange(event: { target: { id: any; value: any } }) {
    setData((formData: any) => ({
      ...formData,
      [event.target.id]: event.target.value,
    }));
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    patch(`/user/${user.id}`);
  }

  return (
    <form className="flex flex-row gap-2" onSubmit={handleSubmit}>
      <div className="w-1/3 text-purple-800">
        <h2 className="text-xl mb-2">Change Full Name</h2>
        <p className="text-xs">Update your full name</p>
      </div>
      <div className="w-2/3 gap-2">
        <label htmlFor="firstName" className={'w-1/2 ' + labelStyles}>
          First Name
        </label>
        <input
          type="text"
          value={data.firstName}
          id="firstName"
          placeholder="First"
          onChange={handleChange}
          className="block w-2/3 mb-2 py-2 ps-5 text-sm bg-slate-50 rounded-xl border border-3 border-violet-100 hover:border-violet-300 focus:bg-violet-50"
        />
        {errors.firstName && <p className={'w-1/2 ' + errorStyles}>{errors.firstName}</p>}

        <label htmlFor="lastName" className={'w-1/2 ' + labelStyles}>
          Last Name
        </label>
        <input
          type="text"
          value={data.lastName}
          id="lastName"
          placeholder="Last"
          onChange={handleChange}
          className="block w-2/3 mb-5 py-2 ps-5 bg-slate-50 text-sm rounded-xl border border-3 border-purple-100 hover:border-purple-300 focus:bg-purple-50"
        />
        {errors.lastName && <p className={'w-1/2 ' + errorStyles}>{errors.lastName}</p>}
        <div className="btns w-2/3 text-right">
          <button
            type="submit"
            className="me-1 px-6 py-2 bg-violet-600 text-white text-md rounded-xl border-none hover:bg-violet-800"
            disabled={processing}
          >
            Update
          </button>
        </div>
      </div>
    </form>
  );
}
