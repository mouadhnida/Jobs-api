import React from "react";

export default function Pagination({ numOfPages, changePage, pageNum }) {
  return (
    <div className="flex justify-end h-10 gap-3 pt-14">
      <button
        className="flex items-center justify-center w-24 h-10 bg-white rounded-sm text-main hover:bg-main hover:text-white"
        value={pageNum - 1 || 1}
        onClick={changePage}
      >
        {" "}
        {"<<"} Prev
      </button>
      <ul className="flex">
        {Array.from({ length: numOfPages }, (_, index) => (
          <li key={index} className="">
            {pageNum > 0 ? <button
              onClick={changePage}
              value={index + 1}
              className={`flex h-10 w-12 items-center justify-center rounded bg-main  ${
                index === pageNum - 1
                  ? "bg-opacity-100 text-white"
                  : "bg-opacity-30 text-main"
              }`}
            >
              {index + 1}
            </button> : null}
          </li>
        ))}
      </ul>
      <button
        className="flex items-center justify-center w-24 h-10 bg-white rounded-sm text-main hover:bg-main hover:text-white"
        value={pageNum + 1}
        onClick={changePage}
      >
        Next {">>"}
      </button>
    </div>
  );
}
