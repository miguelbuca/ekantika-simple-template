import type { NextPage } from 'next'
import Props from './type'

import styled from 'styled-components'


import {
    SearchOutlined
} from '@ant-design/icons';



const Container = styled.div`
    position: relative;

    &>*:first-child{
        position: absolute;
        top: 50%;
        left: 1.3rem;
        transform: translate(-50%,-50%);
    }

    & input{
        border: none;
        min-width: 15rem;
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 100px;
        border: solid 1px rgba(255,255,255,0.2);
        min-height: 38px !important;
        background-color: rgba(0,0,0,0.04);
        outline: none;
        padding: .6rem 2.5rem !important;
    }
`


const Input: NextPage<Props> = ({ isSearch , ...args }: Props) => {
    return (
        <Container>
            {isSearch && <SearchOutlined/>}
            <input {...args} />
        </Container>
    )
}
export default Input