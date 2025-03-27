import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import { ModeSwitcher } from '@/components/layout/mode-switcher';
import { main } from 'framer-motion/client';
import { Hero } from '../../components/home/hero';


 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <main>
      <Hero/>
    </main>
  );
}