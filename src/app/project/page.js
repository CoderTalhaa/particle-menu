"use client";

import React, { useState } from "react";
import Project from "../../components/project/Project";
import Modal from "../../components/project/Modal";

export default function Page() {
  const projects = [
    {
      title: "Cs baba yaha",
      src: "img1.jpg",
      color: "#000000",
    },
    {
      title: "KOBBA yasdha",
      src: "img2.jpg",
      color: "#324237",
    },
    {
      title: "image amsj",
      src: "img3.jpg",
      color: "#738562",
    },
    {
      title: "KOmbiak loren",
      src: "img4.jpg",
      color: "#108633",
    },
  ];

  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    // <main className=" h-screen flex justify-center items-center">
    //   <div className="w-[1000px] flex flex-col justify-center items-center">
    //     {projects.map((project, index) => {
    //       return (
    //         <Project
    //           key={index}
    //           index={index}
    //           title={project.title}
    //           setModal={setModal}
    //         />
    //       );
    //     })}
    //   </div>
    //   <Modal modal={modal} projects={projects} />
    // </main>
    <section className="flex justify-center items-center ">
      <div className="text-white text-9xl">Project</div>
    </section>
  );
}
