import { InputHTMLAttributes } from "react"

export default interface Props extends InputHTMLAttributes<HTMLInputElement>{
    isSearch?: boolean | false
}

