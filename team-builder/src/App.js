import React, { useState } from 'react'
import styled from 'styled-components'

// Components
import Navbar from './components/navbar/Navbar'
import GlobalStyle from './styles/Global'

function App() {
  // Hook for just the navbar
  const [navBarOpen, setNavBarOpen] = useState(false)

  // // Handler for the nav bar
  const handleNavbar = () => {
    setNavBarOpen(!navBarOpen)
  }

  return (
    <div className='App'>
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar} />
      <Wrapper>
        <h1>Team Builder</h1>
        <GlobalStyle />
      </Wrapper>
    </div>
  )
}

export default App

const Wrapper = styled.div`
  margin: 60px auto 0;
`
