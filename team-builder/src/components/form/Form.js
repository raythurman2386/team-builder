import React from 'react'

const Form = () => {
  // Initial handleChange for the form
  const handleChange = event => {
    const { name, value } = event.target
    setTeam({
      [name]: value,
    })
  }

  return (
    <div>
      <h2>Form</h2>
    </div>
  )
}

export default Form
