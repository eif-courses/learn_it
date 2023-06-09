import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import {useRouter} from "next/router";
import Nav from "~/components/nav";
import bg from "../../locales/bg";
import en from "../../locales/en";
import fr from "../../locales/fr";
import de from "../../locales/de";
import it from "../../locales/it";
import lt from "../../locales/lt";

export const Header = () => {
  const { data: sessionData } = useSession();

  const router = useRouter();
  const { locale } = router;
  const t =
    locale === 'bg' ? bg :
      locale === 'en' ? en :
        locale === 'fr' ? fr :
          locale === 'de' ? de :
            locale === 'it' ? it :
              locale === 'lt' ? lt : en;
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="gap-2 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/" className={router.pathname == "/" ? "active" : ""}>
              Home
            </Link></li>
            <li><Link href="/contacts" className={router.pathname == "/contacts" ? "active" : ""}>Contacts</Link></li>
            <li><Link href="/platform" className={router.pathname == "/platform" ? "active" : ""}>{t.platform}</Link></li>
            <Nav/>

          </ul>
        </div>
        <img src="/logo_pirmas.png" width="64px" height="64px"/>
        <a className="btn btn-ghost normal-case text-xl">{t.title}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 py-4 gap-2">
          <li><Link href="/" className={router.pathname == "/" ? "active" : ""}>
              Home
          </Link></li>
          <li><Link href="/contacts" className={router.pathname == "/contacts" ? "active" : ""}>Contacts</Link></li>
          <li><Link href="/platform" className={router.pathname == "/platform" ? "active" : ""}>{t.platform}</Link></li>
          <Nav/>
        </ul>
      </div>
      <div className="navbar-end">

        <div className="dropdown-end dropdown">
          {sessionData?.user ? (
            <div><label
              tabIndex={0}
              className="btn-ghost btn-circle avatar btn"
            >
              <div className="w-10 rounded-full">
                <img src={sessionData?.user?.image ?? ""} width={64} height={64} alt={sessionData?.user?.name ?? ""} />
              </div>
            </label>
              <ul tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li><a>Settings</a></li>
                <li onClick={() => void signOut()}><a>Logout</a></li>
              </ul>
            </div>
          ) : (
            <button
              className="btn-ghost rounded-btn btn"
              onClick={() => void signIn()}>
              Sign in
            </button>
          )
          }
        </div>
      </div>
    </div>
  );
};
