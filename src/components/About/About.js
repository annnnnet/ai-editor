import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, start } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>An {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {start && (
          <a href={start}>
            <span type='button' className='btn btn--outline'>
            Start
            </span>
          </a>
        )}
      </div>
    </div>
  )
}

export default About
