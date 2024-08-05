import bg_image from "../assets/bg-image-10.jpg";
import best_seller from "../assets/best-seller.png";
import favicon from "../assets/favicon.png";
import cplusplus from "../assets/c++ co ban toi nc_thumb_500.png";
import lotrinh from "../assets/lộ trình c++ cơ bản tới nâng cao 2024.png";
import { Link } from "react-router-dom";
import api from "../api/contacts.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Course from "./../components/Course";
import DropDown from "./../components/DropDown";
import { ModalClasses } from "../components/ModalClasses";

export default function CourseDetail() {
  const [detail, setDetail] = useState({});
  const [lessons, setLessons] = useState({});
  const [coursesData, setCourses] = useState([]);
  const [showClasses, setShowClasses] = useState(false);
  const [allClasses, setAllClasses] = useState([]);
  const { slug } = useParams();

  const getDetailCourse = async () => {
    const response = await api.get(`courses/${slug}`);
    return response.data;
  };
  const getCoursesByCategory = async (categoryId) => {
    const response = await api.get(`courses?category_id=${categoryId}`);
    return response.data;
  };

  function hideClasses() {
    setShowClasses(false);
  }
  useEffect(() => {
    const loadDetail = async () => {
      const data = await getDetailCourse();
      if (data) {
        setDetail(data);
        setAllClasses(data[1]);
      }
    };
    loadDetail();
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const lessonsJson = detail[0]?.lessons;
    if (typeof lessonsJson === "string") {
      const parsedLessons = JSON.parse(lessonsJson);
      setLessons(parsedLessons);
    }
  }, [detail]);

  useEffect(() => {
    if (detail[0]?.category_id) {
      const loadCourses = async () => {
        const coursesData = await getCoursesByCategory(detail[0].category_id);

        setCourses(coursesData);
      };
      loadCourses();
    }
  }, [detail]);
  return (
    <div className="font-be-vietnam">
      <div
        className="h-lvh w-full "
        style={{
          backgroundImage: `url(${bg_image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-28 py-28 ">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className=" text-lg inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
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
                    to="/course-zoom"
                    className=" text-lg  ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Khóa Học Zoom
                  </Link>
                </div>
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
                    className=" text-lg  ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Lập trình C++ Cơ bản tới Nâng cao
                  </a>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex">
            <div className="w-8/12 pr-10">
              <h1 className="text-5xl font-extrabold  my-8">
                {detail[0]?.course_name}
              </h1>
              <p
                className=""
                dangerouslySetInnerHTML={{ __html: detail[0]?.description }}
              ></p>
              <div className="flex my-7 items-center gap-3">
                <div className="bg-purple-200 w-40 h-14 rounded-full border-2 border-white flex items-center justify-center gap-3">
                  <img src={best_seller} className="h-10 w-10" />
                  <span>Bestseller</span>
                </div>
                <div>
                  <span>5.0</span>
                  <i className="fas fa-star text-stars"></i>
                  <i className="fas fa-star text-stars"></i>
                  <i className="fas fa-star text-stars"></i>
                  <i className="fas fa-star text-stars"></i>
                  <i className="fas fa-star text-stars"></i>
                  <span className="ml-2 p-2 bg-transparent rounded-xl hover:cursor-pointer hover:bg-blue-100 duration-300">
                    (258 Đánh giá)
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 my-5">
                <img
                  src={favicon}
                  className="w-10 h-10 rounded-full border-gray-400 border-solid border-2"
                />
                <p className="text-dark-purple font-bold text-lg">
                  Đội Ngũ 28Tech
                </p>
              </div>
            </div>

            <div className="w-4/12">
              <div className="border-4 rounded-xl border-dark-purple bg-white  p-6  h-[700px] my-8 flex justify-end  w-full">
                <div className=" e  rounded-lg ">
                  <a href="#">
                    <img className="rounded-t-lg" src={cplusplus} alt="" />
                  </a>
                  <div className="">
                    <div className="flex items-center gap-4 my-5 text-2xl ">
                      <h3 className="font-semibold text-dark-purple">
                        {parseInt(detail[0]?.discount, 10).toLocaleString()}đ
                      </h3>
                      <h3 className="font-semibold text-gray-400 line-through">
                        {parseInt(detail[0]?.price, 10).toLocaleString()}đ
                      </h3>
                    </div>
                    <button
                      type="submit"
                      onClick={() => setShowClasses(true)}
                      className="w-full flex items-center justify-center  font-bold text-white btn_subscribe transition duration-200  end-2.5 bottom-2.5 bg-custom-gradient bg-cover  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-4"
                    >
                      <span className="text-white text-lg">Đăng Ký</span>
                    </button>

                    <ModalClasses
                      showClasses={showClasses}
                      hideClasses={hideClasses}
                      classes={allClasses}
                      course={detail[0]}
                    />
                    <div className="flex border-b-2 border-gray-200 my-2 justify-between py-3 items-center">
                      <span className="text-gray-600 ">Ngày khai giảng</span>
                      <span className="text-dark-purple text-sm p-1 bg-sky text-dark-purple rounded-full">
                        {detail[1]?.[0].date_start}
                      </span>
                    </div>
                    <div className="flex border-b-2 border-gray-200 my-2 justify-between py-3 items-center">
                      <span className="text-gray-600 ">Lịch học</span>
                      <span className="text-dark-purple text-sm p-1 bg-sky text-dark-purple rounded-lg">
                        {detail[1]?.[0]?.schedule}
                      </span>
                    </div>
                    <div className="flex border-b-2 border-gray-200 my-2 justify-between py-3 items-center">
                      <span className="text-gray-600 ">Giờ học</span>
                      <span className="text-dark-purple text-sm p-1 bg-sky text-dark-purple rounded-lg">
                        {detail[1]?.[0]?.time_study}
                      </span>
                    </div>
                    <div className="flex border-b-2 border-gray-200 my-2 justify-between py-3 items-center">
                      <span className="text-gray-600 ">Số lượng bài giảng</span>
                      <span className="text-dark-purple text-sm p-1 bg-sky text-dark-purple rounded-lg">
                        {detail[0]?.number_of_sessions}
                      </span>
                    </div>
                    <div className="flex my-2 justify-between py-3 items-center">
                      <span className="text-gray-600 ">Giảng viên</span>
                      <span className="text-dark-purple p-1 bg-sky text-dark-purple rounded-lg">
                        Đội Ngũ 28Tech
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 pb-10">
        <div className="mx-28 flex ">
          <div className="bg-white my-10 w-8/12 py-5 bg-white mr-32">
            <img src={detail[0]?.background} className="w-full p-10" />
          </div>
        </div>
        <div className="mx-28 flex items-center">
          <div className="w-8/12  ">
            <div className="mb-4  bg-white rounded-full">
              <ul
                className="flex flex-wrap -mb-px text-sm font-medium text-center justify-between mr-10 p-2 rounded-full"
                id="default-tab"
                data-tabs-toggle="#default-tab-content"
                role="tablist"
              >
                <li className="me-2" role="presentation">
                  <a
                    href=""
                    className="inline-block px-14 py-3 border-b-2 rounded-full  bg-gray-100 focus:bg-dark-purple focus:text-white text-lg"
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Tổng quan
                  </a>
                </li>
                <li className="me-2" role="presentation">
                  <a
                    href="#road-map"
                    className="inline-block px-14 py-3 border-b-2 rounded-full  bg-gray-100 focus:bg-dark-purple focus:text-white text-lg"
                    id="dashboard-tab"
                    data-tabs-target="#dashboard"
                    type="button"
                    role="tab"
                    aria-controls="dashboard"
                    aria-selected="false"
                  >
                    Lộ trình
                  </a>
                </li>
                <li className="me-2" role="presentation">
                  <button
                    className="inline-block px-14 py-3 border-b-2 rounded-full  bg-gray-100 focus:bg-dark-purple focus:text-white text-lg"
                    id="settings-tab"
                    data-tabs-target="#settings"
                    type="button"
                    role="tab"
                    aria-controls="settings"
                    aria-selected="false"
                  >
                    Chi tiết
                  </button>
                </li>
                <li role="presentation">
                  <button
                    className="inline-block px-14 py-3 border-b-2 rounded-full  bg-gray-100 focus:bg-dark-purple focus:text-white text-lg"
                    id="contacts-tab"
                    data-tabs-target="#contacts"
                    type="button"
                    role="tab"
                    aria-controls="contacts"
                    aria-selected="false"
                  >
                    Đăng ký
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div></div>
        </div>

        <div className="mx-28 flex ">
          <div className="w-8/12 bg-white p-5 pr-10">
            <h3 className="py-5 border-b text-2xl text-dark-purple font-semibold">
              Tổng quan khóa học
            </h3>
            <p
              className="mt-5"
              dangerouslySetInnerHTML={{ __html: detail[0]?.overview }}
            ></p>
            <div className="mt-5 flex flex-col gap-3">
              <h2>
                <strong className="text-blue-primary">Thời lượng : </strong> 40
                buổi học (80 giờ học)
              </h2>
              <h2>
                <strong className="text-blue-primary">Thời gian học : </strong>{" "}
                3 tháng rưỡi
              </h2>
              <h2>
                <strong className="text-blue-primary">Hình thức học : </strong>
                Online qua Zoom
              </h2>
              <h2>
                <strong className="text-blue-primary">
                  Số buổi trên tuần :{" "}
                </strong>{" "}
                3 buổi (2h/buổi)
              </h2>
              <h2>
                <strong className="text-blue-primary">
                  Số lượng contest :{" "}
                </strong>{" "}
                16-18
              </h2>
              <h2>
                <strong className="text-blue-primary">
                  Số lượng bài tập :{" "}
                </strong>{" "}
                500-550{" "}
              </h2>
            </div>
          </div>
          <div></div>
        </div>
        <div className="mx-28 flex  my-10" id="road-map">
          <div className="w-8/12 bg-white p-5 pr-10">
            <h3 className="py-5 border-b text-2xl text-dark-purple font-semibold">
              Lộ trình khóa học
            </h3>

            <div
              id="accordion-flush"
              data-accordion="collapse"
              data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              data-inactive-classes="text-gray-500 dark:text-gray-400"
            >
              {Object.entries(lessons).map(([key, value], index) => (
                <DropDown
                  key={index}
                  index={index}
                  lesson={key}
                  section={value}
                />
              ))}
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="mx-28 ">
        <h2 className="text-center text-dark-purple text-5xl font-extrabold py-20">
          Khóa Học Tại 28Tech
        </h2>
        <div className="grid grid-cols-3 justify-items-center gap-10">
          {coursesData.map((item, index) => {
            if (item.slug != detail[0].slug)
              return <Course key={index} {...item} />;
            else return "";
          })}
        </div>
      </div>
    </div>
  );
}
