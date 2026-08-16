import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import LaunchIcon from '@material-ui/icons/Launch'
import { certifications } from '../../portfolio'
import './Certifications.css'

const Certifications = () => {
  if (!certifications.length) return null

  return (
    <section className='section certifications' id='certifications'>
      <h2 className='section__title'>Certifications</h2>

      <div className='certifications__grid'>
        {certifications.map((certification) => (
          <article
            className={`certification certification--${certification.brand}`}
            key={certification.name}
          >
            <div className='certification__brand' aria-hidden='true'>
              {certification.brand === 'databricks' ? (
                <>
                  <span className='certification__databricks-mark'>◇</span>
                  <span className='certification__databricks'>databricks</span>
                  <span className='certification__academy'>Academy</span>
                </>
              ) : (
                <>
                  <span className='certification__aws'>aws</span>
                  <span className='certification__smile' />
                </>
              )}
            </div>

            <div className='certification__content'>
              <div className='certification__heading'>
                <div>
                  <p className='certification__issuer'>{certification.issuer}</p>
                  <h3 className='certification__name'>{certification.name}</h3>
                </div>
                <span className='certification__status'>
                  <CheckCircleOutlineIcon aria-hidden='true' />
                  {certification.status}
                </span>
              </div>

              <dl className='certification__dates'>
                <div>
                  <dt>Issued</dt>
                  <dd>{certification.issued}</dd>
                </div>
                <div>
                  <dt>Expires</dt>
                  <dd>{certification.expires}</dd>
                </div>
                {certification.credentialId && (
                  <div>
                    <dt>Credential ID</dt>
                    <dd>{certification.credentialId}</dd>
                  </div>
                )}
              </dl>

              {certification.certificate && (
                <a
                  className='btn btn--outline certification__link'
                  href={certification.certificate}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Show credential
                  <LaunchIcon aria-hidden='true' />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Certifications
