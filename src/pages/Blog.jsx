import { Link } from "react-router-dom";
import thanhtich from "../assets/thanh tich 2024_thumb_720.png";
import Topic from "../components/Topic";
import Post from "../components/Post";
export default function CourseZoom() {
  return (
    <div className="font-be-vietnam mx-28 my-20">
      <div className=" my-5 flex">
        <div className="flex flex-col gap-5">
          <Topic />
          <Topic />
        </div>
        <div className="flex">
          <div className="w-full h-full overflow-hidden  rounded-lg mx-5">
            <img
              src={thanhtich}
              className=" w-full h-full object-cover rounded-lg hover:scale-125 rounded-lg duration-500 cursor-pointer"
            />
          </div>
          <div className=" w-[500px]">
            <button
              type="button"
              className="text-dark-purple bg-gray-100 hover:bg-dark-purple hover:text-white duration-300 font-medium rounded-lg text-sm  py-2.5 text-center me-2 mb-2 w-40"
            >
              Chuyện nghề CNTT
            </button>
            <h2 className="  text-xl text-dark-purple font-semibold hover:text-blue-primary duration-200 hover:cursor-pointer">
              Thành tích học viên tại 28Tech
            </h2>
            <p className="mt-3 text-lg">
              Bài viết này ghi nhận lại những thành tích của các học viên tại
              28Tech trong nửa cuối năm 2023 và năm 2024, trong tương lai mình
              và đội ngũ 28Tech sẽ cố gắng không ngừng để ngày...
            </p>
            <div className="my-3 font-normal flex items-center">
              <i
                className="fa-solid fa-calendar-days text-blue-primary mr-3"
                aria-hidden="true"
              ></i>
              <p className="text-gray-500">
                <strong>15/03/2024</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" my-5 flex">
        <div className="flex flex-col gap-5">
          <Topic />
          <Topic />
        </div>
        <div className="flex">
          <div className="w-full h-full overflow-hidden  rounded-lg mx-5">
            <img
              src={thanhtich}
              className=" w-full h-full object-cover rounded-lg hover:scale-125 rounded-lg duration-500 cursor-pointer"
            />
          </div>
          <div className=" w-[500px]">
            <button
              type="button"
              className="text-dark-purple bg-gray-100 hover:bg-dark-purple hover:text-white duration-300 font-medium rounded-lg text-sm  py-2.5 text-center me-2 mb-2 w-40"
            >
              Chuyện nghề CNTT
            </button>
            <h2 className="text-xl text-dark-purple font-semibold hover:cursor-pointer hover:cursor-pointer hover:text-blue-primary duration-200 hover:cursor-pointer">
              Thành tích học viên tại 28Tech
            </h2>
            <p className="mt-3 text-lg">
              Bài viết này ghi nhận lại những thành tích của các học viên tại
              28Tech trong nửa cuối năm 2023 và năm 2024, trong tương lai mình
              và đội ngũ 28Tech sẽ cố gắng không ngừng để ngày...
            </p>
            <div className="my-3 font-normal flex items-center">
              <i
                className="fa-solid fa-calendar-days text-blue-primary mr-3"
                aria-hidden="true"
              ></i>
              <p className="text-gray-500">
                <strong>15/03/2024</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue my-40">
        <h2 className="text-dark-purple font-extrabold text-4xl my-20">
          Ngôn Ngữ Lập Trình C
        </h2>
        <div className="grid grid-cols-3 gap-y-10 gap-x-10">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="bg-blue my-40">
        <h2 className="text-dark-purple font-extrabold text-4xl my-20">
          Ngôn Ngữ Lập Trình C
        </h2>
        <div className="grid grid-cols-3 gap-y-10 gap-x-10">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div className="bg-blue my-40">
        <h2 className="text-dark-purple font-extrabold text-4xl my-20">
          Tất cả chủ đề
        </h2>
        <div className="grid grid-cols-4 gap-y-10">
            <Topic />
            <Topic />
            <Topic />
            <Topic />
            <Topic />
            <Topic />
            <Topic />

        </div>
      </div>
    </div>
  );
}
