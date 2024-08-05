import { useState, useEffect, useRef } from "react";
import api from "../api/contacts";
import { useUserContext } from "../contexts/UserContext";

export default function ModalInformation({ update }) {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({});
  const { refreshToken } = useUserContext();

  const [formData, setFormData] = useState({
    name: "",
    phone_number: "",
  });

  const formDataRef = useRef(formData);
  formDataRef.current = formData;

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const userData = JSON.parse(data);
      setUser(userData);
      setFormData({
        name: userData.name,
        phone_number: userData.phone_number,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let fetch;
    try {
      const authToken = localStorage.getItem("authToken");
      const response = await api.patch(
        `/users/${user.id}`,
        formDataRef.current,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      fetch = response.data;
    } catch (error) {
      refreshToken();
      const authToken = localStorage.getItem("authToken");
      const response = await api.patch(
        `/users/${user.id}`,
        formDataRef.current,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      fetch = response.data;
    }

    localStorage.setItem("user", JSON.stringify(fetch.data));
    update(fetch.data);
    alert("Cập nhập thông tin thành công!");
  };

  return (
    <div>
      <button
        className="block text-white bg-dark-purple hover:bg-blue-primary duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Sửa thông tin
      </button>

      <div
        id="crud-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          showModal ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-screen bg-black bg-opacity-50`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Sửa thông tin
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setShowModal(false)}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form className="p-4 md:p-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Họ và tên <small className="text-red-600">*</small>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="phone_number"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Số điện thoại <small className="text-red-600">*</small>
                  </label>
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <button className="w-full text-white bg-dark-purple hover:bg-blue-primary duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Cập nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
