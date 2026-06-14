import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, picture, description, resume, social } = about

  return (
    <div className='about center'>
      <div className='about__header'>
        <div className='about__intro'>
          <p className='about__eyebrow'>Software engineering, AI agents, and full-stack systems</p>

          {name && (
            <h1>
              Hi, I am <span className='about__name'>{name}</span>
            </h1>
          )}

          {role && <h2 className='about__role'>{role}</h2>}
          <p className='about__desc'>{description}</p>

          <div className='about__contact center'>
            {resume && (
              <a href={resume} className='btn-link'>
                <span type='button' className='btn btn--outline'>
                  Resume
                </span>
              </a>
            )}
            
            {social?.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link btn--text'
              >
                <LinkedInIcon /> LinkedIn
              </a>
            )}

            <a href='mailto:sxm220267@utdallas.edu' className='link btn--text'>
              <MailOutlineIcon /> Email
            </a>
          </div>
        </div>

        {picture && (
          <div className='about__portrait'>
            <img className='about__picture' src={picture} alt={`${name} profile`} />
          </div>
        )}
      </div>
    </div>
  )
}

export default About
