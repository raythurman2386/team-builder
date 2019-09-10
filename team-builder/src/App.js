import React, { useState } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
// Components
import Navbar from './components/navbar/Navbar'
import GlobalStyle from './styles/Global'
// Form
import Form from './components/form/Form'
// Team
import Team from './components/team/Team'

function App() {
  // List for the team members
  const [teamList, setTeamList] = useState([
    {
      name: 'Ray',
      email: 'raythurman2386@somewhere.com',
      role: 'frontend',
    },
  ])
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
        <Switch>
          <Route exact path="/" render={(props) => <Team {...props} teamList={teamList} />} />
          <Route path="/add-member" render={(props) => <Form {...props} teamList={teamList} setTeamList={setTeamList} />} />
        </Switch>
        <GlobalStyle />
      </Wrapper>
    </div>
  )
}

export default App

const Wrapper = styled.div`
      max-width: 1120px;
      margin: 60px auto 0;
    `
