import cplusplus_basic from "../assets/c++ co ban toi nc_thumb_500.png";
import favicon from "../assets/favicon.png";
import { Link } from "react-router-dom";
export default function Course({ ...props }) {
  return (
    <Link
      to={`/course/${props.slug}`}
      className="max-w bg-white border-none  rounded-lg shadow text-heading course transition duration-300 z-auto"
    >
      <Link to={`/course/${props.slug}`}>
        <img className="rounded-t-lg" src={cplusplus_basic} alt="" />
      </Link>
      <div className="p-5">
        <div className="flex  items-center">
          <i className="fas fa-star text-stars"></i>
          <i className="fas fa-star text-stars"></i>
          <i className="fas fa-star text-stars"></i>
          <i className="fas fa-star text-stars"></i>
          <i className="fas fa-star text-stars"></i>
          <span className="ml-2"> {`(285 Đánh giá)`} </span>
        </div>
        <div className="mt-2 mb-3">
          <Link to={`/course/${props.slug}`} className="">
            <h5 className="text-2xl font-bold tracking-tight hover:text-blue-primary duration-200 ">
              {props.course_name}
            </h5>
          </Link>
        </div>
        <div className="mb-3 font-normal flex items-center">
          <i className="fa-solid fa-book text-blue-primary mr-3"></i>
          <p className="text-gray-500">
            <strong>{props.number_of_sessions}</strong> Bài giảng
          </p>
        </div>

        <div className="flex items-center gap-4 my-5">
          <img
            src={favicon}
            className="w-10 h-10 rounded-full border-gray-400 border-solid border-2"
          />
          <p className="text-dark-purple font-bold text-lg">Đội Ngũ 28Tech</p>
        </div>
        <div className="flex items-center gap-4 my-5 text-xl">
          <h3 className="font-semibold text-dark-purple">
            {parseInt(props.discount, 10).toLocaleString()}đ
          </h3>
          <h3 className="font-semibold text-gray-400 line-through">
            {parseInt(props.price, 10).toLocaleString()}đ
          </h3>
        </div>
      </div>
    </Link>
  );
}
