import { StyleHTMLAttributes } from "react";

export interface Item{
    value: any,
    label: string | number | JSX.Element
}
export default interface Props extends StyleHTMLAttributes<HTMLDivElement>{
    placeholder: string
    data: Item[],
    type: 'multiple' | 'single',
    onSelectItem: (e: Item ) => void,
    picture?: string,
}
