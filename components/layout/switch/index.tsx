import type { NextPage } from 'next'
import Props from './type'

import { useState, useRef , useEffect } from 'react'

import {
    CheckOutlined
} from '@ant-design/icons';

import styled from 'styled-components'


const Switch: NextPage<Props> = ({ onChecked, shape, ...props }: Props) => {

    const [checked, setChecked] = useState<boolean>(false)
    const ref = useRef<any>()

    useEffect(() => {
        onChecked(checked)
    }, [checked])

    return shape !== 'circle' ? (
        <Container>
            <input ref={ref} type='checkbox' {...props} hidden />
            <Check
                onClick={() => {
                    ref.current?.click()
                    setChecked(!checked)
                }}
            >
            </Check>
        </Container>
    ) : (
            <Circle
                onClick={() => {
                    ref.current?.click()
                    setChecked(!checked)
                }}
            >
                <input ref={ref} type="checkbox" {...props} hidden />
                <CheckIcon>
                    <CheckOutlined/>
                </CheckIcon>
            </Circle>
    )
}
export default Switch


const Container = styled.div`
    &>input[type='checkbox']:checked ~ div{
        background-color: ${({ theme }) => theme?.colors?.primaryLight};
        
        &::after{
            left: 100% !important;
            background-color: ${({ theme }) => theme?.colors?.primary};
        }
    }
`

const Check = styled.div`
    position: relative;
    width: 20px;
    height: 10px;
    background-color: ${({theme})=>theme?.colors?.darTansparent};
    border-radius: 100px;
    cursor: pointer;
    transform: all 2s;

    &::after{
        position: absolute;
        content: '';
        height: 15px;
        width: 15px;
        top: 50%;
        left: 0;
        transform: translate(-50%,-50%);
        border-radius: 50%;
        background-color: ${({ theme }) => theme?.colors?.bg};
        box-shadow: 0rem .3rem 1rem rgba(0, 0, 0,.2);
        transition: all .3s;
    }
`

const Circle = styled.div`
    display: flex;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: solid 1px rgba(0,0,0,.2);
    cursor: pointer;

    &>input[type='checkbox']:checked ~ div{
        background-color: ${({ theme }) => theme?.colors?.primary} !important;
        transform: rotate(0deg);

        &>*{
            color: ${({ theme }) => theme?.colors?.defualtFont} !important;
        }
    }
`

const CheckIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin: .1rem;
    border-radius: 50%;
    background-color: transparent !important;
    transition: all .2s;
    transform: rotate(90deg);

    &>*{
        color: transparent;
        font-size: 8pt !important;
    }
`