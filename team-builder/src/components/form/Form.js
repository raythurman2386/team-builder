import React from 'react'

const Form = ({ team, setTeam }) => {
  // Initial handleChange for the form
  const handleChange = event => {
    const { name, value } = event.target
    setTeam({
      [name]: value,
    })
  }

  return (
    <div>
      <form>
        <input
          type='text'
          value={team.name}
          onChange={handleChange}
          name='name'
          placeholder='Name'
        />
        <input
          type='text'
          value={team.email}
          onChange={handleChange}
          name='email'
          placeholder='Email'
        />
        <input
          type='text'
          value={team.role}
          onChange={handleChange}
          name='role'
          placeholder='Role'
        />
      </form>
    </div>
  )
}

export default Form
