import type { NextPage } from 'next'
import Props, { Item } from './type'

import { useState } from 'react'

import styled from 'styled-components'
import Image from 'next/image'

import {
    CaretDownOutlined,
    CloseOutlined
} from '@ant-design/icons';

const SelectArea = styled.div`
    background-color: rgba(255,255,255,0.1);
    min-width: 10rem;
    min-height: 38px !important;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 100px;
    border: solid 1px rgba(255,255,255,0.2);

    & *{
        cursor: pointer;
    }
`

const Avatar = styled.span`
    display: flex;
    align-items: center;
    padding: .2rem .15rem;
    width: 100%;

    & img{
        border-radius: 50%;
    }
    & small{
            display: flex;
            justify-content: flex-start !important;
    }
`

const Label = styled.label`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    &>*{
        display: flex;
        justify-content: center;
        align-items: center;
        color: inherit;

        &:first-child{
            flex: 1;
            padding: 0 .8rem;
        }
        &:last-child{
            margin-right: 1rem;
            font-size: 9pt;
        }
    }

`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

const List = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    list-style: none;
    z-index: 10;
    padding: .5rem;
    background-color: ${({ theme }) => theme?.colors?.bg};
    width: 100%;
    margin-top: 3rem;
    border-radius: 8px;
    color: ${({ theme }) => theme?.colors?.primary};
    box-shadow: 0 1rem 5rem 1rem rgba(0, 0, 0,.04);

    & li{
        padding: .5rem;
        cursor: pointer;
        transition: all .2s;
        border-radius: 100px;

        &:hover{
            background-color: rgba(0, 0, 0,.04);
        }
    }
`

const Select: NextPage<Props> = ({ type, placeholder ,onSelectItem,data, picture, ...props }: Props) => {
    
    const [display, setDisplay] = useState<boolean>(false)
    const [select, setSelect] = useState<Item>()

    return (
        <Container>
            <SelectArea
                onClick={() => setDisplay(!display)}
                {...props}
            >
                
                    <Avatar>
                    {picture && (<Image src={picture} width="30" height="30" />)}
                        <Label>
                        <small>{  select && type === 'multiple' ? select?.label : placeholder }</small>
                            {display ? <CloseOutlined/> : <CaretDownOutlined />}
                        </Label>
                    </Avatar>
            </SelectArea>
            <List
                onMouseLeave={() => setDisplay(false)} 
                style={{
                display: display ? "flex" : "none"
            }}>
                {
                    data?.map((item, index) => <li onClick={() => {
                        onSelectItem(item)
                        setSelect(item)
                        setDisplay(false)
                    }} key={index} >{ item?.label }</li>)
                }
            </List>
        </Container>
    )
}
export default Select