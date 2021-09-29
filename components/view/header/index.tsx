import { memo } from 'react'
import type { NextPage } from 'next'

import Image from 'next/image'

import Select from '../../layout/select'

import {
    BellOutlined,
    LogoutOutlined
} from '@ant-design/icons';

import styled from 'styled-components'

const Container = styled.header`
    background-color: ${({theme})=>theme?.colors?.primary};
    &>div{
        display: flex;
        flex-direction: row;
        align-items: center;
        color: ${({theme})=>theme?.colors?.defualtFont};
        margin: .5rem ${({theme})=>theme?.margin?.default} .5rem 1rem;
    }
    &>div>div:first-child{
        flex: 1;
    }
`

const RigthSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;


    &>*:first-child{
        position: relative;
        margin-right: 1rem;
        font-size: 14pt;
        transform: rotate(30deg);
        cursor: pointer;

        &::after{
            content: '';
            position: absolute;
            height: 7px;
            width: 7px;
            background-color: ${({ theme }) => theme?.colors?.point};
            border-radius: 50%;
            right: .05rem;
            top: .2rem;
        }
    }
`
const GoOut = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    &>*:first-child{
        margin-right: .5rem;
    }
`

const Header: NextPage = () => {
    return (
        <Container>
            <div>
                <div>
                    <a href="#">
                        <Image src='/image/logo.png' width="93" height="27" alt="ekantika-icon" />
                    </a>
                </div>
                <RigthSide>
                    <div>
                        <BellOutlined/>
                    </div>
                    <div>
                        <Select
                            placeholder="Lorem Ipsum Dolor"
                            data={[
                                {
                                    label: 'Profile',
                                    value: 0
                                },
                                {
                                    label: (
                                        <GoOut>
                                            <LogoutOutlined/>
                                            <label>Logout</label>
                                        </GoOut>
                                    ),
                                    value: 1
                                }
                            ]}
                            type={'single'}
                            picture={'/image/avatar.png'}
                            onSelectItem={(e) => {
                                console.log(e)
                            }}
                        />
                    </div>
                </RigthSide>
            </div>
        </Container>
    )
}
export default memo(Header)