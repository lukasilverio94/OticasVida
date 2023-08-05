import Banner from '../Banner/Banner';
import SectionProducts from '../SectionProducts/SectionProducts';
import AboutSection from '../AboutSection/AboutSection';
import ContactSection from '../ContactSection/ContactSection';

export default function Content(){
  return(
    <main>
      <Banner/>
      <SectionProducts/>
      <AboutSection/>
      <ContactSection/>
    </main>
  )
}