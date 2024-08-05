import thumb from "../assets/945ca542b14c1f12465d_thumb_150.jpg";
import { Link } from "react-router-dom";

export default function CourseInCart({ removeFromCart, ...props }) {
  return (
    <Link
      className="font-be-vietnam flex hover:bg-white p-0 rounded-lg overflow-hidden my-4 focus:bg-white"
      to="/course/ok"
    >
      <div>
        <img
          src={props.image}
          className=" rounded-lg overflow-hidden w-48 h-24 object-cover"
        />
      </div>
      <div className="flex flex-col justify-end items-start ml-2">
        <h3 className="text-sm font-bold  text-dark-purple">
          {props.course_name}
        </h3>
        <h3 className="text-sm  text-dark-purple">
          <small className="font-bold">Lớp</small> : {props.class_name}
        </h3>
        <span className="font-bold text-lg">
          {parseInt(props.price).toLocaleString()}
          <small className="text-sm"> VND</small>
        </span>
        <button
          onClick={() => removeFromCart(props.class_id)}
          className="text-red-600 text-base flex"
        >
          Xóa
        </button>
      </div>
    </Link>
  );
}
