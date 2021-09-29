import type { NextPage } from 'next'
import { useState, useEffect } from 'react'

import {
    HomeOutlined,
    MessageOutlined,
    ShopOutlined,
    UserOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';

import Link from 'next/link'

import Route from 'next/router'

import Porps from './type'

import styled from 'styled-components'

const Container = styled.aside`
    display: flex;
    width: 45px;
    background-color: ${({theme})=>theme?.colors?.bg};
    box-shadow: 0 1rem 1rem rgba(0, 0, 0,.04);
    
    &>nav{
        flex: 1;
        display: flex;
    }
`

const Menu = styled.ul`
    margin-top: 0 !important;
    height: 100%;
    padding: 0;
    list-style: none;

    & li{
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: .5rem;
        color: inherit;
        width: 45px;
    }
    & li::before{
        position: absolute;
        content: '';
        left: -50px;
        top: 0;
        height: 100%;
        border-radius: 0 100px 100px 0;
        background-color: transparent;
        transition: all .3s;
    }
    & li[attr-active="true"] span{
        color: ${({theme})=>theme?.colors?.defualtFont} !important;
    }
    & li[attr-active="true"]::before{
        left: 0;
        width: 50px;
        background-color: ${({theme})=>theme?.colors?.primary};
    }
    & li[attr-active="false"]::before{
        left: -50px;
        width: 50px;
        background-color: ${({theme})=>theme?.colors?.primary};
    }
    & a,
    & a:link,
    & a:visited{
        flex: 1;
        padding: .5rem .8rem;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    & span{
        font-size: 16pt;
        transition: all .5s;
    }
`

const Aside: NextPage<Porps> = ({ getRoute }:Porps) => {

    const [active, setActive] = useState<number>(0)

    const menu: iRoute[] = [
        {
            title: 'Home',
            path: '/',
            icon: <HomeOutlined />
        },
        {
            title: 'Empresas',
            path: '/clients',
            icon: <ShopOutlined/>
        },
        {
            title: 'Gestão de clientes',
            path: '/building',
            icon: <UsergroupAddOutlined/>
        },
        {
            title: 'Usuários',
            path: '/building',
            icon: <UserOutlined/>
        },
        {
            title: 'Mensagem',
            path: '/message',
            icon: <MessageOutlined/>
        }
    ]
    

    useEffect(() => {
        if(!menu.length)return
        getRoute({
            ...menu[0],
            index: 0
        })
    }, [])

    return (
        <Container>
            <nav>
                <Menu>
                    {
                        menu?.map((route, index) => {

                            const { path, icon } = route

                            return (
                                <li attr-active={active === index ? "true" : "false"} key={index}>
                                    <Link href={path} >
                                    <a onClick={e => {
                                        setActive(index)
                                        getRoute({
                                            ...route,
                                            index
                                        })
                                            Route.push({
                                            pathname: route?.path
                                        })
                                        e.preventDefault()
                                    }}>
                                        { icon }
                                    </a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </Menu>
            </nav>
        </Container>
    )
}
export default Aside