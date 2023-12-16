import React from 'react'
import { styled } from 'styled-components'
import About from '../../components/About'
import Banner from '../../components/Banner'
import Navbar from '../../components/Navbar'

const Home=()=> {
    const Overlay = styled.div`

    `

  return (
    <Overlay>
      <Banner/>
      <About/>
    </Overlay>
  )
}

export default Home
