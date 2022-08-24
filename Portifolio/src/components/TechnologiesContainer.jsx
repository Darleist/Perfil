import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact
} from 'react-icons/di'

import '../styles/components/technologiesContainer.sass'

const technologies = [
  {id:'html', name:'Html5', icon: <DiHtml5/> },
  {id:'css', name:'Css3', icon: <DiCss3/> },
  {id:'js', name:'JavaScript', icon: <DiJavascript/> },
  {id:'react', name:'React', icon: <DiReact/> }
]

const TechnologiesContainer = () => {
  return (
    <section className='technologies-container'>
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                <p>Nivel Junior</p>
              </div>
            </div>
            ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer