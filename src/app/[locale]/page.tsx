import {useTranslations} from 'next-intl';
import { Hero } from '../../components/home/HeroSection';
import { Timeline } from '@/components/experience/ExperienceSection';
import { About } from '@/components/about/AboutSection';


 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <main>
      <Hero/>
      <Timeline/>
      <About/>
    </main>
  );
}