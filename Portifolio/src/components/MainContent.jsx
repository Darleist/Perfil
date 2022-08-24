import '../styles/components/mainContent.sass'
import AboutContainer from './AboutContainer'
import InformationContainer from './informationContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'

function MainContent() {
    return (
        <main id='main-content'>
            <AboutContainer/>
            <TechnologiesContainer/>
            <ProjectsContainer/>
        </main>
    )
}
export default MainContent