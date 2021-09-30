export type Action = 'none' | 'add' | 'edit' | 'delete'

export interface TableItem<T>{
    action: Action,
    item?: T
}

export default interface Props<T>{
    title?: string
    data: T[],
    limit: number,
    onChange: (e?: TableItem<T>[] | TableItem<T>,data?: any) => void
}

interface Marker<T>{
    type: 'select' | 'state',
    index: number,
    value: T,
    state?: boolean
}