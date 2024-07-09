"use client";

import { useProgress } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

import "./loader.css";

import { IntroText, progressAnimation } from "./loaderAnim";
export default function LoadingScreen({ timeline }) {
  const { progress, active } = useProgress();

  const introTextRef = useRef(null);
  const loaderRef = useRef(null);
  const progressRef = useRef(null);
  const numberRef = useRef(null);

  useEffect(() => {
    timeline &&
      timeline
        .add(IntroText(introTextRef))
        .add(progressAnimation(progressRef, numberRef), "-=2");
  }, [timeline]);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="wrapper">
        <div ref={introTextRef} className="intro-text">
          <p className="baba">Creative</p>
          <p className="baba">Web</p>
          <p className="baba">Developer</p>
        </div>
      </div>
      <div className="progressWrapper">
        <div className="progressBar" ref={progressRef}></div>
        <span className="numberRef" ref={numberRef}>
          0
        </span>
      </div>
    </div>
  );
}
