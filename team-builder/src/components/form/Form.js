import React, { useState } from 'react'
import styled from 'styled-components'

const Form = ({ teamList, setTeamList }) => {
  // make an initial team to reset the form to
  const initialTeam = { name: '', email: '', role: '' }
  // Team hook
  const [team, setTeam] = useState(initialTeam)

  // Initial handleChange for the form
  const handleChange = event => {
    const { name, value } = event.target
    setTeam({
      ...team,
      [name]: value,
    })
  }

  // Handle submit
  const handleSubmit = event => {
    event.preventDefault()
    setTeamList([...teamList, team])

    // resets form as soon as it's submit
    resetForm()
  }

  // function to reset the form
  const resetForm = () => {
    setTeam(initialTeam)
  }

  return (
    <div>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          type='text'
          value={team.name}
          onChange={handleChange}
          name='name'
          placeholder='Name'
        />
        <Input
          type='text'
          value={team.email}
          onChange={handleChange}
          name='email'
          placeholder='Email'
        />
        <Input
          type='text'
          value={team.role}
          onChange={handleChange}
          name='role'
          placeholder='Role'
        />
        <ButtonWrapper>Submit</ButtonWrapper>
      </FormWrapper>
    </div>
  )
}

export default Form

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`

const Input = styled.input`
  margin: 10px 0;
  line-height: 2;
  border: none;
  // border-radius: 8px;
  padding: 5px 10px;
  width: 60%;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`

const ButtonWrapper = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 8px 14px;
  background-color: lightskyblue;
  border: none;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 -1px 10px #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
      0 2px 10px rgba(0, 0, 0, 0.24);
  }
`
