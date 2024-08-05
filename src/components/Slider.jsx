import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import avatar from "../assets/user.png";
import { Controller } from "swiper/modules";
import { useState } from "react";

// Import Swiper styles
import "swiper/css";

export default function Slider() {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      navigation={{
        nextEl: ".next-items",
        prevEl: ".pre-items",
      }}
      modules={[Navigation]}
    >
      <SwiperSlide>
        <div className="h-96 bg-sky p-10">
          <div className="flex items-center">
            <div className="w-20 h-20 rounded-full border-2 border-solid border-blue-primary">
              <img src={avatar} className="" />
            </div>
            <div className="ml-6">
              <h3 className="text-xl text-dark-purple font-bold my-1">
                Trương Xuân Giang{" "}
              </h3>
              <span className="text-gray-400 text-md">Lập trình C/C++</span>
            </div>
          </div>
          <p className="my-5 text-gray-400 ">
            “Chất lượng giảng dạy tuyệt vời, giảng viên cùng trợ giảng nhiệt
            tình nhiệt huyết, giảng dạy dễ hiểu giúp học viên dễ tiếp thu với
            kiến thức mới. ? Cảm hơn 28tech đã mang tới trải nghiệm tuyệt vời
            đến cho mình và các bạn học viên. Mình sẽ giới thiệu cho bạn bè với
            người thân muốn học lập trình tới 28tech”
          </p>
          <div className="flex  items-center">
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 bg-sky p-10">
          <div className="flex items-center">
            <div className="w-20 h-20 rounded-full border-2 border-solid border-blue-primary">
              <img src={avatar} className="" />
            </div>
            <div className="ml-6">
              <h3 className="text-xl text-dark-purple font-bold my-1">
                Trương Xuân Giang{" "}
              </h3>
              <span className="text-gray-400 text-md">Lập trình C/C++</span>
            </div>
          </div>
          <p className="my-5 text-gray-400 ">
            “Chất lượng giảng dạy tuyệt vời, giảng viên cùng trợ giảng nhiệt
            tình nhiệt huyết, giảng dạy dễ hiểu giúp học viên dễ tiếp thu với
            kiến thức mới. ? Cảm hơn 28tech đã mang tới trải nghiệm tuyệt vời
            đến cho mình và các bạn học viên. Mình sẽ giới thiệu cho bạn bè với
            người thân muốn học lập trình tới 28tech”
          </p>
          <div className="flex  items-center">
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 bg-sky p-10">
          <div className="flex items-center">
            <div className="w-20 h-20 rounded-full border-2 border-solid border-blue-primary">
              <img src={avatar} className="" />
            </div>
            <div className="ml-6">
              <h3 className="text-xl text-dark-purple font-bold my-1">
                Trương Xuân Giang{" "}
              </h3>
              <span className="text-gray-400 text-md">Lập trình C/C++</span>
            </div>
          </div>
          <p className="my-5 text-gray-400 ">
            “Chất lượng giảng dạy tuyệt vời, giảng viên cùng trợ giảng nhiệt
            tình nhiệt huyết, giảng dạy dễ hiểu giúp học viên dễ tiếp thu với
            kiến thức mới. ? Cảm hơn 28tech đã mang tới trải nghiệm tuyệt vời
            đến cho mình và các bạn học viên. Mình sẽ giới thiệu cho bạn bè với
            người thân muốn học lập trình tới 28tech”
          </p>
          <div className="flex  items-center">
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 bg-sky p-10">
          <div className="flex items-center">
            <div className="w-20 h-20 rounded-full border-2 border-solid border-blue-primary">
              <img src={avatar} className="" />
            </div>
            <div className="ml-6">
              <h3 className="text-xl text-dark-purple font-bold my-1">
                Trương Xuân Giang{" "}
              </h3>
              <span className="text-gray-400 text-md">Lập trình C/C++</span>
            </div>
          </div>
          <p className="my-5 text-gray-400 ">
            “Chất lượng giảng dạy tuyệt vời, giảng viên cùng trợ giảng nhiệt
            tình nhiệt huyết, giảng dạy dễ hiểu giúp học viên dễ tiếp thu với
            kiến thức mới. ? Cảm hơn 28tech đã mang tới trải nghiệm tuyệt vời
            đến cho mình và các bạn học viên. Mình sẽ giới thiệu cho bạn bè với
            người thân muốn học lập trình tới 28tech”
          </p>
          <div className="flex  items-center">
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 bg-sky p-10">
          <div className="flex items-center">
            <div className="w-20 h-20 rounded-full border-2 border-solid border-blue-primary">
              <img src={avatar} className="" />
            </div>
            <div className="ml-6">
              <h3 className="text-xl text-dark-purple font-bold my-1">
                Trương Xuân Giang{" "}
              </h3>
              <span className="text-gray-400 text-md">Lập trình C/C++</span>
            </div>
          </div>
          <p className="my-5 text-gray-400 ">
            “Chất lượng giảng dạy tuyệt vời, giảng viên cùng trợ giảng nhiệt
            tình nhiệt huyết, giảng dạy dễ hiểu giúp học viên dễ tiếp thu với
            kiến thức mới. ? Cảm hơn 28tech đã mang tới trải nghiệm tuyệt vời
            đến cho mình và các bạn học viên. Mình sẽ giới thiệu cho bạn bè với
            người thân muốn học lập trình tới 28tech”
          </p>
          <div className="flex  items-center">
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="h-96 bg-sky p-10">
          <div className="flex items-center">
            <div className="w-20 h-20 rounded-full border-2 border-solid border-blue-primary">
              <img src={avatar} className="" />
            </div>
            <div className="ml-6">
              <h3 className="text-xl text-dark-purple font-bold my-1">
                Trương Xuân Giang{" "}
              </h3>
              <span className="text-gray-400 text-md">Lập trình C/C++</span>
            </div>
          </div>
          <p className="my-5 text-gray-400 ">
            “Chất lượng giảng dạy tuyệt vời, giảng viên cùng trợ giảng nhiệt
            tình nhiệt huyết, giảng dạy dễ hiểu giúp học viên dễ tiếp thu với
            kiến thức mới. ? Cảm hơn 28tech đã mang tới trải nghiệm tuyệt vời
            đến cho mình và các bạn học viên. Mình sẽ giới thiệu cho bạn bè với
            người thân muốn học lập trình tới 28tech”
          </p>
          <div className="flex  items-center">
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
            <i className="fas fa-star text-stars"></i>
          </div>
        </div>
      </SwiperSlide>
      <div className="swiper-button-prev pre-items"></div>
      <div className="swiper-button-next next-items"></div>
    </Swiper>
  );
}
