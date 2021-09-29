export interface TableItem<T>{
    action: 'none' | 'edit' | 'remove' ,
    item: T
}

export default interface Props<T>{
    data: T[],
    onChange?: (e: TableItem)=> void
}