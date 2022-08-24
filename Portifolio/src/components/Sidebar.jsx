import Avatar from '../img/darlei.png'
import SocialNetworks from './SocialNetworks'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'


function Sidebar() {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt='Darlei Strege'></img>
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />
            <InformationContainer/>
            
            <a className='btn' href="">
                Download currículum
            </a>

        </aside>
    )
}
export default Sidebar