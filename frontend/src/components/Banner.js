import React from 'react'
import { styled } from 'styled-components'
import './Banner.css'
import Text from './Text'
import { Button } from 'antd'
import Img from "./Assest/WholeChicken.jpg"

function Banner() {
    const Overlay = styled.div`
        background-color:black ;
        color:white;
    
    `
    const TotalSide = styled.div`
    display:flex;
    justify-content:space-around;
    `
    const LeftSide = styled.div`
    display:flex;
    flex-direction:column;
    gap:15px;
    `
    const RightSide = styled.img`
      width:200px;
      
      border-radius: 190px;
      border: 6px inset #c9cc1b;
      object-fit:cover;

    `
    const Motto= styled.p`
      font-size:40px;
    `
    const BtnAnMenu = styled.div`
      display:flex;
      align-items:center;
      gap:10px;
    `
    const Preview = styled.div``
    
  return (
    <Overlay>
      <TotalSide>
      <LeftSide>
        <Motto>
          Chicken Ordering Made<br/> Easy
        </Motto>
        <Text text={"Get Started Today"} color={"red"} fontSize={"20px"}/>
        <BtnAnMenu>
        <Button type='primary' ghost>Order Now</Button>
        <Text text={"See Menu"} color={"Yellow"} fontSize={"20px"}/>
        </BtnAnMenu>
      </LeftSide>
      <RightSide src={Img}/>
      </TotalSide>
      <Preview>
        Stuffs to Preview
      </Preview>
    </Overlay>
      )
    }
    
    export default Banner
    