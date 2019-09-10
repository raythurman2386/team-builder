import React from 'react'
import styled from 'styled-components'

const TeamMember = ({ member }) => {
  return (
    <TeamMemberCard>
      <h1>{member.name}</h1>
      <h2>{member.email}</h2>
      <h3>{member.role}</h3>
    </TeamMemberCard>
  )
}

export default TeamMember

const TeamMemberCard = styled.div`
  width: 100%;
  min-height: 250px;
  background-color: #f2f2f2;
  padding: 1.5rem;
  -webkit-box-shadow: 0 10px 6px -6px #777;
  -moz-box-shadow: 0 10px 6px -6px #777;
  box-shadow: 0 10px 6px -6px #777;
  margin: 2rem auto;
`
