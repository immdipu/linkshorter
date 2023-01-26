import React from "react";

const NavBar = () => {
  return (
    <div className="grid grid-cols-[max-content,auto] w-full items-center gap-8 mt-5">
      <img src="/images/logo.svg" alt="logo" />
      <div className="grid grid-cols-[auto,max-content]">
        <ul className="flex gap-6 items-center">
          <li className="font-semibold text-slate-900 opacity-50 hover:opacity-100 cursor-pointer">
            Features
          </li>
          <li className="font-semibold text-slate-900 opacity-50 hover:opacity-100 cursor-pointer">
            Pricing
          </li>
          <li className="font-semibold text-slate-900 opacity-50 hover:opacity-100 cursor-pointer">
            Resources
          </li>
        </ul>
        <div className="flex gap-4">
          <button
            type="button"
            className="font-semibold opacity-50 hover:opacity-100 cursor-pointer"
          >
            Login
          </button>
          <button
            type="button"
            className="font-semibold text-white bg-cyan-200 hover:bg-cyan-300 px-4 py-2 rounded-3xl"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
