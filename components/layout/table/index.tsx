import type { NextPage } from 'next'

import { useEffect, useState } from 'react'

import Props, { Marker, Action } from './type'

import styled from 'styled-components'
import Button from '../button'
import Input from '../input'
import Select from '../select'
import Switch from '../switch'


import {
    LeftOutlined,
    RightOutlined,
    DeleteOutlined,
    EditOutlined
} from '@ant-design/icons';


const Table: NextPage<Props<Regions>> = ({ data , limit, title, onChange }: Props<Regions>) => {
    
    const [collumn, setCollumn] = useState<string[]>()
    
    const [sData, setSData] = useState<Regions[][]>([])
    
    const [pag, setPag] = useState<number>(0)

    const [ filter, setFilter ] = useState<string>('')

    const [ action, setAction ] = useState<Action>('none')
    
    const [select, setSelect] = useState<any[]>([])
    const [marked, setMarked] = useState<any[]>([])
    
    const [ selectList, setSelectList ] = useState<object>({})

    useEffect(() => {
        
        if(!(data?.length>0))return

        const cols = Object.keys(data[0])?.map(key => key)
        
        cols.push('status')

        setCollumn(cols)

    }, [data])

    useEffect(() => {

        let dataFil = data.filter(
            item => JSON.stringify(item).toLowerCase().indexOf(filter.toLowerCase()) > -1)

        let temp: Regions[] = [];

        let _data: Regions[][] = [];

        let pos: number = limit

        let mode: Regions[] = [{
            idRegion: '',
            nameRegion: ''
        },...dataFil]
        

        mode.map((item, index) => {
            
            temp.push(item)

            if (((index % pos) == 0)) {
                if (index !== 0) _data.push(temp)
                temp = []
            } else if(dataFil.length-limit*_data.length<limit) {
                if (index === dataFil.length-1) {
                    _data.push(temp)
                } 
            }
        })

        setSData(_data)
        setPag(0)
        
    }, [data, limit, filter])
    

    useEffect(() => {
        const dataClean: any = {}

        select.filter(item => {
            if (item && item?.value) dataClean[item?.index] = item?.data
            return null
        })

        console.log('clean', dataClean)
        
        setSelectList(dataClean)

    }, [select])


    const mark = ({index , type, state, value }: Marker<Regions>) =>{
        if (type === 'select') {
            const selItens = [...select]
            selItens[index] = {index,value: state, data: value}

            setSelect(selItens)
        } else {
            const markedItens = [...marked]
            markedItens[index] = {value: state}

            setMarked(markedItens)
        }
    }


    return (
        <Container>
            <div>
                <Top>
                    <div>
                        <div>
                            <Switch onChecked={e => {
                                
                            }} shape='circle' />
                        </div>
                        <Select
                            style={{
                                border: 'solid 1px rgba(0,0,0,.2)',
                                padding: '.3rem 0',
                                width: '12rem'
                            }}
                                placeholder='Ações'
                            data={[
                                    {
                                        label: 'Ações',
                                        value: 'none'
                                    },
                                    {
                                        label: 'Editar',
                                        value: 'edit'
                                    },
                                    {
                                        label: 'Eliminar',
                                        value: 'delete'
                                    }
                                ]}
                                type={'multiple'}
                            onSelectItem={({ value }) => setAction(value)}
                        />
                        <div>
                            <Button backGround='transparent' onClick={() => {

                                if (action !== 'none') {
                                    onChange({
                                        action
                                    }, selectList);
                                }

                            }}>Aplicar</Button>
                        </div>
                    </div>
                    <LeftSide>
                        <Input onChange={e => {
                            setFilter(e.target?.value)
                        }} isSearch placeholder='Buscar' />
                        <Button backGround='normal' onClick={() => onChange({
                            action:'add'
                        })} >Nova { title }</Button>
                    </LeftSide>
                </Top>
                <div>
                    <TableContainer>
                        <thead>
                            <tr>
                                <th/>
                                {
                                    collumn?.map((col, index) => <th key={index}>{col?.replace(/([A-Z])/g, ' $1')}</th>)
                                }
                                <th/>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sData[pag]?.map((item, index) => {
                                    
                                    const { idRegion, nameRegion, state } = item

                                    //Object.keys(selectList).includes(`${index}`)

                                    return (
                                        <tr key={index} attr-state={!!marked[index]?.value ? "true" : "false"} attr-border={index+1===sData[pag]?.length ? 'none' : null} >
                                            <td><Switch onChecked={e => {
                                                mark({
                                                    index: index * (pag+1),
                                                    type: 'select',
                                                    value: item,
                                                    state: e
                                                })
                                            }} shape='circle' /></td>
                                            <td>{ idRegion }</td>
                                            <td>{ nameRegion }</td>
                                            <td><Switch onChecked={e => {
                                                mark({
                                                    index,
                                                    type: 'state',
                                                    value: item,
                                                    state: e
                                                })
                                            }} /></td>
                                            <td>
                                                <ActionTable>
                                                    <button onClick={() => {
                                                        onChange({
                                                            action: 'edit',
                                                            item 
                                                        })
                                                    }}>
                                                        <EditOutlined/>
                                                    </button>
                                                    <button onClick={() => {
                                                        onChange({
                                                            action: 'delete',
                                                            item 
                                                        })
                                                    }}>
                                                        <DeleteOutlined/>
                                                    </button>
                                                </ActionTable>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </TableContainer>
                </div>
            </div>
            <Footer>
                <div>
                    <small>Visulaizando { pag+1 } - { sData.length } de { data.length } { title }</small>
                </div>
                <div>
                    <Pag onClick={()=>setPag(prev=>prev-1>-1?prev-1:prev)}>
                        <LeftOutlined/>
                    </Pag>
                    {
                        sData.map((_, index) => (
                            <Pag style={
                                index === pag ? {
                                    backgroundColor: 'hsl(249deg 100% 66%)',
                                    color: '#fff'
                                }
                             : {}} onClick={() => setPag(index)} key={index}>
                                <small>{index + 1}</small>
                            </Pag>
                        ))
                    }
                    <Pag onClick={()=>setPag(prev=>prev+1<sData.length?prev+1:prev)}>
                        <RightOutlined/>
                    </Pag>
                </div>
            </Footer>
        </Container>
    )
}
export default Table



const Container = styled.div`
    display: flex;
    flex-direction: column;
    &>div:first-child{
        position: relative;
        border-radius: 24px;
        background-color: ${({theme})=>theme?.colors?.bg};
        box-shadow: 0 1rem 5rem 1rem rgba(0, 0, 0,.04);
        min-height: 35vh;
        padding: 1rem;
        flex: 1;
    }
`

const Top = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;

    &>div{
        display: flex;

        &:first-child{
            align-items: center;
            flex: 1;

            &>div:nth-child(2){
                margin: 0 1rem;
            }
        }
    }
`

const LeftSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    &>div:first-child{
        margin-right: 1rem;
    }
`

const TableContainer = styled.table`
    width: 100%;
    font-size: 8pt !important;
    border-collapse: collapse;
    color: ${({ theme }) => theme?.colors?.primary} !important;

    & thead{

        & th{
            text-transform: uppercase;
            padding: .5rem;
            min-height: 38px !important;
            text-align: start !important;

            &:first-child{
                width: 50px !important;
            }
            &:last-child{
                width: 100px;
            }
            
            &:nth-child(2){
                border-radius: 8px 0 0 8px;
            }
            &:last-child{
                border-radius: 0 8px 8px 0;
            }

            &:not(:first-child){
                background-color: ${({ theme }) => theme?.colors?.darTansparent} !important;
            }
        }
    }
    & tbody{
        & td{
            text-align: start !important;
            padding: 1rem .5rem;
            color: #3e3e3e;
            font-size: 12pt !important;
        }
        & td:not(:first-child){
            border-bottom: solid 1px ${({ theme }) => theme?.colors?.darTansparent} !important;
        }

        & tr[attr-border='none'] td{
            border: none !important;
        }
        & tr[attr-state='false'] td{
            color: #8e8e8e !important;
        }
    }
`

const Footer = styled.div`
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;

    &>div{
        display: flex;
        flex-direction: row;

        &:first-child{
            flex: 1;
        }
    }
`

const Pag = styled.button`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    transition: all .3s;

    &:not(:last-child){
        margin-right: .5rem;
    }
`

const ActionTable = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    &>button{
        border-radius: 50%;
        border: none;
        height: 30px;
        width: 30px;
        background-color: ${({ theme }) => theme?.colors?.darTansparent};
        transition: all .3s;
        cursor: pointer;

        &:hover{
            background-color: ${({ theme }) => theme?.colors?.primary};
            color: ${({ theme }) => theme?.colors?.defualtFont} !important;
        }
        
        &:not(:last-child){
            margin-right: .5rem;
        }

        &:last-child{
            color: red;
        }
    }
`
