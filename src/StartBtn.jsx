import React from "react";
import gsap from "gsap";
import { useEffect } from "react";

const StartBtn = ({ start, step }) => {
  useEffect(() => {
    if (step < 5)
      gsap.to(".start-btn", {
        opacity: 1,
        duration: 1,
        ease: "bounce",
      });
    window.addEventListener(
      "keyup",
      (e) => {
        if (e.key === " " && step < 5)
          document.querySelector(".start-btn").textContent =
            "Press Space to continue";
      },
      { once: true }
    );
  }, [start]);

  useEffect(() => {
    if (step === 4) {
      document.querySelector(".start-btn").textContent = "Enjoy!";
    }
  }, [step]);
  return <>{start && <div className="start-btn">Press Space to start</div>}</>;
};

export default StartBtn;
