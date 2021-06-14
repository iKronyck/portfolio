import * as React from "react";

const Presentation: React.FC = () => {
  return (
    <section className="grid grid-cols-2">
      <div className="bg-primary h-screen" />
      <div className="bg-neutral h-screen" />
      <div className="absolute h-screen w-screen flex flex-wrap content-center justify-center flex-col">
        <h3
          className="text-9xl"
          style={{ lineHeight: 1, fontWeight: "bold", color: "#0E1A2A" }}
        >
          ISRA
          <br />
          ALFARO
        </h3>
        <span
          className="text-right mt-2 uppercase text-3xl"
          style={{ letterSpacing: ".22rem", lineHeight: 1, color: "#0E1A2A" }}
        >
          Frontend Developer
        </span>
        <a href="#about" className="absolute bottom-20 pulse">
          <svg width="40" height="40">
            <svg className="hex" width="40" height="40" viewBox="0 0 100 100">
              <path
                d="M 50 0 L 94 25 V 75 L 50 100 L 6 75 V 25 Z"
                fill="#0E1A2A"
              />
            </svg>
            <svg
              className="tri"
              width="16"
              height="16"
              x="12"
              y="12"
              viewBox="0 0 100 100"
            >
              <path d="M 94 25 L 50 100 L 6 25 Z" fill="#FFF" />
            </svg>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Presentation;
