import thumb from "../assets/5_thumb_350.png";
import { Link } from 'react-router-dom';
export default function Topic() {
  return (
    <Link to="/blog/topic/ok"
      className="h-40 w-80 rounded-xl overflow-hidden relative flex justify-center items-center font-be-vietnam  hover:bg-dark-purple z-100"
      style={{
        backgroundImage: `url(${thumb})`,
        backgroundSize: "contain",
      }}
    >
        <div className="absolute w-full h-full bg-black opacity-40 hover:bg-dark-purple hover:opacity-90 duration-200 hover:cursor-pointer"></div>
        <h2 className="text-white font-semibold text-3xl z-10 hover:cursor-pointer">C++</h2>
    </Link>
  );
}
