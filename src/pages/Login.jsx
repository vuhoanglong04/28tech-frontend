import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/contacts.js";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import {useEffect} from 'react'
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { isLoggedIn, login } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      navigate("/");
    }
  }, [navigate]);

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email không được để trống.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email không hợp lệ.";
    }

    if (!password) {
      newErrors.password = "Mật khẩu không được để trống.";
    } else if (password.length < 5) {
      newErrors.password = "Mật khẩu phải có ít nhất 5 ký tự.";
    }

    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      try {
        const response = await api.post("auth/login", { email, password });

        console.log("Đăng nhập thành công:", response.data);
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        const userResponse = await api.get("user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        login();
        localStorage.setItem("user", JSON.stringify(userResponse.data.user));
        navigate("/");
      } catch (error) {
        alert("Email hoặc mật khẩu không chính xác");
      }
    } else {
      setErrors(newErrors);
    }
  };

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
                    Đăng nhập
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="mx-28 flex justify-center items-center">
        <form
          className="w-5/12 bg-white shadow p-5 my-10"
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-extrabold text-dark-purple my-5">
            Đăng nhập
            {localStorage.getItem("user")}
          </h1>

          <label
            htmlFor="input-group-1"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Email <small className="text-red-600">*</small>
          </label>
          <div className="relative mb-1">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <i className="iconsax" icon-name="user-2"></i>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border text-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 py-5   dark:bg-gray-700 dark:border-gray-60"
              placeholder="Ví dụ: nguyenvana@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errors.email && <p className="text-red-600 mb-6">{errors.email}</p>}

          <label
            htmlFor="input-group-2"
            className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
          >
            Mật khẩu <small className="text-red-600">*</small>
          </label>
          <div className="relative mb-1">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <i className="iconsax" icon-name="lock-2"></i>
            </div>
            <input
              type="password"
              id="input-group-2"
              className="bg-gray-50 border text-lg border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 py-5   dark:bg-gray-700 dark:border-gray-60"
              placeholder="----------"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {errors.password && (
            <p className="text-red-600 mb-6">{errors.password}</p>
          )}
          <button
            type="submit"
            className="text-white mt-3 bg-dark-purple hover:bg-blue-primary w-full focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full py-4 text-center"
          >
            Đăng nhập
          </button>
          <Link to="/forgot-password" className="my-2 text-base">
            Quên mật khẩu?{" "}
          </Link>
          <h6 className="my-4 text-center">
            Bạn chưa có tài khoản?{" "}
            <Link to="/signup" className="font-bold ">
              Đăng kí ngay
            </Link>{" "}
          </h6>
        </form>
      </div>
    </div>
  );
}
