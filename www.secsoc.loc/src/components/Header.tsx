import React from "react"
import Link from "next/link"
import {
    Navbar,
    Container,
    Nav
} from "react-bootstrap"
import {
    Button
} from "@mui/material"
import LanguageButton from "@/components/LanguageButton"
import { useRouter } from "next/router"
import * as en from "@/locales/en.json"
import * as ru from "@/locales/ru.json"


const Header = () => {
    const router = useRouter();
    const locale = router.locale === "en" ? en : ru;

    return (
        <Navbar bg="dark" variant={'dark'} expand="lg" className={'mb-4'}>
            <Container>
                <Link href={"/"} passHref>
                    <Navbar.Brand>SecSoc</Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="me-auto" >
                        <Link href={"/home"} passHref>
                            <Nav.Link>Home </Nav.Link>
                        </Link>
                    </Nav>
                    <Nav className={'align-items-start align-items-lg-center'}>
                        <Link href={"/login"} passHref>
                            <Nav.Link>
                                <Button variant={'contained'}>{locale.navbar.login}</Button>
                            </Nav.Link>
                        </Link>
                        <Link href={"/register"} passHref>
                            <Nav.Link>
                                <Button variant={'contained'}>{locale.navbar.register}</Button>
                            </Nav.Link>
                        </Link>
                        <LanguageButton locale={locale} router={router} />
                        {/* <NavDropdown title={locale.navbar.lang} className={'dropstart'}>
                            <Link href={router.asPath} locale={'ru'} passHref>
                                <NavDropdown.Item>ru</NavDropdown.Item>
                            </Link>
                            <Link href={router.asPath} locale={'en'} passHref>
                                <NavDropdown.Item>en</NavDropdown.Item>
                            </Link>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header
