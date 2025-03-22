import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';
import { ModeToggle } from '@/components/layout/mode-toggle';


 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
      <h1 className="font-mono not-[]:text-lg">Hola mundo</h1>
      <h1 className="font-primary text-lg border border-red-500">Hola mundo borde rojo</h1>

      
      <ModeToggle />
    </div>
  );
}