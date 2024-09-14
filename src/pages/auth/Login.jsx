const Login = () => {
  return (
    <div className="flex flex-col md:justify-center lg:justify-center items-center w-full rounded-lg bg-white h-screen lg:h-full py-20 px-10 md:p-10 lg:p-10 xl:p-10">
      <div className="w-full">
        <div className="w-fit z-10">
          <a href="/login-as">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="cursor-pointer"
              color="#454c57"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "rgb(69, 76, 87)" }}
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z"></path>
            </svg>
          </a>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl text-paletteText-primary font-bold">
            Login Pembeli
          </div>
          <a href="/">
            <div className="relative w-24 h-24 cursor-pointer">
              <img src="/svgs/logo.svg" alt="logo" className="w-full h-full" />
            </div>
          </a>
        </div>
      </div>
      <form className="w-full" data-gtm-form-interact-id="1">
        <div className="w-full space-y-2 mb-4">
          <label className="block text-sm font-medium text-paletteText-primary">
            Email
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 focus:outline-none false"
            id="username"
            type="text"
            placeholder="padi@email.com"
            value="tictac@yopmail.com"
            data-gtm-form-interact-field-id="2"
            onChange={() => {}}
          />
        </div>
        <div className="w-full space-y-2 mb-6">
          <label className="block text-sm font-medium text-paletteText-primary">
            Kata Sandi
          </label>
          <div className="relative">
            <input
              className="appearance-none border rounded w-full py-2 px-3 focus:outline-none false"
              id="password"
              type="password"
              placeholder="Masukan Kata Sandi"
              value="Cupacups123"
              data-gtm-form-interact-field-id="3"
              onChange={() => {}}
            />
            <span className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="cursor-pointer"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
            </span>
          </div>
        </div>
        <div className="w-full mb-6">
          <button
            type="submit"
            className="w-full py-2 bg-secondary-50 text-white rounded-md"
          >
            Login
          </button>
        </div>
      </form>
      <div className="w-full mb-6">
        <p className="text-center text-sm text-paletteText-primary">
          Lupa Kata Sandi?{" "}
          <a href="/forgot-password">
            <span className="text-secondary-70 font-medium text-sm cursor-pointer">
              Atur Ulang Kata Sandi
            </span>
          </a>
        </p>
      </div>
      <div className="w-full mb-6">
        <div className="relative flex items-center">
          <div className="flex-grow border-t border-black30"></div>
          <span className="flex-shrink mx-4 text-gray-400">Atau</span>
          <div className="flex-grow border-t border-black30"></div>
        </div>
      </div>
      <div className="w-full">
        <p className="text-center text-sm text-paletteText-primary">
          Belum punya akun?{" "}
          <a href="/register-as">
            <span className="text-secondary-70 font-medium text-sm cursor-pointer">
              Daftar Sekarang
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
