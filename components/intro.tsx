"use client"; // This is a client component

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5)
  
  return (
    <section
      ref={ref}
      id="home"
      className="mb-20 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      >
      <div className="flex items-center justify-center">
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                type: "tween",
                duration: 0.2,
                }}
            >
                <Image
                    src="/alex-portrait-emoji.png"
                    alt="Alexandre DAVID's portrait"
                    width="235"
                    height="298"
                    quality="95"
                    priority={true}
                    className="h-[298] w-24 object-cover"
                />
            </motion.div>
            <div className="absolute -bottom-6 -right-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                    type: "spring",
                    stiffness: 125,
                    delay: 0.1,
                    duration: 1,
                    }}
                  >
                    <Image
                        src="/alex-thumb-up-emoji.png"
                        alt="Alexandre DAVID's thumb up"
                        width="111"
                        height="142"
                        quality="95"
                        priority={true}
                        className="h-[142] w-10 object-cover"
                    />
                </motion.div>
            </div>
        </div>
      </div>

      <motion.h1 className="mb-10 mt-[3rem] px-4 text-3xl text-neutral-800 font-medium !leading-[1.5] sm:text-2xl font-[Cambria]"
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.4
      }}
      >
        I'm Alexandre David, a designer and entrepreneur based in Paris.
        I'm passionate about UX/UI, Product Design, Graphic Design, Technology, Management and Bitcoin.
        I am an andragogue who likes to share my knowledge and skills.
      </motion.h1>

      <motion.div className="flex flex-row items-stretch justify-center gap-4 px-4 sm:gap-6"
        initial={{ opacity: 0, y: 140 }}
        animate={{ opacity:1, y: 0 }}
        transition={{
            delay: 0.8
        }}
      >
        <Link href="#contact" className="mail-icon bg-black bg-[url('/mail-icon.svg')] text-white indent-96 overflow-hidden w-16 h-16 px-4 py-4 rounded-full flex items-center outline-none hover:scale-110 active:scale-105 transition shadow-lg">
            Let's keep in touch by email
        </Link>
        <a href="https://www.linkedin.com/in/daboloskov/" target="_blank" className="bg-black bg-[url('/linkedin-icon.svg')] text-white indent-96 overflow-hidden w-16 h-16 px-4 py-4 rounded-full flex items-center outline-none hover:scale-110 active:scale-105 transition shadow-lg">
            Visit my linkedin profile
        </a>
        <a href="https://twitter.com/daboloskov" target="_blank" className="bg-black bg-[url('/twitter-x-icon.svg')] text-white indent-96 overflow-hidden w-16 h-16 px-4 py-4 rounded-full flex items-center outline-none hover:scale-110 active:scale-105 transition shadow-lg">
            Find out what I'm saying on Elon Musk's X
        </a>
        <a href="https://dribbble.com/daboloskov" target="_blank" className="bg-black bg-[url('/dribbble-icon.svg')] text-white indent-96 overflow-hidden w-16 h-16 px-4 py-4 rounded-full flex items-center outline-none hover:scale-110 active:scale-105 transition shadow-lg">
            Discover my art on Dribbble
        </a>
      </motion.div>

    </section>
  )
}
