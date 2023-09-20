import Intro from '@/components/intro'
import SectionDivider from '@/components/sectionDivider'
import Portfolio from '@/components/portfolio'
import Skills from '@/components/skills'
import Experience from '@/components/experience'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
