import React from "react";

export default function Pagination({ numOfPages, changePage, pageNum }) {
  return (
    <div className="flex h-10 justify-end gap-3 pt-14">
      <button
        className="flex h-10 w-24 items-center justify-center rounded-sm bg-white text-main hover:bg-main hover:text-white"
        value={pageNum - 1 || 1}
        onClick={changePage}
      >
        {" "}
        {"<<"} Prev
      </button>
      <ul className="flex">
        {Array.from({ length: numOfPages }, (_, index) => (
          <li key={index} className="">
            <button
              onClick={changePage}
              value={index + 1}
              className={`flex h-10 w-12 items-center justify-center rounded bg-main text-white ${
                index === pageNum - 1 ? "bg-opacity-100" : "bg-opacity-10"
              }`}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="flex h-10 w-24 items-center justify-center rounded-sm bg-white text-main hover:bg-main hover:text-white"
        value={pageNum + 1}
        onClick={changePage}
      >
        Next {">>"}
      </button>
    </div>
  );
}
