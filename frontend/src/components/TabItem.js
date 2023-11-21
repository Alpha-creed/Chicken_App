import React from 'react'
import { styled } from 'styled-components'

function TabItem({title,index,active,setActive}) {
    const TabItemsStyled = styled.div`
        color:black;
        padding:10px 2px;
    `
    const Btn = styled.button`
        padding:10px 10px;
        border:none;
        outline:none;
    `
    const Title =styled.span`
        &:hover{
            color:#37332B;
            border:none;
            box-shadow:none;
        }
        border:${props=>
            props.active?'1px dashed yellow':'none'
        }

    `

  return (
    <TabItemsStyled>
      <Btn onClick={()=>setActive(title)}>
        <Title active={active} >
            {title.toUpperCase()}
        </Title>
      </Btn>
    </TabItemsStyled>
  )
}

export default TabItem
