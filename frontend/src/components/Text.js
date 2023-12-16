import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

function Text({color,fontSize,text,locate}) {
  const navigate=useNavigate();
  const Overlay = styled.div`
        color:${color};
        font-size:${fontSize};
        cursor:pointer;
    `
  return (
    <Overlay onClick={()=>navigate(`${locate}`)}>
      {text}
    </Overlay>
  )
}

export default Text
