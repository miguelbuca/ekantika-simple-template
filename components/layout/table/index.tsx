import type { NextPage } from 'next'

import styled from 'styled-components'
import Button from '../button'
import Input from '../input'
import Select from '../select'
import Switch from '../switch'

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


const Table: NextPage = () => {
    return (
        <Container>
            <div>
                <Top>
                    <div>
                        <div>
                            <Switch shape='circle' />
                        </div>
                        <Select
                            style={{
                                border: 'solid 1px rgba(0,0,0,.2)',
                                padding: '.3rem 0',
                                width: '12rem'
                            }}
                                placeholder="Ações"
                                data={[
                                    {
                                        label: 'Editar',
                                        value: 0
                                    },
                                    {
                                        label: 'Eliminar',
                                        value: 0
                                    }
                                ]}
                                type={'multiple'}
                                onSelectItem={(e) => {}}
                        />
                        <div>
                            <Button backGround='transparent'>Aplicar</Button>
                        </div>
                    </div>
                    <LeftSide>
                        <Input isSearch placeholder="Buscar" />
                        <Button backGround='normal' >Novo cliente</Button>
                    </LeftSide>
                </Top>
                <div>
                    <Switch />
                </div>
            </div>
            <div>
                ola mundo
            </div>
        </Container>
    )
}
export default Table