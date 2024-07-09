"use client";

import Lenis from "lenis";
import React, { useEffect, useLayoutEffect, useState } from "react";
import World from "../components/canvas/World";
import Section1 from "../sections/Section1";
import LoadingScreen from "@/components/loader/LoadingScreen";
import gsap from "gsap";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 0.5,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const [LoaderFinished, setLoadedFinished] = useState(false);

  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoadedFinished(true),
      });

      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <>
      {/* <div className="noise"></div> */}

      {/* {LoaderFinished ?  <Section1 /> : <LoadingScreen timeline={timeline} /> } */}

      <Section1 />

      {/* <LoadingScreen timeline={timeline} /> */}
    </>
  );
}
