import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../api/contacts";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    if (!name) {
      setNameError("Vui lòng điền tên.");
      valid = false;
    } else {
      setNameError("");
    }
    if (!email) {
      setEmailError("Vui lòng điền email.");
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Email không hợp lệ.");
      valid = false;
    } else {
      setEmailError("");
    }
    if (!phoneNumber) {
      setPhoneNumberError("Vui lòng điền số điện thoại.");
      valid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneNumberError("Số điện thoại không hợp lệ.");
      valid = false;
    } else {
      setPhoneNumberError("");
    }
    if (!password) {
      setPasswordError("Vui lòng điền mật khẩu.");
      valid = false;
    } else {
      setPasswordError("");
    }
    if (!confirmPassword) {
      setConfirmPasswordError("Vui lòng xác nhận mật khẩu.");
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Mật khẩu và xác nhận mật khẩu không khớp.");
      valid = false;
    } else {
      setConfirmPasswordError("");
    }

    return valid;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await api.post("auth/register", {
        name,
        email,
        phone_number: phoneNumber,
        password,
      });
      console.log(response);
      if (response.status == 201) {
        alert("Thành công!Vui lòng đăng nhập");
      }
      navigate("/login");
    } catch (error) {
      alert("Email đã tồn tại");
    }
  };

  return (
    <div className="font-be-vietnam text-dark-purple">
      <div className="bg-sky">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="text-lg inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
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
                    className="text-lg ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Đăng kí
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="mx-28 flex justify-center items-center">
        <form
          className="w-7/12 bg-white shadow p-5 my-10"
          onSubmit={handleSignUp}
        >
          <h1 className="text-3xl font-extrabold text-dark-purple my-5">
            Đăng kí
          </h1>

          {formError && <p className="text-red-600">{formError}</p>}

          <div className="flex justify-between gap-5">
            <div className="w-full">
              <label
                htmlFor="name"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Họ và tên <small className="text-red-600">*</small>
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <i className="iconsax" icon-name="user-2"></i>
                </div>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border text-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 py-5 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Ví dụ: Nguyen Van A"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && <p className="text-red-600">{nameError}</p>}
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Email <small className="text-red-600">*</small>
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <i className="iconsax" icon-name="mail"></i>
                </div>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-50 border text-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 py-5 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Ví dụ: nguyenvana@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-red-600">{emailError}</p>}
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="phone-number"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Số điện thoại <small className="text-red-600">*</small>
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <i className="iconsax" icon-name="phone-ringing"></i>
                </div>
                <input
                  type="text"
                  id="phone-number"
                  className="bg-gray-50 border text-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 py-5 dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Ví dụ: 0344847299"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                {phoneNumberError && (
                  <p className="text-red-600">{phoneNumberError}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between gap-5">
            <div className="w-full">
              <label
                htmlFor="password"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Mật khẩu <small className="text-red-600">*</small>
              </label>
              <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <i className="iconsax" icon-name="lock-2"></i>
                </div>
                <input
                  type="password"
                  id="password"
                  className="bg-gray-50 border text-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 py-5 dark:bg-gray-700 dark:border-gray-600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {passwordError && <p className="text-red-600">{passwordError}</p>}
            </div>
            <div className="w-full">
              <label
                htmlFor="confirm-password"
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                Xác nhận mật khẩu <small className="text-red-600">*</small>
              </label>
              <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <i className="iconsax" icon-name="lock-2"></i>
                </div>
                <input
                  type="password"
                  id="confirm-password"
                  className="bg-gray-50 border text-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 py-5 dark:bg-gray-700 dark:border-gray-600"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {confirmPasswordError && (
                <p className="text-red-600 mb-6">{confirmPasswordError}</p>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Đăng kí
          </button>
        </form>
      </div>
    </div>
  );
}
