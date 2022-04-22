import {
    NavDropdown
} from "react-bootstrap"
import Link from "next/link"
import ILocale from "@/interfaces/locale";
import {NextRouter} from "next/router";


interface IProps {
    locale: ILocale;
    router: NextRouter;
}


const LanguageButton = (props: IProps) => {
    const locales = props.locale;
    const asPath = props.router.asPath;

    const changeCookie = (lang: string) => {
        document.cookie = `lang=${lang}; path=/; domain=.${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}; secure`;
    }

    return (
        <NavDropdown title={locales.navbar.lang} className={'dropstart'}>
            <Link href={asPath} locale={'ru'} passHref>
                <NavDropdown.Item onClick={() => changeCookie("ru")}>ru</NavDropdown.Item >
            </Link>
            <Link href={asPath} locale={'en'} passHref>
                <NavDropdown.Item onClick={() => changeCookie("en")}>en</NavDropdown.Item>
            </Link>
        </NavDropdown >
    )
};

export default LanguageButton;