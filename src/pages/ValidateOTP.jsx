import { Link } from "react-router-dom";
export default function ValidateOTP() {
  return (
    <div className="font-be-vietnam text-dark-purple">
      <div className=" bg-sky">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl  p-4 mx-auto">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className=" text-lg inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    className=" text-lg  ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Xác nhận OTP
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="mx-28 flex justify-center items-center">
        <form className="w-5/12 bg-white shadow p-5 my-10">
          <h1 className="text-3xl font-extrabold text-dark-purple my-5">
            Quên mật khẩu
          </h1>
          <label
            htmlFor="input-group-1"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Mã xác nhận : <small className="text-red-600">*</small>
          </label>
          <form id="otp-form" className="my-5">
            <div class="flex items-center justify-center gap-3">
              <input
                type="text"
                class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                pattern="\d*"
                maxlength="1"
              />
              <input
                type="text"
                class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxlength="1"
              />
              <input
                type="text"
                class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxlength="1"
              />
              <input
                type="text"
                class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                maxlength="1"
              />
            </div>
          
          </form>


        

          <label
            htmlFor="input-group-1"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Mật khẩu mới <small className="text-red-600">*</small>
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <i className="iconsax" icon-name="lock-2"></i>
            </div>
            <input
              type="password"
              id="input-group-1"
              className="bg-gray-50 border text-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 py-5   dark:bg-gray-700 dark:border-gray-60"
              placeholder="----------"
            />
          </div>
          

          <label
            htmlFor="input-group-1"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Nhập lại mật khẩu mới  <small className="text-red-600">*</small>
          </label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <i className="iconsax" icon-name="lock-2"></i>
            </div>
            <input
              type="password"
              id="input-group-1"
              className="bg-gray-50 border text-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 py-5   dark:bg-gray-700 dark:border-gray-60"
              placeholder="----------"
            />
          </div>

          <button
            type="submit"
            className="text-white bg-dark-purple hover:bg-blue-primary w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-4 text-center"
          >
            Xác nhận
          </button>
          <Link to="/login" className="my-2 text-base flex items-center gap-2">
            <i class="iconsax" icon-name="arrow-left"></i>
            Đăng nhập
          </Link>
        </form>
      </div>
    </div>
  );
}
