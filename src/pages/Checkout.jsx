import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { useState, useRef, useEffect } from "react";
import api from "../api/contacts";

export default function Checkout() {
  const { cart, removeFromCart } = useUserContext();
  const user = JSON.parse(localStorage.getItem("user"));
  const voucherRef = useRef(""); // Ref for voucher input
  const [discount, setDiscount] = useState(0); // State for discount amount
  const [error, setError] = useState(""); // State for error message
  const [paymentMethod, setPaymentMethod] = useState(""); // State for payment method

  let total = cart.reduce((curr, next) => curr + next.price, 0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length == 0) {
      navigate("/");
      alert("Vui lòng thêm sản phẩm vào giỏ hàng ");
    }
    const fetchData = async () => {
      const searchParams = new URLSearchParams(location.search);
      const vnpResponseCode = searchParams.get("vnp_ResponseCode");
      const vnpAmount = searchParams.get("vnp_Amount");

      if (vnpResponseCode && vnpResponseCode === "00") {
        const orderData = {
          user_id: user.id,
          voucher_code: localStorage.getItem("voucher"),
          total: vnpAmount,
          payment_gate: localStorage.getItem("payment_gate").toUpperCase(),
          status: 2,
          details: cart,
        };
        try {
          const response = await api.post("/orders", orderData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`,
            },
          });

          if (response.status === 201) {
            cart.map((item) => removeFromCart(item.class_id));
            alert("Thanh toán thành công");
            navigate("/dashboard");
          }
        } catch (error) {
          console.log(error);
          setError("Có lỗi xảy ra khi tạo đơn hàng.");
        }
      } else if (vnpResponseCode) {
        setError("Thanh toán thất bại");
      }
    };

    fetchData();
  }, [location.search, navigate, user.id, cart]);

  const handleApplyVoucher = async () => {
    const voucher = voucherRef.current.value; // Get the value from the ref
    if (voucher === "") {
      setError("Mã giảm giá không hợp lệ hoặc đã hết hạn.");
      return;
    }
    setError("");

    try {
      const response = await api.get(`vouchers/${voucher}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      });
      localStorage.setItem("voucher", voucherRef.current.value);
      setDiscount(response.data.discounts);
      setError("Áp dụng thành công");
    } catch (error) {
      setError("Mã giảm giá không hợp lệ hoặc đã hết hạn.");
    }
  };

  const handleCompletePayment = async () => {
    if (!paymentMethod) {
      setError("Vui lòng chọn phương thức thanh toán.");
      return;
    }
    localStorage.setItem("payment_gate", paymentMethod);
    try {
      const response = await api.post(
        `/${paymentMethod}`,
        {
          url: "http://localhost:5173/checkout",
          total: total - (total * discount) / 100,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      if (response.status === 200) {
        window.location.href = response.data.data;
      }
    } catch (error) {
      setError("Thanh toán thất bại. Vui lòng thử lại.");
    }
  };

  return (
    <div className="font-be-vietnam">
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
                    Đăng kí khóa học
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="mx-28 flex my-10 gap-10 justify-between p-3">
        <div className="bg-gray-50 p-3 w-full">
          <h2 className="text-dark-purple font-semibold text-xl">
            Danh sách khóa học
          </h2>

          {cart.map((item, index) => (
            <Link
              className="font-be-vietnam flex border-blue-primary border-2 p-2 rounded-lg overflow-hidden my-4 focus:bg-white"
              to="/course/ok"
              key={index}
            >
              <div>
                <img
                  src={item.image}
                  className="rounded-lg overflow-hidden w-28 h-20 object-cover"
                />
              </div>
              <div className="flex flex-col justify-start items-start ml-2">
                <h3 className="text-sm font-bold text-dark-purple w-full">
                  {item.course_name}
                </h3>
                <h3 className="text-sm font-bold text-dark-purple w-full">
                  Lớp : {item.class_name}
                </h3>
                <span className="font-bold text-lg">
                  {parseInt(item.price).toLocaleString()}
                  <small className="text-sm"> VND</small>
                </span>
              </div>
            </Link>
          ))}
        </div>
        <div className="bg-gray-50 p-3 w-6/12">
          <h2 className="text-dark-purple font-semibold text-xl">
            Thông tin học viên
          </h2>
          <div className="flex flex-col gap-1 my-2">
            <span>
              <strong className="text-dark-purple">
                Họ và tên : {user.name}
              </strong>
            </span>
            <span>
              Số điện thoại:{" "}
              <strong className="text-dark-purple">{user.phone_number}</strong>
            </span>
            <span>
              Email: <strong className="text-dark-purple">{user.email}</strong>
            </span>
          </div>
          <h2 className="text-dark-purple font-semibold text-xl">
            Phương thức thanh toán
          </h2>
          <ul className="w-48 text-sm font-medium text-dark-purple">
            <li className="w-full">
              <div className="flex items-center">
                <input
                  id="list-radio-vnpay"
                  type="radio"
                  value="vnpay"
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-dark-purple focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label
                  htmlFor="list-radio-vnpay"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  VNPAY
                </label>
              </div>
            </li>
            <li className="w-full">
              <div className="flex items-center">
                <input
                  id="list-radio-momo"
                  type="radio"
                  value="momo"
                  name="list-radio"
                  className="w-4 h-4 text-blue-600 border-dark-purple focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label
                  htmlFor="list-radio-momo"
                  className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  MOMO
                </label>
              </div>
            </li>
          </ul>

          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-3 my-5 bg-blue-50 border-2 rounded-lg font-medium rtl:text-right"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <p className="flex items-center text-x gap-3">
                  <i
                    className="iconsax text-blue-primary text-xl"
                    icon-name="ticket-2"
                  ></i>
                  Phiếu giảm giá
                </p>
                <svg
                  data-accordion-icon
                  className="w-3 h-3 rotate-180 shrink-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className="duration-200 my-5 bg-blue-50"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="flex gap-3">
                <input
                  type="text"
                  id="large-input"
                  className="block w-full p-2 font-2xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nhập phiếu giảm giá"
                  ref={voucherRef} // Attach ref to the input
                />
                <button
                  className="bg-dark-purple text-white p-3 rounded-lg w-5/12 hover:cursor-pointer hover:bg-blue-primary duration-300"
                  onClick={handleApplyVoucher}
                >
                  Áp dụng
                </button>
              </div>
            </div>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
          <div className="py-5 flex justify-between">
            <span>Tổng tiền : </span>
            <span className="text-dark-purple font-semibold text-xl">
              {(total - (total * discount) / 100).toLocaleString()} VND
            </span>
          </div>
          <button
            className="bg-dark-purple text-white p-3 rounded-lg w-full hover:cursor-pointer hover:bg-blue-primary duration-300"
            onClick={handleCompletePayment}
          >
            Hoàn tất thanh toán
          </button>
          <Link to="/cart" className="flex items-center gap-1 my-2">
            <i className="iconsax text-lg" icon-name="arrow-left"></i>
            Quay lại giỏ hàng
          </Link>
        </div>
      </div>
    </div>
  );
}
