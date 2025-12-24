import AboutMeMain from './components/AboutMeSection/AboutMeMain'
import ContactMeMain from './components/ContactMeSection/ContactMeMain'
import ExperienceMain from './components/ExperienceSection/ExperienceMain'
import FooterMain from './components/Footer/FooterMain'
import HelperSection from './components/HelperSection'
import HeroGradient from './components/HeroSection/HeroGradient'
import HeroMain from './components/HeroSection/HeroMain'
import SubHeroSection from './components/HeroSection/SubHeroSection'
import Navbar from './components/navbar/Navbar'
import ProjectsMain from './components/ProjectsSection/ProjectsMain'
import SkillsMain from './components/SkilssSection/SkillsMain'
import SubSkills from './components/SkilssSection/SubSkills'

function App() {
  return(
    <main className="font-body overflow-hidden">
      <Navbar />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
    </main>
  )
}

export default App
