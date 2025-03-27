'use client';

import {useRouter, usePathname} from '@/i18n/navigation';
import {useLocale} from 'next-intl';
import {Languages} from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

export const LanguajeSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale(); // Idioma actual

  const handleChangeLocale = (newLocale: string) => {
    router.push(pathname, {locale: newLocale});
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1 px-3 py-1 rounded-md text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <Languages size={16} />
          {locale.toUpperCase()}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleChangeLocale('es')}>
          🇨🇷 Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleChangeLocale('en')}>
          🇺🇸 English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
