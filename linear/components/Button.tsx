import Link from "next/link"
import {cva, VariantProps} from "class-variance-authority"
interface ButtonProps extends VariantProps< typeof buttonClasses> {
    children:React.ReactNode;
    href:string
}

const buttonClasses = cva("rounded-full", {
    variants:{
        variant:{
            primary:"bg-primary-gradient",
            secondary:"",
            tertiary:"",
        },
        size:{
            small:"text-xs",
            medium:"text-sm",
            large:"text-md",
        }
    },
    defaultVariants:{
        variant:"primary",
        size:"medium",
    },
})

export const Button = ({href,children, variant, size}:ButtonProps)=>{
    return <Link className={buttonClasses({variant, size})} href={href}>{children}</Link>
} 