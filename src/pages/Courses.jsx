import { Link } from "react-router-dom";
import Course from "../components/Course";
import api from "../api/contacts.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Courses() {
  const [course, setCourse] = useState([]);

  const { id } = useParams();

  const getProducts = async () => {
    const response = await api.get(`/courses?category=${id}`);
    return response.data;
  };

  useEffect(() => {
    const loadCourseFromCategory = async () => {
      const courses = await getProducts();
      if (courses) {
        setCourse(courses);
      }
    };
    loadCourseFromCategory();
  }, [id]);

  return (
    <div>
      <div className=" bg-sky">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl  p-4 mx-auto">
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
                  <a
                    href="#"
                    className=" text-lg  ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  ></a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="mx-28 my-10">
        <div className="grid grid-cols-3 mx-auto justify-items-center gap-10">
          {course != [] &&
            course.map((item) => {
              return <Course {...item}  key={item.id}/>;
            })}
        </div>
      </div>
    </div>
  );
}
