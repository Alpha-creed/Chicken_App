import React from 'react'
import { styled } from 'styled-components';
import TabItem from './TabItem';


function Tab({list,activeTab,onTabSwitch}) {
  let active = activeTab ===''?list[0]:activeTab;
  const TabStyled = styled.div`
    background:white;
    position:sticky;
  `
  const ListName = styled.div`
    text-align:center;
    display:flex;
    justify-content:space-evenly;
    margin:20px 30px;
  `
  return (
    <TabStyled>
     <ListName>
      {
        list.map((item,index)=>{
          return(
              <TabItem
                title={item}
                key={index}
                index={index}
                active={active}
                setActive={onTabSwitch}
              />
          )
        })
      }
     </ListName>
    </TabStyled>
  )
}

export default Tab
