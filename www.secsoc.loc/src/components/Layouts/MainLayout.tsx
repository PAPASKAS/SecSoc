import { ReactNode } from "react"
import {
    Container
} from "react-bootstrap"
import Header from "@/components/Header";

type Props = {
    children?: ReactNode
}

export default function MainLayout({ children }: Props) {
    return (
        <>
            <Header/>
            <Container>
                {children}
            </Container>
        </>
    )
}
