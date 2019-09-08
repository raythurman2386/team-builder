import React, { useState } from 'react'

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
      <header className='App-header'>
        <h1>Team Builder</h1>
        <GlobalStyle />
      </header>
    </div>
  )
}

export default App
