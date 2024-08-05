export default function DropDown({ index, lesson, section }) {

  return (
    <>
      <h2 id={`accordion-flush-heading-${index + 1}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
          data-accordion-target={`#accordion-flush-body-${index + 1}`}
          aria-expanded="true"
          aria-controls={`accordion-flush-body-${index + 1}`}
        >
          <span className="text-lg text-dark-purple text-le">{lesson}</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-flush-body-${index + 1}`}
        className=""
        aria-labelledby={`accordion-flush-heading-${index + 1}`}
      >
        <div className="py-5 border-2 border-gray-100 rounded-lg p-8 mt-1 flex flex-col gap-1">
          {section.map((item , index) => {
            return (
              <h4 className="text-blue-primary " key={index}>
                <i className="fa-regular fa-circle-play"></i> {item}
              </h4>
            );
          })}
        </div>
      </div>
    </>
  );
}
