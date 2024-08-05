import zoom from "../assets/zoom.png";
export default function Category() {
  return (
    <div className="w-full h-64 p-6 bg-white border border-gray-200 rounded-lg shadow text-center flex flex-col items-center justify-center hover:-translate-y-5 duration-300">
      <img src={zoom} className="w-20 my-5" />
      <h5 className="mb-2 text-2xl font-bold tracking-tight hover:text-blue-primary duration-200 ">
        Khóa Học Zoom
      </h5>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center "
      >
        7 khóa học
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
          />
        </svg>
      </a>
    </div>
  );
}
