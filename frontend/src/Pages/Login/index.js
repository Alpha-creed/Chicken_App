import React, { useEffect } from 'react'
import { styled } from 'styled-components'
import login from '../../components/Assest/login.jpg'
import { Button, Form, Input, message } from 'antd'
import email from '../../components/Assest/mail-fill.png'
import { MailOutlined,LockOutlined } from '@ant-design/icons'
import { EmailIcon } from '../../components/Assest/icons/icons'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLoader } from '../../redux/loaderSlice'
import { LoginUser } from '../../apicalls/users'

const rules=[
    {
        required:true,
        message:"required"
    }
]
function Login() {
    const Title = styled.span`
    `
    const Overlay = styled.div`
    background:url(${login});
    background-size:cover;
    height:100vh;
    color:white;
    `
    const MainWrapper =styled.div`
    background-color: rgba(0, 0, 255, 0.3); /* Semi-transparent blue background */
    padding:20px;
    border-radius:10px;
    box-shadow:0 0 10px rgba(0,0,0,0.3);
    backdrop-filter:blur(5px);
    position:relative;
    z-index:1;
    text-align:center;
    margin:auto;
    width:50%;
    padding:20px;  
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
    `
    const BtnCover=styled.div``
    const FooterCover=styled.div`
      text-align:center;
      margin:7px
    `
    const Footer=styled.div``

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const onFinish=async(values)=>{
      try {
        dispatch(setLoader(true))
        const response = await LoginUser(values)
        dispatch(setLoader(false))
        if(response.success){
          message.success(response.message)
          localStorage.setItem("token",response.data)
          window.location.href='/'
        }else{
          throw new Error(response.message)
        }
      } catch (error) {
        message.error(error.message)
      }
    }
    useEffect(()=>{
      if(localStorage.getItem("token")){
        navigate('/')
      }
    },[])
  return (
    <Overlay>
    <MainWrapper>
      <h3>
        CHICKEN---
        <Title>
            LOGIN
        </Title>
      </h3>
      <Form layout='vertical' onFinish={onFinish}>
        <Form.Item label={<label style={{ color: "white" }}>Email</label>} name="email" rules={rules}>
        <Input placeholder='Email' prefix={<MailOutlined />}/>
        </Form.Item>
        <Form.Item  label={<label style={{ color: "white" }}>Password</label>} name="password" rules={rules}>
        <Input placeholder='Password' type='password' prefix={<LockOutlined />}/>
        </Form.Item>
        <BtnCover>
            <Button  htmlType='submit'>
                Login
            </Button>
        </BtnCover>
        <FooterCover>
          <Footer>
            Dont have an Account?
            <Link to="/register" style={{marginRight:"2px",
                                    color:"white",
                                    textDecoration:"none"}}>
              Register
            </Link>
          </Footer>
        </FooterCover>
      </Form>
      </MainWrapper>
    </Overlay>
  )
}

export default Login
