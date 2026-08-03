import { Navbar } from '@/components/navbar'
import { ScrollProgress } from '@/components/scroll-progress'
import { BackToTop } from '@/components/back-to-top'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { TechStack } from '@/components/sections/tech-stack'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Education } from '@/components/sections/education'
import { Certifications } from '@/components/sections/certifications'
import { Achievements } from '@/components/sections/achievements'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="skills">
          <Skills />
          <TechStack />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="certifications">
          <Certifications />
        </div>
        <div id="achievements">
          <Achievements />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
