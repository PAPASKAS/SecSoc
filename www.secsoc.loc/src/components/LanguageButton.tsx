import {
    NavDropdown
} from "react-bootstrap"
import Link from "next/link"


const LanguageButton = (locale: any, router: any) => {
    const locales = locale.locale;
    const asPath = locale.router.asPath;

    const changeCookie = (lang: string) => {
        document.cookie = `lang=${lang}; path=/; domain=.${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}; secure`;
    }

    return (
        <NavDropdown title={locales.navbar.lang} className={'dropstart'}>
            <Link href={asPath} locale={'ru'} passHref>
                <NavDropdown.Item onClick={() => changeCookie("ru")}>ru</NavDropdown.Item >
            </Link>
            <Link href={asPath} locale={'en'} passHref>
                <NavDropdown.Item onClick={() => changeCookie("ru")}>en</NavDropdown.Item>
            </Link>
        </NavDropdown >
    )
};

export default LanguageButton;