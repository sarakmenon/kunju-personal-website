import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const getCategoryClass = (category = '') =>
  category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const ProjectContainer = ({ project }) => (
  <div className={`project project--${getCategoryClass(project.category)}`}>
    <div className='project__header'>
      {project.category && (
        <span className='project__category'>{project.category}</span>
      )}
    </div>

    {project.image && (<img
    src={
      project.image.startsWith("http")
        ? project.image
        : `${process.env.PUBLIC_URL}/images/${project.image}`
    }
    alt={`${project.name} screenshot`}
    style={{ width: '100%', objectFit: 'cover' }}
    />
    )}

    <div className='project__body'>
      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={item} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className='project__links'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
          >
            <LaunchIcon />
          </a>
        )}
      </div>
    </div>
  </div>
)

export default ProjectContainer
