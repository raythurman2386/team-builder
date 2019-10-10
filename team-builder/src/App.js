import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
// Components
import Navbar from './components/navbar/Navbar'
import GlobalStyle from './styles/Global'
// Form
import TeamForm from './components/form/Form'
// Team
import Team from './components/team/Team'
import TeamPlaceholder from './components/team/TeamPlaceholder'
// Hooks
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  // Hook for just the navbar
  const [navBarOpen, setNavBarOpen] = useState(false)
  // hook for editable
  const [isEditable, setIsEditable] = useState(false)
  // List for the team members
  const [teamList, setTeamList, handleDelete] = useLocalStorage('team', [])

  // // Handler for the nav bar
  const handleNavbar = () => {
    setNavBarOpen(!navBarOpen)
  }

  // Handler for the Edit
  const handleEdit = () => {
    setIsEditable(!isEditable)
  }

  return (
    <div className='App'>
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar} />
      <Wrapper>
        <Switch>
          <Route
            exact
            path='/'
            render={props => (
              <Team
                {...props}
                teamList={teamList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          />
          <Route
            path='/add-member'
            render={props => (
              <TeamForm
                {...props}
                isEditable={isEditable}
                setIsEditable={setIsEditable}
                teamList={teamList}
                setTeamList={setTeamList}
              />
            )}
          />
          <Route
            path='/edit-member/:id'
            render={props => (
              <TeamForm
                {...props}
                setIsEditable={setIsEditable}
                isEditable={isEditable}
                teamList={teamList}
                setTeamList={setTeamList}
              />
            )}
          />
          <Route path='/no-members' component={TeamPlaceholder} />
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
