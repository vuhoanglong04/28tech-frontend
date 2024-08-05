import hero_bg from "../assets/hero-bg.jpg";
import roadmap from "../assets/roadmap.png";
import daidien1 from "../assets/dai_dien1.png";
import advisor from "../assets/advisor-bg.svg";
import tick from "../assets/tick.svg";
import daidien2 from "../assets/dai_dien2.png";
import question_mark from "../assets/question-mark.svg";
import chatLuongCao from "../assets/chat-luong-cao.png";
import kynang from "../assets/ky-nang-lap-trinh.png";
import laptrinhvien from "../assets/lap-trinh-vien.png";
import { Link } from "react-router-dom";

import Course from "./../components/Course";
import Category from "./../components/Category";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div
      className=" font-be-vietnam"
      style={{
        backgroundImage: `url(${hero_bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "maintain",
      }}
    >
      <div className="flex flex-col items-center container mx-auto p-4 text-white text-center">
        <h1 className="text-6xl font-bold w-8/12 mt-40 leading-snug">
          28Tech - Become A Better Developer
        </h1>
        <p className="text-lg my-10 text-wrap w-5/6">
          28Tech là đơn vị cung cấp những khóa học chất lượng cao về lập trình
          với mục tiêu lớn nhất là giúp các bạn sinh viên IT phát triển kiến
          thức, sự nghiệp !
        </p>
        <div className="flex ">
          <a
            type="button"
            className="text-white  text-xl hover:cursor-pointer bg-blue-primary transition duration-500 translate-y-0 hover:-translate-y-1 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-5 px-12"
          >
            Các khóa học
          </a>
          <a
            type="button"
            className="text-dark-purple ml-5 text-xl hover:cursor-pointer bg-white transition duration-500 translate-y-0 hover:-translate-y-1 hover:bg-blue-primary hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-5 px-12"
          >
            Zalo: 0344847295
          </a>
        </div>
      </div>
      <div
        className="p-52  pb-96 w-10/12 mx-auto rounded-lg mb-20 mt-10"
        style={{
          backgroundImage: `url(${roadmap})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="all_courses bg-white-bg my-10 pb-20">
        <div className="mx-20">
          <h2 className="text-center text-dark-purple text-5xl font-extrabold py-32">
            Khóa Học Tại 28Tech
          </h2>
          <div className="grid grid-cols-3 mx-auto justify-items-center gap-10">
            {/* {course.map((item) => {
              return <Course />;
            })} */}
          </div>
        </div>
      </div>

      <div className="flex  about relative h-svh mb-5 pt-20">
        <div>
          <img
            src={daidien1}
            className="absolute z-10 bottom-50 object-contain left-20 h-4/5"
          />
          <img src={advisor} className="absolute h-3/6  left-0 bottom-40" />
        </div>
        <div className="w-1/2 ml-auto text-left">
          <h2 className="text-left text-dark-purple text-5xl font-extrabold py-10 ml-10">
            Về 28Tech
          </h2>
          <p className="text-wrap pr-20 text-dark-purple text-xl ml-10">
            28Tech là một đội nhóm gồm các Lập trình viên hiện đang làm việc ở
            nhiều lĩnh vực khác nhau nhưng có chung niềm đam mê với giảng dạy và
            chia sẻ kiến thức.
          </p>
          <br />
          <p className="text-wrap pr-20 text-dark-purple text-xl ml-10">
            28Tech luôn cố gắng đổi mới, trau dồi kỹ năng, đón nhận đóng góp,
            khắc phúc những điểm chưa tốt để mang đến cho các bạn học viên những
            khóa học lập trình với chất lượng cao nhất
          </p>
          <div className="flex items-center gap-4">
            <div className="bg-blue-light rounded-full w-12 h-12 flex justify-center items-center my-4  ml-10">
              <img src={tick} className="text-white   w-8 h-8 " />
            </div>
            <p className=" text-dark-purple text-lg font-bold">
              Giảng viên giàu kinh nghiệm
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-blue-light rounded-full w-12 h-12 flex justify-center items-center my-4  ml-10">
              <img src={tick} className="text-white   w-8 h-8 " />
            </div>
            <p className=" text-dark-purple text-lg font-bold">
              Bài giảng và bài tập chất lượng
            </p>
          </div>
          <div className="my-4 flex text-xl subcribe_btn h-14 items-center w-96 ml-10 ">
            <Link
              type="button"
              to="/category/1"
              className=" ml-5 text-dark-purple  rounded-full  xasd"
            >
              Danh Sách Khóa Học Video
              <i className="fa-solid fa-arrow-right mx-3 text-xl"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-white-bg my-10 pb-20  px-20">
        <h2 className="text-center text-dark-purple text-5xl font-extrabold py-32">
          Danh Mục Nổi Bật
        </h2>
        <div className="grid grid-cols-4 mx-auto justify-items-center gap-10 justify-items-center">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
        <div className="grid grid-cols-4 mx-auto justify-items-center gap-10 justify-items-center my-10">
          <div></div>
          <Category />
          <Category />
          <div></div>
        </div>
      </div>
      <div className="bg-white my-10 pb-20  px-20">
        <h2 className="text-center text-dark-purple text-5xl font-extrabold py-32">
          Cảm nhận của học viên
        </h2>
        <div className="h-96">
          <Slider />
        </div>
      </div>
      <div className="bg-white-bg my-10 px-20 py-10">
        <h2 className="text-center text-dark-purple text-5xl font-extrabold py-32">
          Tại sao bạn nên học với 28Tech
        </h2>
        <div className="grid grid-cols-2 relative">
          <div>
            <img src={daidien2} />
            <div className="absolute p-10 rounded-full bg-white bottom-10">
              <img src={question_mark} className="w-20 h-20" />
            </div>
          </div>
          <div>
            <div className="bg-white flex p-5 rounded-md gap-3 justify-center items-center why mt-3">
              <div className="p-6 rounded-3xl bg-sky">
                <img src={chatLuongCao} />
              </div>
              <div>
                <h4 className="text-dark-purple text-xl font-bold">
                  Chất lượng cao
                </h4>
                <p className="text-gray-400">
                  Nội dung của khóa học được đầu tư cả về chất và lượng, giáo
                  viên có kinh nghiệm và cực kỳ tâm huyết với công việc giảng
                  dạy.
                </p>
              </div>
            </div>
            <div className="bg-white flex p-5 rounded-md gap-3 justify-center items-center why mt-3">
              <div className="p-6 rounded-3xl bg-sky">
                <img src={kynang} />
              </div>
              <div>
                <h4 className="text-dark-purple text-xl font-bold">
                  Cung cấp nhiều kỹ năng quan trọng
                </h4>
                <p className="text-gray-400">
                  Khóa học cung cấp kỹ thuật lập trình, tư duy logic, cách giải
                  quyết bài toán, thuật toán... Những kỹ năng sẽ theo bạn mãi
                  trong học tập và công việc sau này.
                </p>
              </div>
            </div>
            <div className="bg-white flex p-5 rounded-md gap-3 justify-center items-center why mt-3">
              <div className="p-6 rounded-3xl bg-sky">
                <img src={laptrinhvien} />
              </div>
              <div>
                <h4 className="text-dark-purple text-xl font-bold">
                  Bước chuẩn bị vững chắc của một lập trình viên
                </h4>
                <p className="text-gray-400">
                  Kỹ thuật lập trình là kỹ năng đầu tiên cần phải học khi bạn
                  muốn trở thành một lập trình viên, việc học tốt kỹ thuật lập
                  trình sẽ là bước đệm vững chắc cho sự nghiệp của bạn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
