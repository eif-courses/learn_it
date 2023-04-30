import { useRouter } from 'next/router';

import en from '/locales/en';
import fr from '/locales/fr';
import Link from "next/link";

export default function Nav() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? en : fr;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };
  const options = [
    { value: "en", label: "English" },
    { value: "fr", label: "French" },
    { value: "es", label: "Spanish" },
  ];
  return (
    <select onChange={changeLanguage}
            defaultValue={locale} className="select">
      <option className="text-black text-xl" value="en">English</option>
      <option className="text-black text-xl" value="fr">France</option>
    </select>
  );
}
