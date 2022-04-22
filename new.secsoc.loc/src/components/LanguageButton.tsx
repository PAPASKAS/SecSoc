import {
    NavDropdown
} from "react-bootstrap";
import {
    Link
} from "react-router-dom";
import ILocale from "~interfaces/locale";


interface IProps {
    locale: ILocale;
    router: any;
}


const LanguageButton = (props: IProps) => {
    const locales = props.locale;
    const asPath = props.router.asPath;

    const changeCookie = (lang: string) => {
        document.cookie = `lang=${lang}; path=/; domain=.${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}; secure`;
    }

    return (
        <NavDropdown title={locales.navbar.lang} className={'dropstart'}>
            {/*<Link to={asPath} locale={'ru'}>*/}
            {/*    <NavDropdown.Item onClick={() => changeCookie("ru")}>ru</NavDropdown.Item >*/}
            {/*</Link>*/}
            {/*<Link to={asPath} locale={'en'}>*/}
            {/*    <NavDropdown.Item onClick={() => changeCookie("en")}>en</NavDropdown.Item>*/}
            {/*</Link>*/}
        </NavDropdown >
    )
};

export default LanguageButton;