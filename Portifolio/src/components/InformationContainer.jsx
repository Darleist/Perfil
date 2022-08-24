import '../styles/components/informationContainer.sass'

import {
  AiFillPhone,
  AiOutlineMail,
  AiFillEnvironment
} from 'react-icons/ai'

function InformationContainer () {
  return (
    <section id='information'>
      <div className="info-card">
        <AiFillPhone id='phone-icon'/>
        <div>
          <h3>Telefonte</h3>
          <p>+595 972 619076</p>
        </div>
      </div>

      <div className="info-card">
        <AiOutlineMail id='email-icon'/>
        <div>
          <h3>E-mail</h3>
          <p>darleistrege.py@gmail.com</p>
        </div>
      </div>

      <div className="info-card">
        <AiFillEnvironment id='pin-icon'/>
        <div>
          <h3>Localização</h3>
          <p>Foz do Iguaçu / PR</p>
        </div>
      </div>
    </section>
  )
}
export default InformationContainer