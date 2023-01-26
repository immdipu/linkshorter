import React from "react";
import { useCommentContext } from "../LinkContext";

const Alert = () => {
  const { setAlert, setText } = useCommentContext();
  return (
    <div className="flex bg-white rounded-lg flex-col gap-8 max-w-md items-center p-9  justify-center bounce-in-top max-sm:mx-5  ">
      <div className="text-slate-800 capitalize text-center font-semibold text-xl max-sm:text-sm ">
        it seems the provided link is not valid. please provide a valid link and
        try again.
      </div>
      <button
        className="font-bold tracking-wide text-xl text-white bg-slate-700 w-fit rounded-md px-4 py-2 max-sm:text-sm"
        onClick={() => {
          setText("");
          setAlert(false);
        }}
      >
        Okay
      </button>
    </div>
  );
};

export default Alert;
