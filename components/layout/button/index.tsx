import type { NextPage } from 'next'
import Props from './type'

import styled from 'styled-components'

const Button: NextPage<Props> = ({ backGround, children ,...args}:Props) => {
    return (
        <Container>
            {
                backGround === 'normal' ? (
                    <Normal {...args} >
                        {children}
                    </Normal>
                ) : (
                    <Transparent {...args}>
                        {children}
                    </Transparent>
                )
            }
        </Container>
    )
}
export default Button



const Container = styled.div`
    height: 60px;
    display: flex;
    align-items: center;

    & button{
        position: relative;
        border: none;
        outline: none;
        padding: .6rem 1.5rem !important;
        border-radius: 100px;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 5s;
        min-height: 38px !important;

        &:active{
            top: .2rem;
        }
    }
`
const Normal = styled.button`
    color: ${({ theme }) => theme?.colors?.defualtFont};
    background-color: ${({ theme }) => theme?.colors?.primary};
    cursor: pointer;
    box-shadow: 0rem .3rem 1rem rgba(0, 0, 0,.2);

    &:active{
        box-shadow: 0rem .3rem 1rem rgba(0, 0, 0,.4);
    }
`

const Transparent = styled.button`
    background-color: transparent;
    color: ${({ theme }) => theme?.colors?.primary};
    border: solid 1px ${({ theme }) => theme?.colors?.primary} !important;
`