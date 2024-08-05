import { Button, Label, Modal, TextInput, Radio, List } from "flowbite-react";
import { useState, useEffect } from "react";
import { HiCheckCircle } from "react-icons/hi";
import CourseInCart from "./CourseInCart";
import { Link } from "react-router-dom";

import { useUserContext } from "../contexts/UserContext";
export default function Drawer({ itemInCart }) {
  const [loadItem, setLoadItem] = useState(itemInCart);
  const { removeFromCart } = useUserContext();

  useEffect(() => {
    setLoadItem(itemInCart);
  }, [itemInCart]);

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button text-white btn btn-primary bg-transparent border-none text-2xl hover:bg-transparent hover:text-blue-primary"
        >
          <i className="iconsax" icon-name="basket-2"></i>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-white min-h-full w-4/12 p-4">
          <div className="border-b pb-3">
            <h5 className="text-xl font-bold text-dark-purple">
              Giỏ hàng của bạn
            </h5>
          </div>
          <div className="my-5">
            {loadItem.map((item, index) => (
              <CourseInCart
                key={index}
                {...item}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className="border-t">
            <div className="flex justify-between items-center my-5">
              <h6 className="text-lg font-bold text-dark-purple">
                Giá tạm tính
              </h6>
              <span className="text-xl font-bold text-dark-purple mr-2">
                {loadItem
                  .reduce((curr, next) => {
                    return curr + next.price;
                  }, 0)
                  .toLocaleString()}
                <small>VND</small>
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <Link
                to="/cart"
                className="text-white text-lg bg-dark-purple hover:bg-white border-dark-purple border-2 hover:text-dark-purple transition duration-400 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full py-3 text-center"
              >
                Xem giỏ hàng
              </Link>
              <Link
                to="/checkout"
                className="text-white text-lg bg-blue-primary hover:bg-white border-blue-primary border-2 hover:text-blue-primary transition duration-400 hover:text-blue-primary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-full py-3 text-center"
              >
                Thanh Toán
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}
