import Link from "next/link"

interface ButtonProps {
    children:React.ReactNode;
    href:string
}

export const Button = ({href,children}:ButtonProps)=>{
    return <Link href={href}>{children}</Link>
}