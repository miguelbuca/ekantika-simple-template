import type { NextPage } from 'next'
import Props from './type'

import { useState, useRef } from 'react'

import {
    CaretDownOutlined,
    CloseOutlined
} from '@ant-design/icons';

import styled from 'styled-components'

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
    
`

const Switch: NextPage<Props> = ({ onChecked, shape, ...props }: Props) => {

    const [checked, setChecked] = useState<boolean>(false)
    const ref = useRef<any>()

    return shape !== 'circle' ? (
        <Container>
            <input ref={ref} type="checkbox" {...props} hidden />
            <Check
                onClick={() => {
                    ref.current?.click()
                    setChecked(!checked)
                }}
            >
            </Check>
        </Container>
    ) : (
            <Circle>{ shape }</Circle>
    )
}
export default Switch