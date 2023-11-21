import React from 'react'
import { styled } from 'styled-components'
import reg from '../../components/Assest/register.jpg'
import { Button, Form, Input } from 'antd'
import email from '../../components/Assest/mail-fill.png'
import { MailOutlined,LockOutlined } from '@ant-design/icons'
import { EmailIcon } from '../../components/Assest/icons/icons'
import {Link} from 'react-router-dom'

const rules=[
    {
        required:true,
        message:"required"
    }
]
function Register() {
    const Title = styled.span`
    `
    const Overlay = styled.div`
    background:url(${reg});
    background-size:cover;
    height:100vh;
    color:white;
    `
    const MainWrapper =styled.div`
    background-color:rgba(173, 216, 230, 0.3);  /* RGBA values for light cyan */
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

  return (
    <Overlay>
    <MainWrapper>
      <h3>
        CHICKEN---
        <Title>
            Register
        </Title>
      </h3>
      <Form>
        <Form.Item label={"Name"} name="name" rules={rules} >
        <Input placeholder='name' prefix={<MailOutlined />}/>
        </Form.Item>
        <Form.Item  label={"Email"} name="email" rules={rules}>
        <Input placeholder='Email' prefix={<MailOutlined />}/>
        </Form.Item>
        <Form.Item  label={"Password"} name="password" rules={rules}>
        <Input placeholder='Password' type='password' prefix={<LockOutlined />}/>
        </Form.Item>
        <BtnCover>
            <Button >
                Register
            </Button>
        </BtnCover>
        <FooterCover>
          <Footer>
            Already have an Account?
            <Link to="/login" style={{marginRight:"2px",
                                    color:"white",
                                    textDecoration:"none"}}>
              Login
            </Link>
          </Footer>
        </FooterCover>
      </Form>
      </MainWrapper>
    </Overlay>
  )
}

export default Register
