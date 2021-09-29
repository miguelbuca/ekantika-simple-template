import { ButtonHTMLAttributes } from "react"

export default interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
    icon?: string,
    backGround:  'normal' | 'transparent'
}

