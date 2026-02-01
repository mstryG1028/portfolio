import React from "react";
import ImageCard from "./ImageCard";
import TextBox from "./TextBox";
import Tools from "./Tools";

const MiddleSection = () => {
  return (
    <section className="w-full px-2 py-10 md:px-25 space-y-14"
           >

      {/* Hero */}
      <div className="flex flex-col-reverse md:flex-row 
                      items-center justify-between gap-10">
        <TextBox />
        <ImageCard />
      </div>

      {/* Skills */}
      <Tools />
    </section>
  );
};

export default MiddleSection;
