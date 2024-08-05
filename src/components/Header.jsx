import { Link } from "react-router-dom";
import logo from "../assets/logo-28tech.svg";
import api from "../api/contacts.js";
import { useEffect, useState } from "react";
import { useUserContext } from "../contexts/UserContext";
import Drawer from "./Drawer";
import CourseInCart from "./CourseInCart"; // Import this if you are using it

export default function Header() {
  const [categories, setCategories] = useState([]);
  const { isLoggedIn, login, logout, cart, removeFromCart } = useUserContext();
  const [itemInCart, setItemInCart] = useState(cart);

  useEffect(() => {
    setItemInCart(cart);
  }, [cart]);

  const removeInCart = (id) => {
    removeFromCart(id);
    setItemInCart(cart);
  };

  const getCategories = async () => {
    const response = await api.get("/categories");
    return response.data;
  };

  useEffect(() => {
    const loadCategories = async () => {
      const allCategories = await getCategories();
      if (allCategories) setCategories(allCategories.data);
    };
    loadCategories();
  }, []);

  return (
    <nav className="bg-dark-purple border-gray-200 dark:bg-gray-900 text-xl font-be-vietnam top-0">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-14" alt="28Tech Logo" />
        </Link>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
          {!isLoggedIn && (
            <Link
              to="/login"
              className="text-heading text-lg bg-white hover:bg-blue-primary transition duration-400 hover:-translate-y-0.5 hover:text-white font-medium rounded-lg text-sm px-4 py-3 md:px-5 md:py-2.5 focus:outline-none"
            >
              Đăng Nhập
            </Link>
          )}

          <div className="flex items-center">
            <Drawer itemInCart={itemInCart} />
            {isLoggedIn && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="text-white btn-primary bg-transparent border-none text-2xl hover:bg-transparent hover:text-blue-primary"
                >
                  <i className="iconsax" icon-name="user-2"></i>
                </div>
                <div
                  tabIndex={0}
                  className="dropdown-content menu bg-white rounded-md z-[1] w-64 p-0 shadow overflow-hidden"
                >
                  <Link
                    to="/dashboard"
                    className="text-dark-purple flex text-base items-center gap-3 hover:cursor-pointer hover:bg-slate-100 p-2"
                  >
                    <i className="iconsax text-2xl" icon-name="user-1-tag"></i>
                    <span>Thông tin cá nhân</span>
                  </Link>
                  <div className="text-dark-purple flex text-base items-center gap-3 hover:cursor-pointer hover:bg-slate-100 p-2">
                    <i className="iconsax text-2xl" icon-name="logout-2"></i>
                    <button onClick={logout}>Đăng xuất</button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            data-collapse-toggle="mega-menu"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mega-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          id="mega-menu"
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        >
          <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white text-xl hover:text-blue-primary transition duration-200 md:p-0"
              >
                Trang chủ
              </Link>
            </li>
            {categories.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/category/${item.id}`}
                  className="block py-2 px-3 text-white text-xl hover:text-blue-primary transition duration-200 md:p-0"
                >
                  {item.category_name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/blog"
                className="block py-2 px-3 text-white text-xl hover:text-blue-primary transition duration-200 md:p-0"
              >
                Blog
              </Link>
            </li>
            <li>
              <a
                href="http://oj.28tech.com.vn/"
                className="block py-2 px-3 text-white text-xl hover:text-blue-primary transition duration-200 md:p-0"
              >
                Web Chấm Bài
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
