import React from "react"
import {
    Link
} from "react-router-dom";
import {
    Navbar,
    Container,
    Nav
} from "react-bootstrap"
import {
    Button
} from "@mui/material"
import LanguageButton from "~components/LanguageButton"
import * as en from "~locales/en.json"
import * as ru from "~locales/ru.json"
import {useAuth} from "~hooks/auth";
import ILocale from "~interfaces/locale";


const Header = () => {
    const locale: ILocale = ru;
    const {user} = useAuth({});

    return (
        <Navbar bg="dark" variant={'dark'} expand="lg" className={'mb-4'}>
            <Container>
                <Link to={"/"}>
                    <Navbar.Brand>SecSoc</Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto" >
                        <Link to={"/home"}>
                            <Nav.Link>Home</Nav.Link>
                        </Link>
                    </Nav>
                    <Nav className={'align-items-start align-items-lg-center'}>
                        { !user ?
                            <>
                                <Link to={"/login"}>
                                    <Nav.Link>
                                        <Button variant={'contained'}>{locale.navbar.login}</Button>
                                    </Nav.Link>
                                </Link>
                                <Link to={"/register"}>
                                    <Nav.Link>
                                        <Button variant={'contained'}>{locale.navbar.register}</Button>
                                    </Nav.Link>
                                </Link>
                            </>
                        :
                            null
                        }
                        {/*<LanguageButton locale={locale} router={router} />*/}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
