import ScrollProgress from "./components/ui/ScrollProgress";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import EmbeddedProjectsSection from "./components/EmbeddedProjectsSection";
import AIProjectsSection from "./components/AIProjectsSection";
import SoftwareJourneySection from "./components/SoftwareJourneySection";
import SoftwareProjectsSection from "./components/SoftwareProjectsSection";
import TeachingSection from "./components/TeachingSection";
import FilmmakingSection from "./components/FilmmakingSection";
import LeadershipSection from "./components/LeadershipSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="bg-cream">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <EmbeddedProjectsSection />
        <AIProjectsSection />
        <SoftwareJourneySection />
        <SoftwareProjectsSection />
        <TeachingSection />
        <FilmmakingSection />
        <LeadershipSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
