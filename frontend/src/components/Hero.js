import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import animate from "lottie-web";

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./astronaout.json"),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className="my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns">
      <div className="ml-auto w-72 md:w-96 lg:w-2/5">
        <div className="container" ref={container}></div>
      </div>
      <div className="max-w-md mb-auto space-y-5">
        <h1 className="text-5xl font-bold md:text-7xl">Hello. I am Daniel</h1>
        <p className="tracking-wide leading-relaxed">
          Daniel is a dedicated web developer who specializes in developing
          full-stack web applications using practical frameworks. He's
          passionate about solving problems for others. A good solution to
          Daniel usually requires a dose of creativity that then requires more
          effort to adapt and perfect.
        </p>
      </div>
    </section>
  );
};

export default Hero;
