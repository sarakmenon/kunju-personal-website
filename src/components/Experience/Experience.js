import { useEffect, useRef } from 'react'
import { education, experience, honors } from '../../portfolio'
import './Experience.css'

const Experience = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return () => {}

    const cards = Array.from(section.querySelectorAll('.experience__card'))
    const honorsItems = Array.from(section.querySelectorAll('.honors__item'))
    const allItems = [...cards, ...honorsItems]

    if (!allItems.length) return () => {}

    if (!('IntersectionObserver' in window)) {
      allItems.forEach((i) => i.classList.add('reveal'))
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

    const timer = setTimeout(() => {
      allItems.forEach((item) => observer.observe(item))
    }, 50)

    return () => {
      clearTimeout(timer)
      section.classList.remove('is-reveal-ready')
      observer.disconnect()
    }
  }, [])

  if (!experience.length && !education.length && !honors.length) return null

  return (
    <section ref={sectionRef} className='section experience' id='experience'>
      <h2 className='section__title'>Experience & Education</h2>
      <div className='experience__layout'>
        {education.length > 0 && (
          <div className='experience__block'>
            <h3>Education</h3>
            {education.map((item) => (
              <article
                key={`${item.institution}-${item.degree}`}
                className='experience__card'
              >
                <div className='experience__card-header'>
                  <div>
                    <p className='experience__company'>{item.institution}</p>
                    <p className='experience__position'>{item.degree}</p>
                  </div>
                  <div className='experience__meta'>
                    <p>{item.period}</p>
                    <p>{item.location}</p>
                  </div>
                </div>
                <ul className='experience__details'>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        )}

        {experience.length > 0 && (
          <div className='experience__block experience__timeline'>
            <h3>Professional Experience</h3>
            {experience.map((role) => (
              <article
                key={`${role.company}-${role.position}-${role.period}`}
                className='experience__card experience__card--professional'
              >
                <div className='experience__card-header'>
                  <div>
                    <p className='experience__company'>{role.company}</p>
                    <p className='experience__position'>{role.position}</p>
                  </div>
                  <div className='experience__meta'>
                    <p className='experience__period'>{role.period}</p>
                    <p className='experience__location'>{role.location}</p>
                  </div>
                </div>
                <ul className='experience__details'>
                  {role.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                {role.stack && (
                  <ul className='experience__stack'>
                    {role.stack.map((item) => (
                      <li key={item} className='experience__stack-item'>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        )}
      </div>

      {honors.length > 0 && (
        <div className='experience__honors'>
          <h3>Honors & Awards</h3>
          <div className='honors__grid'>
            {honors.map((honor) => (
              <div key={honor} className='honors__item'>
                {honor}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

export default Experience
