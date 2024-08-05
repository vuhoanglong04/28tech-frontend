import ham from "../assets/hàm lower_bound(), upper_bound() trong c++_thumb_720.png";
import { Link } from "react-router-dom";

export default function Post() {
  return (
    <div>
      <div className="w-full  rounded-lg ">
        <div className="overflow-hidden w-full h-full rounded-lg ">
          <Link to="/blog/post/ok">
            <img
              className="rounded-t-lg hover:scale-105 duration-300"
              src={ham}
              alt=""
            />
          </Link>
        </div>
        <div className=" ">
          <button
            type="button"
            className="my-5 text-dark-purple bg-gray-100 hover:bg-dark-purple hover:text-white duration-300 font-medium rounded-lg text-lg  py-2 text-center me-2 mb-2 px-10"
          >
            Chuyện nghề CNTT
          </button>

          <h2 className=" my-2 text-2xl text-dark-purple font-semibold hover:text-blue-primary duration-200 hover:cursor-pointer">
            [C++]. Hàm binary_search, lower_bound, upper_bound trong C++
          </h2>
          <div className="my-3 font-normal flex items-center">
            <i
              className="fa-solid fa-calendar-days text-blue-primary mr-3  text-xl"
              aria-hidden="true"
            ></i>
            <p className="text-gray-500 text-xl">
              <strong>15/03/2024</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
