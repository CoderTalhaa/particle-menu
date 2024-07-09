'use Client'

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import gsap from 'gsap';

const scaleAnimation = {

    initial: {scale: 0, x:"-50%", y:"-50%"},

    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},

    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}

}
export default function Modal({modal, projects}) {

    const modalContainer = useRef(null);

    const cursor = useRef(null);
  
    const cursorLabel = useRef(null);

    useEffect(()=>{
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})

        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})

        window.addEventListener('mousemove', (e) => {

            const { pageX, pageY } = e;
      
            xMoveContainer(pageX)
      
            yMoveContainer(pageY)
      

      
          })
    },[])

    const {active , index} = modal

  return (
    <motion.div ref={modalContainer}
    variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}
    className='h-[350px] w-[400px] absolute bg-white overflow-hidden pointer-events-none flex items-center justify-center'>
        <div className='h-full w-full absolute transition-all duration-500 ease-linear'
        style={{top: index * -100 + "%"}}
        >
            {
                projects.map((projects,index)=> {
                    const {src, color} = projects
                    return (
                        <div key={index} style={{backgroundColor: color}} className='h-full w-full flex items-center justify-center'>
                            <Image
                            src={`/images/${src}`}
                            width={300}
                            height={0}
                            alt='image'
                            />
                        </div>
                    )
                })
            }
        </div>
    </motion.div>
  )
}
