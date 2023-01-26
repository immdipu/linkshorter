import React from "react";
import { useCommentContext } from "../LinkContext";

export const LinkInput = () => {
  const { show, text, setShow, setText, fetchLink, data } = useCommentContext();
  const submitHandle = (e) => {
    e.preventDefault();
    if (text === "") {
      setShow(true);
    } else {
      setShow(false);
      fetchLink(text);
    }
  };

  return (
    <div className="bg-bg-shorten-desktop bg-[#3b3054] bg-no-repeat  px-8 py-7 bg-cover shadow-md w-full rounded-lg">
      <form className="grid relative grid-cols-[auto,max-content] gap-4 items-center">
        <input
          className={
            "h-10 rounded-md px-3 py-2 outline-none border-2 " +
            (show ? "Error" : null)
          }
          type="text"
          placeholder="shorten a link here..."
          value={text}
          onChange={(e) => {
            setShow(false);
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-cyan-400 bg-opacity-90 hover:opacity-70 tracking-wider px-5 py-3 rounded-lg font-semibold text-white"
          onClick={submitHandle}
        >
          shorten it!
        </button>
        {show && (
          <span className="absolute -bottom-4 italic text-red-500 tracking-wider text-xs">
            please add link
          </span>
        )}
      </form>
    </div>
  );
};
