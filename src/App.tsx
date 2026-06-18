import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProjectsSection from './components/ProjectsSection';
import CodeShowcase from './components/CodeShowcase';
import StackSection from './components/StackSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Navigation />
      <main className="relative w-full bg-ink-950" style={{ overflowX: 'clip' }}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <CodeShowcase />
        <StackSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </>
  );
};

export default App;