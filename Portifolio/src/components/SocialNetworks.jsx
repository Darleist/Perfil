import {FaLinkedin, FaFacebook, FaInstagram, FaGithub} from 'react-icons/fa'

import '../styles/components/SocialNetworks.sass'

const socialNetworks =[
    {name: 'linkedin', icon: <FaLinkedin/>, url:'https://www.linkedin.com/in/darlei-strege-7b3303231/'},
    {name: 'github', icon: <FaGithub/>, url:'https://github.com/Darleist'},
    {name: 'facebook', icon: <FaFacebook/>, url:'https://www.facebook.com/darlei.epaulinhah'},
    {name: 'instagram', icon: <FaInstagram/>, url:'https://www.instagram.com/darleist/'}
]

function SocialNetworks() {
    return (
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.url} className='social-btn' id={network.name} key={network.name} target="_blank">
                    {network.icon}
                </a>
            ))}
        </section>
    )
}
export default SocialNetworks