export interface TableItem<T>{
    action: 'none' | 'edit' | 'remove' ,
    item: T
}

export default interface Props<T>{
    title?: string
    data: T[],
    limit: number,
    onChange?: (e: TableItem<T>[] | TableItem<T>) => void
}