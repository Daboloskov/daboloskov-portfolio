"use client"; // This is a client component

import React from 'react'
import SectionHeading from './sectionHeading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Skills() {
  const { ref } = useSectionInView("Skills")

  return (
    <section
        ref={ref}
        id="skills"
        className="mb-28 max-w-[53rem] scroll-mt-28 text-left sm:mb-40"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap bg-center gap-2 text-lg text-gray-500">
        {skillsData.map((skill, index) => (
            <li key={index} className="m-1 p-4">
                <div className="flex items-center">
                    <div className="w-6 h-6 mr-2">
                        <Image src={skill.icon} alt={`${skill.name} Icon`} width={24} height={24} />
                    </div>
                    <span>{skill.name}</span>
                </div>
                <div className="relative bg-white mt-2 h-2 w-[22rem] rounded-full shadow-[0_3px_20px_-3px_rgba(0,0,0,.6)]">
                    <motion.div
                        // variants={fadeInAnimationVariants}
                        initial={{ width: "0%" }} // Initial width of 0%
                        whileInView={{ width: `${skill.xp}%` }} // Animate the width
                        transition={{
                          duration: 1, // Adjust animation duration as needed
                          ease: "easeOut", // Adjust easing function as needed
                        }}
                        viewport={{
                            once: true,
                        }}

                        style={{ width: `${skill.xp}%` }}
                        className="absolute h-full bg-black rounded-full"
                    >
                    </motion.div>
                </div>
            </li>
        ))}
      </ul>
    </section>
  )
}
