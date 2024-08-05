import { Link } from "react-router-dom";
import avt from "../assets/avt.png";
import ModalPassword from "../components/ModalPassword";
import ModalInformation from "../components/ModalInformation";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import api from "../api/contacts";
export default function Dashboard() {
  const [user, setUser] = useState({});
  const { isLoggedIn, login, logout, refreshToken } = useUserContext();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const fetchOrders = async () => {
    let authToken = localStorage.getItem("authToken");
    if (authToken && user.id) {
      try {
        const response = await api.get(`orders?user_id=${user.id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (response) {
          setOrders(response.data);
        }
      } catch (error) {
        if (error.response.status === 401) {
          refreshToken();
        }
      }
    }
  };
  useEffect(() => {
    fetchOrders();
  }, [user]);

  useEffect(() => {
    if (localStorage.getItem("user") == null) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setUser(JSON.parse(user));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };
  const getOrderStatus = (status) => {
    switch (status) {
      case 1:
        return "Đã hủy";
      case 2:
        return "Đang xử lý";
      case 3:
        return "Đã hoàn thành";
      default:
        return "Không xác định";
    }
  };
  function update(data) {
    setUser(data);
  }

  const cancelOrder = async (order_id) => {
    const save = confirm("Bạn có chắc muốn hủy đơn hàng ? ");
    if (save) {
      try {
        let authToken = localStorage.getItem("authToken");

        const response = await api.patch(
          `orders/${order_id}`,
          { status: 1 },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        alert("Hủy đơn hàng thành công");
        fetchOrders();
      } catch (error) {
        alert("Lỗi khi hủy đơn hàng, vui lòng thử lại sau");
      }
    }
  };
  return (
    <div className="font-be-vietnam">
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
                    Thông tin cá nhân
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="mx-28  my-10 gap-10 flex">
        <div className="bg-gray-50 flex flex-col items-center rounded-lg p-2 w-6/12 ">
          <div className=" px-4 py-5 rounded-lg  text-center">
            <div className="mb-4">
              <img
                className="w-24 mx-auto rounded-full object-cover object-center"
                src={avt}
                alt="Avatar Upload"
              />
              <h2 className="text-2xl font-extrabold w-full my-3">
                {user.name}
              </h2>
            </div>
            <label className="cursor-pointer mt-6">
              <span className=" text-base leading-normal px-4 py-2 bg-blue-500 text-white text-sm rounded-full">
                Sửa
              </span>
              <input type="file" className="hidden" />
            </label>
          </div>

          <div className="w-full p-2">
            <h3 className="text-xl text-dark-purple font-semibold">
              Tài khoản của tôi
            </h3>

            <div className="my-3 py-3 flex justify-between border-b border-dashed border-3 border-gray-300">
              <span>Email</span>

              <span className="font-extrabold">{user.email}</span>
            </div>
            <div className="my-3 py-3 flex justify-between border-b border-dashed border-3 border-gray-300">
              <span>Số điện thoại</span>
              <span className="font-extrabold">{user.phone_number}</span>
            </div>
            <div className="my-3 py-3 flex justify-between border-b border-dashed border-3 border-gray-300">
              <span>Mã khách hàng</span>
              <span className="font-extrabold">#{user.id}</span>
            </div>
            <div className="flex justify-end gap-2">
              <ModalPassword />
              <ModalInformation update={update} />
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-50 p-3">
          <h3 className="text-xl text-dark-purple font-semibold block my-5">
            Đơn hàng
          </h3>
          <div className=" ">
            <div className="pb-4  ">
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative mt-1 z-0">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search"
                  className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for items"
                />
              </div>
            </div>
            <table className=" text-sm text-left rtl:text-right text-dark-purple w-full border-2">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Mã đơn hàng
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tổng tiền
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ngày đặt hàng
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Trạng thái
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  return (
                    <tr
                      key={order.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        #{order.id}
                      </th>
                      <td className="px-6 py-4">
                        {parseInt(order.total).toLocaleString()} VND
                      </td>
                      <td className="px-6 py-4">
                        {formatDate(order.created_at)}
                      </td>
                      <td className="px-6 py-4">
                        {getOrderStatus(order.status)}
                      </td>
                      <td className="px-6 py-4 flex gap-3 text-xl">
                        <Link
                          to={`/orders/${order.id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 "
                        >
                          <i className="iconsax" icon-name="more-circle"></i>
                        </Link>

                        <button
                          className="block text-blue-600  font-medium text-center font-medium text-blue-600 dark:text-blue-500"
                          type="button"
                          onClick={() => cancelOrder(order.id)}
                        >
                          {order.status == 2 && (
                            <i className="iconsax" icon-name="x-square"></i>
                          )}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
