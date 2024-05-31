import { router, useForm } from '@inertiajs/react';

export default function RegistrationForm() {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    password_confirmation: '',
  });

  function handleChange(e: { target: { id: any; value: any } }) {
    const key = e.target.id;
    const value = e.target.value;

    setData((formData: any) => ({
      ...formData,
      [key]: value,
    }));
  }

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    post('/register');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={data.email}
        id="email"
        placeholder="E-MAIL"
        onChange={handleChange}
        className="block w-full mt-3 mb-5 py-2 ps-5 bg-slate-50 rounded-lg border border-3 border-violet-100 hover:border-violet-300 focus:bg-violet-50"
      />
      {errors.email && <p className="-mt-4 mb-3 text-pink-500 text-sm">{errors.email}</p>}

      <div className="w-full flex flex-row">
        <input
          type="password"
          value={data.password}
          id="password"
          placeholder="PASSWORD"
          onChange={handleChange}
          className="block w-11/12 mb-3 py-2 ps-5 bg-slate-50 rounded-lg border border-3 border-violet-100 hover:border-violet-300 focus:bg-violet-50"
        />
        <svg
          width="34"
          height="34"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-1/12 text-slate-50"
        >
          <g opacity="0.5">
            <path
              d="M20 6.25C17.2805 6.25 14.6221 7.05642 12.3609 8.56729C10.0997 10.0782 8.33737 12.2256 7.29666 14.7381C6.25596 17.2506 5.98366 20.0153 6.51421 22.6825C7.04476 25.3497 8.35432 27.7997 10.2773 29.7227C12.2003 31.6457 14.6503 32.9553 17.3175 33.4858C19.9848 34.0163 22.7494 33.744 25.2619 32.7033C27.7744 31.6626 29.9219 29.9003 31.4327 27.6391C32.9436 25.3779 33.75 22.7195 33.75 20C33.75 16.3533 32.3014 12.8559 29.7227 10.2773C27.1441 7.69866 23.6467 6.25 20 6.25Z"
              stroke="#242424"
              strokeWidth="1.5"
              strokeMiterlimit="10"
            />
            <path
              d="M15.625 15.8039C15.625 15.8039 15.6906 14.4367 17.1539 13.2594C18.0219 12.5601 19.0625 12.3578 20 12.3437C20.8539 12.3328 21.6164 12.4742 22.0727 12.6914C22.8539 13.0633 24.375 13.9711 24.375 15.9015C24.375 17.9328 23.0469 18.8555 21.5336 19.8703C20.0203 20.8851 19.6094 21.9867 19.6094 23.125"
              stroke="#242424"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M19.6078 28.2353C20.041 28.2353 20.3921 27.8841 20.3921 27.4509C20.3921 27.0178 20.041 26.6666 19.6078 26.6666C19.1747 26.6666 18.8235 27.0178 18.8235 27.4509C18.8235 27.8841 19.1747 28.2353 19.6078 28.2353Z"
              fill="#242424"
            />
          </g>
        </svg>
      </div>
      {errors.password && <p className="-mt-1 mb-3 text-pink-500 text-sm">{errors.password}</p>}

      <input
        type="password"
        value={data.password_confirmation}
        id="password_confirmation"
        placeholder="RE-ENTER PASSWORD"
        onChange={handleChange}
        className="block w-full mt-3 mb-5 py-2 ps-5 bg-slate-50 rounded-lg border border-3 border-violet-100 hover:border-violet-300 focus:bg-violet-50"
      />
      {errors.password_confirmation && <p>{errors.password_confirmation}</p>}

      <p className="text-slate-500 mt-6 mb-6">
        <a href="/login" className="hover:text-purple-800">
          ALREADY HAVE AN ACCOUNT?
        </a>
      </p>

      <div className="btns w-full text-center">
        <button
          type="submit"
          className="me-1 px-12 py-3 bg-purple-800 text-white text-xl rounded-lg border-none hover:bg-purple-900"
          disabled={processing}
        >
          SIGN UP
        </button>
        <button
          type="button"
          className="px-12 py-3 bg-white text-purple-800 text-xl rounded-lg border-none hover:bg-purple-200"
          id="login"
          onClick={() => router.get('/login')}
        >
          LOGIN
        </button>
      </div>
    </form>
  );
}
