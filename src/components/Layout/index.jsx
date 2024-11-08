import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Container,Main } from '../../style/components/Layout'

const Layout = ({children}) => {
  return (
    <Container>
      <Navbar/>
      <Main>
        {children}
      </Main>
      <Footer/>
    </Container>
  )
}

export default Layout