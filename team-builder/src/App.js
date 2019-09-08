import React, { useState } from 'react'
import styled from 'styled-components'

// Components
import Navbar from './components/navbar/Navbar'
import GlobalStyle from './styles/Global'
// Form
import Form from './components/form/Form'

// Team
import Team from './components/team/Team'

function App() {
  // Hook for just the navbar
  const [navBarOpen, setNavBarOpen] = useState(false)
  // Team hook
  const [team, setTeam] = useState({})

  // // Handler for the nav bar
  const handleNavbar = () => {
    setNavBarOpen(!navBarOpen)
  }

  return (
    <div className='App'>
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar} />
      <Wrapper>
        <Team />
        <Form />
        <GlobalStyle />
      </Wrapper>
    </div>
  )
}

export default App

const Wrapper = styled.div`
  margin: 60px auto 0;
`
