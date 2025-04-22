'use client';

import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ModeSwitcher } from './mode-switcher';
import { LanguajeSwitcher } from './languaje-switcher';
import { useTranslations } from 'next-intl'; // Importa hook

export const Navbar = () => {
  const t = useTranslations('Nav'); // Traducciones del grupo "Nav"

  return (
    <NavigationMenu className="hidden md:flex items-center gap-4">
      <NavigationMenuList className="flex items-center gap-4">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>
              {t('home')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/experience" legacyBehavior passHref>
            <NavigationMenuLink>
              {t('experience')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/work" legacyBehavior passHref>
            <NavigationMenuLink>
              {t('work')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink>
              {t('contact')}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Controles: ModeSwitcher + LanguageSwitcher */}
        <NavigationMenuItem>
          <div className="flex items-center gap-2">
            <ModeSwitcher />
            <LanguajeSwitcher />
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
