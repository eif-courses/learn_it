import { useRouter } from 'next/router';

import en from '../../locales/en';
import fr from '../../locales/fr';
import de from "../../locales/de";
import lt from "../../locales/lt";
import it from "../../locales/it";
import bg from "../../locales/bg";


export default function Nav() {
  const router = useRouter();
  const { locale } = router;
  // const t
  //   = locale === 'en' ? en : fr;

  const t =
    locale === 'bg' ? bg :
      locale === 'en' ? en :
        locale === 'fr' ? fr :
    locale === 'de' ? de :
    locale === 'it' ? it :
      locale === 'lt' ? lt : en;


  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <select onChange={changeLanguage}
            defaultValue={locale} className="select">
      <option className="text-black text-xl" value="bg">български</option>
      <option className="text-black text-xl" value="en">english</option>
      <option className="text-black text-xl" value="fr">français</option>
      <option className="text-black text-xl" value="de">deutsch</option>
      <option className="text-black text-xl" value="it">italiano</option>
      <option className="text-black text-xl" value="lt">lietuvių</option>
    </select>
  );
}
