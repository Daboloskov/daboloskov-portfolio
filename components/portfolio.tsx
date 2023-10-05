"use client"; // This is a client component

import React from 'react'
import SectionHeading from './sectionHeading'
import { projectsData } from '@/lib/data'
import Project from '@/components/project'
import { useSectionInView } from '@/lib/hooks';

export default function Portfolio() {
  const { ref } = useSectionInView("Portfolio", 0.2)

  return (
    <section
      ref={ref}
      id="portfolio"
      className="scroll-mt-28 mb-28"
      >
      <SectionHeading>Portfolio</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
            <React.Fragment key={index}>
                <Project {...project} />
            </React.Fragment>
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-12">
        <a href="/portfolio.pdf" download={true} className="bg-black bg-[url('/download-icon.svg')] bg-no-repeat bg-right text-white w-[16rem] h-[3.5rem] px-6 py-4 rounded-full items-center outline-none hover:scale-110 active:scale-105 transition sm:flex shadow-lg">
          Download my portfolio
        </a>
      </div>
    </section>
  )
}
