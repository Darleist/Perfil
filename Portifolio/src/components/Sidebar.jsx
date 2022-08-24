import Avatar from '../img/darlei.png'
import SocialNetworks from './SocialNetworks'

import '../styles/components/sidebar.sass'




function Sidebar() {
    return (
        <aside id="sidebar">
            <img src={Avatar} alt='Darlei Strege'></img>
            <p className="title">Desenvolvedor</p>
            <SocialNetworks />

            <a className='btn' href="">
                Download currículum
            </a>

        </aside>
    )
}
export default Sidebar