import React from 'react'
import styled from 'styled-components'

// Team member
import TeamMember from './TeamMember'

const Team = ({ teamList }) => {
  return (
    <TeamWrapper>
      {teamList.map((team, index) => (
        <TeamMember key={index} member={team} />
      ))}
    </TeamWrapper>
  )
}

export default Team

const TeamWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-column-gap: 10px;
  grid-row-gap: 15px;

  min-height: 20rem;
  margin: auto;
`
