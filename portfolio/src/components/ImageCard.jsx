import React from "react";

const ImageCard = () => {
  return (
    <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">

      {/* Glow Effect */}
      <div
        className="absolute inset-0 rounded-full blur-2xl"
        style={{ backgroundColor: "var(--color-accentSoft)" }}
      ></div>

      {/* Profile Image */}
      <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500">
  <img
    src="/images/WhatsApp Image 2026-01-31 at 3.20.38 PM.jpeg"
    alt="Profile"
    className="w-full h-full object-cover object-center transition duration-300 hover:scale-105"
  />
</div>


    </div>
  );
};

export default ImageCard;
