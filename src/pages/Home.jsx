import Hero     from '../components/Hero.jsx'
import About    from '../components/About.jsx'
import Projects from '../components/Projects.jsx'
import Training from '../components/Training.jsx'
import Skills   from '../components/Skills.jsx'
import Contact  from '../components/Contact.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Training />
      <Skills />
      <Contact />
    </>
  )
}