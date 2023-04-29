import { useRouter } from 'next/router';

import en from '/locales/en';
import fr from '/locales/fr';

export default function Nav() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav>
      <div className="flex items-center justify-between bg-gray-800 text-white px-8 md:px-16 py-2">
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">EN</option>
            <option className="text-black" value="fr">FR</option>
          </select>
      </div>
    </nav>
  );
}
