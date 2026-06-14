import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
      <h2 className='skills__title'>Technologies</h2>
      <div className='skills__groups'>
        {skills.map((group) => (
          <div key={group.category} className='skills__group'>
            <h3 className='skills__category'>{group.category}</h3>
            <ul className='skills__list'>
              {group.items.map((skill) => (
                <li key={skill} className='skills__list-item'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
