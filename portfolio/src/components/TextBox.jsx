import React from "react";

const TextBox = () => {
  return (
    <div className="max-w-xl">

      {/* Greeting */}
      <span className="text-2xl text-[var(--color-textMuted)]">
        Hi, I’m
      </span>

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-textPrimary)] mt-2">
        Deepak Mistry
      </h1>

      {/* Title */}
      <h3 className="text-xl md:text-2xl text-[var(--color-textPrimary)] mt-3">
        Full Stack Web Developer
      </h3>

      {/* Description */}
      <p className="text-[var(--color-textMuted)] mt-4 leading-relaxed">
        Skilled in Core Java and Full Stack Development, with a strong interest in building web applications.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        <button
          className="
            px-6 py-2
            bg-[var(--color-accent)]
            text-[var(--color-themeColor)]
            rounded-full font-semibold
            hover:bg-[var(--color-accentSoft)]
            transition
          "
        >
          View Projects
        </button>

        <button
          className="
            px-6 py-2
            border-2 border-[var(--color-accent)]
            text-[var(--color-accent)]
            rounded-full
            hover:bg-[var(--color-accent)]
            hover:text-[var(--color-themeColor)]
            transition
          "
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default TextBox;
