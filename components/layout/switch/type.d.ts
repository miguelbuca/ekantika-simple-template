import { StyleHTMLAttributes } from "react";

export default interface Props extends StyleHTMLAttributes<HTMLInputElement>{
    onChecked: (e: boolean) => void,
    shape?: 'circle' | 'normal'
}
