import React from 'react'
import { styled } from 'styled-components'

function Text({color,fontSize,text}) {
    const Overlay = styled.div`
        color:${color};
        font-size:${fontSize}
    `
  return (
    <Overlay>
      {text}
    </Overlay>
  )
}

export default Text
