import subscribe from "../assets/subscribe-bg.svg";
export default function Footer() {
  return (
    <div className=" font-be-vietnam py-20">
      <div
        className=" flex justify-center items-center text-center jus min-h-96 mx-40 w-50 rounded-3xl"
        style={{
          backgroundImage: `url(${subscribe})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 className="text-white text-5xl font-bold">
            Gửi yêu cầu tư vấn miễn phí
          </h1>
          <p className="text-white my-10 text-2xl">
            Vui lòng để lại số điện thoại, chúng tôi sẽ liên hệ tư vấn bạn trong
            thời gian sớm nhất.
          </p>

          <form className="max-w-md mx-auto">
            <label
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <input
                type="search"
                id="default-search"
                className="w-full  text-xl  h-20 text-sm text-blue-950 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Số điện thoại..."
                required
              />
              <button
                type="submit"
                className=" flex items-center justify-center  font-bold text-white btn_subscribe transition duration-200 absolute end-2.5 bottom-2.5 bg-custom-gradient bg-cover  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4"
              >
                <svg
                  className="w-4 h-4  text-white mx-2 mt-1 mx-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  ></path>
                </svg>
                <span className="text-white text-lg">Đăng Ký</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="bg-transparent mt-5 text-dark-purple">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="flex md:justify-between">
            <div className=" md:mb-0">
              <h2 className="text-2xl font-bold text-wrap w-72">
                28Tech - Become A Better Developer
              </h2>
              <div className="flex text-md  items-center mt-3">
                <i className="iconsax mr-3 text-xl" icon-name="location"></i>
                <p>TP. Hồ Chí Minh</p>
              </div>
              <div className="flex text-md  items-center mt-2">
                <i className="iconsax mr-3 text-xl" icon-name="mail"></i>
                <p>28tech.work@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-wrap w-72">Về 28Tech</h2>
              <a href="#" className="mt-3">
                Về chúng tôi
              </a>
              <a href="#">Điều khoản dịch vụ</a>
              <a href="#">Chính sách bảo mật</a>
              <a href="#">Hướng dẫn thanh toán</a>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold text-wrap w-72">
                Thông Tin 28Tech
              </h2>

              <a href="#" className="mt-3">
                Đăng ký giảng viên
              </a>
              <a href="#">Danh sách khóa học</a>
              <a href="#">Câu hỏi thường gặp</a>
              <a href="#">Góc chia sẻ</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
