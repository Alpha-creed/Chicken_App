import React from 'react'
import { styled } from 'styled-components'
import logo from "./Assest/logo.jpg"
import { Tabs } from 'antd'
import {Link, useNavigate} from 'react-router-dom'
import Home from '../Pages/Home'
import {HashLink} from 'react-router-hash-link'
import { useDispatch, useSelector } from 'react-redux'

function Navbar({children}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state)=>state.users)
    const Overlay = styled.div`
    display:flex;
    justify-content:space-between;
    gap:20px;
      background-color:black ;
    color:white;
  
    `
    const LogoCover = styled.div`
      position:absolute;
      top:0px;
      left:0px;
    `
    const Logo =styled.img`
        height:100%;
        width:150px;
        Object-fit:cover;
    `
    const Options = styled.div`
    display:flex;
    font-size:20px;
    gap:20px;
  padding:30px;
  .link{
    font-size:20px;
    color:white;
    text-decoration:none;
  }
    `
    const Login = styled.div`
    `
    const SignUp = styled.div`

    `
    const Cart = styled.div`
      font-size:20px;
    `
    const MainWrapper = styled.div`
    padding:30px;
    gap:10px;
      display:flex;   
      .link{
        font-size:20px;
        color:white;
        text-decoration:none;
      }
    `

  return (
    user &&(
    <div>
    <Overlay>
      <Logo src={logo}/>
      <MainWrapper>
        <Link to="/" className="link">Home</Link>
        <HashLink to="#about" className="link">About</HashLink>
      </MainWrapper>      
      <Options>
    <i class="ri-shopping-cart-line"></i>
    <Link to="/login" className="link">Login</Link>
    <Link to="/register" className="link">SignUp</Link>
      </Options>
    </Overlay>
    <div>{children}</div>
    </div>
    )
  )
}

export default Navbar