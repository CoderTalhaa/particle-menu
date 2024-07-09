import gsap from "gsap";

export const IntroText = (introTextRef) => {
  const tl = gsap.timeline();

  tl.to(".baba", {
    X: 0,
    duration: 2,
    ease: "power3.inOut",
  });
  tl.to(
    ".baba",
    {
      y: 0,
      duration: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.8,
      },
    },
    "<"
  );

  return tl;
};

export const progressAnimation = (progressRef, numberRef) => {
  const tl = gsap.timeline();

  tl.to(progressRef.current, {
    scaleX: 1,
    duration: 5,
    ease: "power3.inOut",
  })
    .to(
      numberRef.current,
      {
        x: "100vw",
        duration: 5,
        ease: "power3.inOut",
      },
      "<"
    )
    .to(
      numberRef.current,
      {
        textContent: "100",
        duration: 5,
        roundProps: "textContent",
      },
      "<"
    )
    .to(numberRef.current, {
      y: 24,
      autoAlpha: 0,
    });

  return tl;
};
