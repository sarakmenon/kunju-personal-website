import { useEffect, useRef } from 'react'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return () => {}

    const cards = Array.from(section.querySelectorAll('.project'))

    if (!cards.length) return () => {}

    if (!('IntersectionObserver' in window)) {
      cards.forEach((c) => c.classList.add('reveal'))
      return () => {}
    }

    section.classList.add('is-reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    // slight delay to ensure elements are laid out before observing
    const timer = setTimeout(() => {
      cards.forEach((card) => observer.observe(card))
    }, 50)

    return () => {
      clearTimeout(timer)
      section.classList.remove('is-reveal-ready')
      observer.disconnect()
    }
  }, [])

  if (!projects.length) return null

  return (
    <section ref={sectionRef} id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
