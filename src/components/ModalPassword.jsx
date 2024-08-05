import { useState, useEffect } from "react";
import api from "../api/contacts";
import { useUserContext } from "../contexts/UserContext";
export default function ModalPassword() {
  const [showModal, setShowModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [userId, setUserId] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const { refreshToken } = useUserContext();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.id) {
      setUserId(user.id);
    }
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const validateInputs = () => {
    let errors = {};

    if (!newPassword) {
      errors.newPassword = "Mật khẩu mới là bắt buộc.";
    } else if (newPassword.length < 5)
      errors.newPassword = "Mật khẩu mới phải ít nhất 5 kí tự ";

    if (!confirmPassword) {
      errors.confirmPassword = "Xác nhận mật khẩu là bắt buộc.";
    } else if (confirmPassword.length < 5)
      errors.confirmPassword = "Xác nhận mật khẩu phải ít nhất 5 kí tự ";

    if (newPassword !== confirmPassword) {
      errors.confirmPassword = "Mật khẩu mới và mật khẩu xác nhận không khớp.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateInputs();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await api.patch(
          `users/${userId}`,
          {
            password: newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.status === 200) {
          alert("Mật khẩu đã được cập nhật thành công.");
          setShowModal(false);
        }
      } catch (error) {
        refreshToken();
        setAuthToken(localStorage.getItem("authToken"));
        const response = await api.patch(
          `users/${userId}`,
          {
            password: newPassword,
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );

        if (response.status === 200) {
          alert("Mật khẩu đã được cập nhật thành công.");
          setShowModal(false);
        } else alert("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
      }
    }
  };

  return (
    <div>
      <button
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        onClick={() => setShowModal(true)}
        className="block text-white bg-dark-purple hover:bg-blue-primary duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Thay đổi mật khẩu
      </button>

      <div
        id="authentication-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          showModal ? "flex" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] h-screen bg-black bg-opacity-50`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Đổi mật khẩu
              </h3>
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="authentication-modal"
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
            <div className="p-4 md:p-5">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="new-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mật khẩu mới <small className="text-red-600">*</small>
                  </label>
                  <input
                    type="password"
                    name="new-password"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                  {errors.newPassword && (
                    <p className="text-red-600 text-sm">{errors.newPassword}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nhập lại mật khẩu mới{" "}
                    <small className="text-red-600">*</small>
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    placeholder=""
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-600 text-sm">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-dark-purple hover:bg-blue-primary duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cập nhật
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
