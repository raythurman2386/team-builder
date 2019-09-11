import React, { useState } from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
// Components
import Navbar from './components/navbar/Navbar';
import GlobalStyle from './styles/Global';
// Form
import Form from './components/form/Form';
// Team
import Team from './components/team/Team';

function App() {
  // Hook for just the navbar
  const [ navBarOpen, setNavBarOpen ] = useState(false);
  // hook for editable
  const [ isEditable, setIsEditable ] = useState(false);
  // List for the team members
  const [ teamList, setTeamList ] = useState([
    {
      id    : 1,
      name  : 'Ray',
      email : 'raythurman2386@somewhere.com',
      role  : 'frontend',
    },
  ]);

  // // Handler for the nav bar
  const handleNavbar = () => {
    setNavBarOpen(!navBarOpen);
  };

  // Handler for the Edit
  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <div className='App'>
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar} />
      <Wrapper>
        <Switch>
          <Route exact path='/' render={(props) => <Team {...props} teamList={teamList} handleEdit={handleEdit} />} />
          <Route
            path='/add-member'
            render={(props) => (
              <Form
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
            render={(props) => (
              <Form
                {...props}
                setIsEditable={setIsEditable}
                isEditable={isEditable}
                teamList={teamList}
                setTeamList={setTeamList}
              />
            )}
          />
        </Switch>
        <GlobalStyle />
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1120px;
  margin: 60px auto 0;
`;
