import TextBox from "../components/TextBox";
import ImageCard from "../components/ImageCard";

const About = () => {
  return (
    <section className="w-full px-2 py-10 md:px-25 space-y-14 mt-10 bg-transparent">
      {/* Hero */}
      <div
        className="flex flex-col-reverse md:flex-row 
                      items-center justify-between gap-10"
      >
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
            Skilled in Core Java and Full Stack Development, with a strong
            interest in building web applications.
          </p>
        </div>

        <ImageCard />
      </div>
    </section>
  );
};

export default About;
