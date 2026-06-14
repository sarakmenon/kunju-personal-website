import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <p className='contact__cta'>Interested in building AI-powered software with me?</p>
      <div className='contact__links'>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
        {contact.linkedin && (
          <a href={contact.linkedin} className='btn-link'>
            <span type='button' className='btn btn--outline'>
              LinkedIn
            </span>
          </a>
        )}
      </div>
      {contact.location && <p className='contact__meta'>{contact.location}</p>}
    </section>
  )
}

export default Contact
