import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import App from './App'

afterEach(rtl.cleanup)

describe('My Test Suite', () => {
  it('renders the content', () => {
    const wrapper = rtl.render(<App />)

    let addTeamMember = wrapper.getByText(/add team member/i)

    expect(addTeamMember).toBeInDocument()
  })
})
