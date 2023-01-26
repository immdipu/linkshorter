import React from "react";

const FirstSection = () => {
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm: items-center gap-10 mt-16">
      <section className=" grid grid-cols-1 gap-4 max-sm:order-last max-sm:place-items-center">
        <h5 className="font-extrabold text-5xl text-slate-700 leading-[62px]">
          More than just <br /> shorter links
        </h5>
        <p className="opacity-40 font-medium text-sm w-3/4">
          Build your brand's recognition and get detailed insight on how your
          links are performing.
        </p>
        <button
          type="button"
          className="font-semibold mt-3 text-white bg-cyan-200 w-fit hover:bg-cyan-300 px-4 py-2 rounded-3xl"
        >
          Get Started
        </button>
      </section>
      <img src="/images/illustration-working.svg" alt="" />
    </div>
  );
};

export default FirstSection;
