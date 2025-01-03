import { Logo } from "@/components/icons/logo"
import { Container } from "./Container"
import Link from "next/link"
import { Button } from "./Button"

export const Header = () =>{
    return (
    <header className="fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]">
        <Container className="flex h-[var(--navigation-height)]">
            <Link className="flex items-center text-md" href="/">
                <Logo className="w-[1.8rem] h-[1.8rem] mr-4"/> Linear
            </Link>

            <nav className="h-full">
                <ul className="flex h-full items-center [&_a]:text-sm [&_a:hover]:text-grey [&_a]:transition-colors [&_li]:ml-6">
                    <li>
                        <Link href="#">Features</Link>
                    </li>
                    <li>
                        <Link href="#">Method</Link>
                    </li>
                    <li>
                        <Link href="#">Customers</Link>
                    </li>
                    <li>
                        <Link href="#">changelog</Link>
                    </li>
                    <li>
                        <Link href="#">Integration</Link>
                    </li>
                    <li>
                        <Link href="#">Pricing</Link>
                    </li>
                    <li>
                        <Link href="#">Company</Link>
                    </li>
                </ul>
            </nav>
            <div className="ml-auto h-full flex items-center">
                <Link className="text-sm mr-6" href="#">
                  Log in
                </Link>
                <Button href="#">
                  Sign up
                </Button>
            </div>
        </Container>
    </header>
)
}