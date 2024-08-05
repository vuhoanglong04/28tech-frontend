import { Link } from "react-router-dom";
import thumb from "../assets/945ca542b14c1f12465d_thumb_150.jpg";
import { useUserContext } from "../contexts/UserContext";
import { useEffect } from "react";
export default function Cart() {
  const { cart, removeFromCart } = useUserContext();

  return (
    <>
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
                    Giỏ hàng
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="mx-28 my-10 ">
        <h2 className="text-dark-purple font-semibold text-2xl">
          Thông tin giỏ hàng
          <small className="text-blue-primary"> (1 Khóa học)</small>
        </h2>
        <div className="flex gap-4">
          <div className="w-8/12">
            <table className=" text-base  text-left text-dark-purple dark:text-gray-400 w-full my-10">
              <thead className="text-base text-blue-primary uppercase bg-purple-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Khóa học
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Giá
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Xóa
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => {
                  return (
                    <tr
                      key={index}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className=" flex gap-5 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <img
                          src={item.image}
                          className="h-16 w-24 object-cover rounded-lg overflow-hidden"
                        />
                        <a className="w-96 text-wrap hover:text-blue-primary ">
                          {item.course_name}
                          <h3>Lớp : {item.class_name}</h3>
                        </a>
                      </th>
                      <td className="px-6 py-4">
                        {parseInt(item.price).toLocaleString()} VND
                      </td>
                      <td className="px-6 py-4 text-center">
                        <i
                          onClick={() => removeFromCart(item.class_id)}
                          className="iconsax text-xl hover:cursor-pointer hover:text-blue-primary"
                          icon-name="trash"
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-4/12 p-3 bg-purple-50 my-10 flex flex-col justify-between">
            <div className="flex justify-between item my-5 text-dark-purple font-semibold text-xl">
              <span>Tổng tiền : </span>
              <span>
                {cart
                  .reduce((curr, next) => {
                    return curr + next.price;
                  }, 0)
                  .toLocaleString()}{" "}
                VND{" "}
              </span>
            </div>
            <Link
              to="/checkout"
              className="text-center w-full py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-primary border-2 border-blue-primary duration-300 bg-blue-primary text-white"
            >
              Xác nhận thanh toán
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
