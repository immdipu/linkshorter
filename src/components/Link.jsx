import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useCommentContext } from "../LinkContext";

const Link = ({ originalLink, shortLink, id }) => {
  const { deleteHandle } = useCommentContext();
  const [copy, setCopy] = useState(false);
  return (
    <div className="grid grid-cols-[auto,auto,max-content] gap-3 bg-white py-3 px-4 shadow-sm rounded-md items-center">
      <div>
        <h4 className="font-semibold text-slate-900 pl-4">{originalLink}</h4>
      </div>
      <div className="flex gap-5 items-center justify-end">
        <a
          href={shortLink}
          target="_blank"
          className="text-cyan-500 font-semibold hover:text-blue-900"
        >
          {shortLink}
        </a>
        <CopyToClipboard text={shortLink}>
          <button className="bg-cyan-400 w-24 h-9 relative bg-opacity-90 hover:opacity-70 tracking-wider px-6 py-1 rounded-md font-medium text-white overflow-hidden">
            <div
              className={
                "bg-slate-800 absolute z-50 inset-0 flex transition-all duration-100 ease-in  items-center justify-center rounded-md font-medium " +
                (copy ? "left-0" : "left-40")
              }
            >
              <p>Copied!</p>
            </div>
            <div
              className="bg-cyan-500 absolute inset-0 flex items-center justify-center  rounded-md font-medium"
              onClick={() => setCopy(true)}
            >
              <p>Copy</p>
            </div>
          </button>
        </CopyToClipboard>
      </div>
      <div className="ml-5 mr-2 w-fit border-2">
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="group icon"
          data-id={id}
          onClick={deleteHandle}
        >
          <path
            d="M960 160h-291.2a160 160 0 0 0-313.6 0H64a32 32 0 0 0 0 64h896a32 32 0 0 0 0-64zM512 96a96 96 0 0 1 90.24 64h-180.48A96 96 0 0 1 512 96zM844.16 290.56a32 32 0 0 0-34.88 6.72A32 32 0 0 0 800 320a32 32 0 1 0 64 0 33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72zM832 416a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32zM832 640a32 32 0 0 0-32 32v224a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V320a32 32 0 0 0-64 0v576a96 96 0 0 0 96 96h512a96 96 0 0 0 96-96v-224a32 32 0 0 0-32-32z"
            fill="#231815"
            className="group-hover:fill-red-600"
          />
          <path
            d="M384 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM544 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM704 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0z"
            fill="#231815"
            className="group-hover:fill-red-600"
          />
        </svg>
      </div>
    </div>
  );
};

export default Link;
