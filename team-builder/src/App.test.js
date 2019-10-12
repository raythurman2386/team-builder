import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App'
import Navbar from './components/navbar/Navbar'

afterEach(rtl.cleanup)

describe('My Test Suite', () => {
  it('renders the app', () => {
    const wrapper = rtl.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    )
    wrapper.debug()
  })

  it('renders the image', () => {
    const wrapper = rtl.render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    )
    // wrapper.debug()
    let navLinks = wrapper.getAllByRole('img')
    expect(navLinks.length).toBe(1)
  })
})
