import React from 'react'

const Form = ({ team, setTeam, teamList }) => {
  // Initial handleChange for the form
  const handleChange = event => {
    const { name, value } = event.target
    setTeam({
      [name]: value,
    })
  }

  // Handle submit
  const handleSubmit = event => {
    event.preventDefault()
    // teamList.push(team)
    console.log(team)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Form
