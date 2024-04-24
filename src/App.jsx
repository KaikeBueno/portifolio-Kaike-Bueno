import { Header } from "./data/componentes/Header";
import { BannerSection } from "./data/componentes/BannerSection";
import { AboutMeSection } from "./data/componentes/AboutMeSection";
import { TechSection } from "./data/componentes/TechSection";
import { ProjectsSection } from "./data/componentes/projectsSection";
import { Footer } from "./data/componentes/Footer";
import "./data/Styles/index.css";

const App = () => {

  return (
    <>
      <Header />

      <main>
        <BannerSection />
        <AboutMeSection />
        <TechSection />
        <ProjectsSection />
      </main>

      <Footer />
    </>
  )
}

export default App
