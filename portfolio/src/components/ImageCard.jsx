import React from "react";

const ImageCard = () => {
  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80">

      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl blur-2xl"
        style={{ backgroundColor: "var(--color-accentSoft)" }}
      ></div>

      {/* Image */}
      <div
        className="relative rounded-full overflow-hidden shadow-lg"
        style={{ boxShadow: `0 10px 15px -3px ${"var(--color-border)"}` }}
      >
        <img
          src="public\images\download (1).png"
          alt="Profile"
          className="w-full h-full object-cover rounded-full hover:scale-105 transition duration-300"
        />
      </div>

    </div>
  );
};

export default ImageCard;
