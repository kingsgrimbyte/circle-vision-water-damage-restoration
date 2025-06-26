import React from "react";
import home from "@/components/Content/home.json";

const ProcessWidget = () => {
  const content = home?.processWidget;
  return (
    <div className="mt-16 px-4 md:px-32">
      <h2 className="text-center text-3xl font-extrabold text-main">
        {content.title}
      </h2>
      <p className="mt-4 text-center text-lg">
        {content.description}
      </p>
      <section className="relative lg:mx-32 flex flex-col items-center justify-center gap-8 p-8">
        {/* Vertical Progress Bar */}
        <div className="absolute left-1/2 h-[90%] w-1 -translate-x-1/2 transform bg-gray-300 md:block"></div>

        {content.steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
            <h3 className="mb-4 text-xl font-bold">{step.title}</h3>
            <p className="">{step.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProcessWidget;
