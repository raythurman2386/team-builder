import React from 'react'
import styled from 'styled-components'

const TeamMember = ({ member }) => {
  return (
    <div>
      <h1>{member.name}</h1>
      <h2>{member.email}</h2>
      <h3>{member.role}</h3>
    </div>
  )
}

export default TeamMember

const TeamMember = styled.div``
