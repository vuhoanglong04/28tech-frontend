import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../api/contacts";
import { useUserContext } from "../contexts/UserContext";
import { Modal } from "flowbite-react";

export default function DetailOrder() {
  const [listItem, setListItem] = useState([]);
  const [detail, setDetail] = useState([]);
  const [openModalId, setOpenModalId] = useState(null); // Trạng thái cho ID của sản phẩm được mở modal
  const [rating, setRating] = useState(5); // Default rating
  const [comment, setComment] = useState("");
  const [reviewedItems, setReviewedItems] = useState([]); // Danh sách các sản phẩm đã được đánh giá

  const { cart, refreshToken } = useUserContext();
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  let authToken = localStorage.getItem("authToken");

  useEffect(() => {
    const getDetailOrder = async () => {
      try {
        const response = await api.get(`/orders/${id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        if (response.status === 200) {
          setDetail(response.data[0]);
          setListItem(response.data[1]);
          // Cập nhật danh sách các sản phẩm đã được đánh giá
          const reviewed = response.data[0].reviews.map(
            (review) => review.order_detail_id
          );
          setReviewedItems(reviewed);
        }
      } catch (error) {
        alert("Lỗi thông tin đơn hàng, vui lòng thử lại sau");
      }
    };
    getDetailOrder();
  }, [id, authToken]);

  const handleOpenModal = (item) => {
    setOpenModalId(item.id); // Lưu ID của sản phẩm để mở modal
  };

  const handleCloseModal = () => {
    setOpenModalId(null); // Đóng tất cả các modal
    setRating(5);
    setComment("");
  };

  const handleSubmitRating = async () => {
    try {
      const userId = user.id; // Lấy user_id từ local storage
      const courseId = listItem.find((item) => item.id === openModalId).course
        .id; // Lấy course_id từ danh sách item
      const itemId = openModalId; // ID của sản phẩm đang được đánh giá

      const response = await api.post(
        `/reviews`, // API endpoint cho đánh giá
        {
          user_id: userId,
          course_id: courseId,
          order_detail_id: itemId,
          stars: rating,
          comments: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      if (response.status === 201) {
        alert("Đánh giá thành công!");
        setReviewedItems((prevItems) => [...prevItems, itemId]); // Cập nhật danh sách các sản phẩm đã được đánh giá
        handleCloseModal();
      } else {
        alert("Lỗi khi gửi đánh giá, vui lòng thử lại sau.");
      }
    } catch (error) {
      refreshToken();
      try {
        const userId = user.id; // Lấy user_id từ local storage
        const courseId = listItem.find((item) => item.id === openModalId).course
          .id; // Lấy course_id từ danh sách item
        const itemId = openModalId; // ID của sản phẩm đang được đánh giá

        const response = await api.post(
          `/reviews`, // API endpoint cho đánh giá
          {
            user_id: userId,
            course_id: courseId,
            order_detail_id: itemId,
            stars: rating,
            comments: comment,
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        if (response.status === 201) {
          alert("Đánh giá thành công!");
          setReviewedItems((prevItems) => [...prevItems, itemId]); // Cập nhật danh sách các sản phẩm đã được đánh giá
          handleCloseModal();
        } else {
          alert("Lỗi khi gửi đánh giá, vui lòng thử lại sau.");
        }
      } catch (error) {
        alert("Lỗi khi gửi đánh giá, vui lòng thử lại sau.");
      }
    }
  };

  function checkHasReview(detail_id) {
    return reviewedItems.includes(detail_id); // Kiểm tra xem sản phẩm đã được đánh giá hay chưa
  }

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
                  <Link
                    to="/dashboard"
                    className="text-lg ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Thông tin cá nhân
                  </Link>
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

          {listItem.map((item, index) => (
            <div
              className="font-be-vietnam flex border-blue-primary border-2 p-2 rounded-lg overflow-hidden my-4 focus:bg-white"
              key={index}
            >
              <div className="w-28 h-20">
                <img
                  src={item.course.image}
                  className="rounded-lg overflow-hidden w-28 h-20 object-cover"
                />
              </div>
              <div className="flex flex-col justify-start items-start ml-2">
                <h3 className="text-sm font-bold text-dark-purple w-full">
                  {item.course.course_name}
                </h3>
                <h3 className="text-sm font-bold text-dark-purple w-full">
                  Lớp : {item.class.class_name}
                </h3>
                <span className="font-bold text-lg">
                  {parseInt(item?.price).toLocaleString()}
                  <small className="text-sm"> VND</small>
                </span>
              </div>
              {detail.status === 3 && !checkHasReview(item.id) && (
                <>
                  <div className="w-2/3 text-end ">
                    <button
                      onClick={() => handleOpenModal(item)}
                      className="bg-blue-500 text-sm text-white p-1 rounded-lg hover:bg-blue-600 duration-300"
                    >
                      Đánh giá
                    </button>
                  </div>

                  <Modal
                    show={openModalId === item.id} // Hiển thị modal chỉ khi ID của sản phẩm khớp với ID của sản phẩm hiện tại
                    size="md"
                    onClose={handleCloseModal}
                    className="bg-black bg-opacity-35"
                  >
                    <Modal.Header>
                      Đánh giá khóa học {item.course.course_name}
                    </Modal.Header>
                    <Modal.Body>
                      <div className="flex flex-col gap-4">
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Đánh giá
                          </label>
                          <select
                            value={rating}
                            onChange={(e) =>
                              setRating(parseInt(e.target.value))
                            }
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            {[5, 4, 3, 2, 1].map((star) => (
                              <option key={star} value={star}>
                                {star} Sao
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Bình luận
                          </label>
                          <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Viết bình luận của bạn..."
                          />
                        </div>
                      </div>
                    </Modal.Body>
                    <Modal.Footer className="gap-3">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-500 dark:focus:ring-offset-gray-800"
                        onClick={handleSubmitRating}
                      >
                        Gửi đánh giá
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-lg shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-500 dark:focus:ring-offset-gray-800"
                        onClick={handleCloseModal}
                      >
                        Đóng
                      </button>
                    </Modal.Footer>
                  </Modal>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-3 w-6/12">
          <h2 className="text-dark-purple font-semibold text-xl">
            Thông tin đơn hàng
          </h2>
          <div className="flex flex-col gap-1 my-2">
            <span>
              <strong className="text-dark-purple">
                Họ và tên : {detail?.user?.name}
              </strong>
            </span>
            <span>
              Số điện thoại:
              <strong className="text-dark-purple">
                {detail?.user?.phone_number}
              </strong>
            </span>
            <span>
              Email:{" "}
              <strong className="text-dark-purple">
                {detail?.user?.email}
              </strong>
            </span>
            <span className="text-dark-purple">
              Phương thức thanh toán :{" "}
              <strong className="text-dark-purple">
                {detail?.payment_gate}
              </strong>
            </span>
            <span className="text-dark-purple">
              Phiếu giảm giá:
              <strong className="text-dark-purple">
                {detail?.voucher?.code} (-{detail?.voucher?.discounts ?? 0}%)
              </strong>
            </span>
          </div>

          <div className="py-5 flex justify-between">
            <span>Tổng tiền : {detail?.total?.toLocaleString()}VNĐ </span>
            <span className="text-dark-purple font-semibold text-xl"></span>
          </div>
          <button
            disabled
            className="bg-dark-purple text-white p-3 rounded-lg w-full hover:cursor-not-allowed hover:bg-blue-primary duration-300"
          >
            {detail?.status === 1
              ? "Đã Hủy"
              : detail?.status === 2
              ? "Đang chờ xử lí..."
              : detail?.status === 3
              ? "Đã hoàn thành"
              : "Trạng thái không xác định"}
          </button>
        </div>
      </div>
    </div>
  );
}
