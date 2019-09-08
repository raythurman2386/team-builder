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
  justify-content: center;
  align-items: center;
  min-height: 20rem;
  margin: auto;
`
