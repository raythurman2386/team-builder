import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

// Team member
import TeamMember from './TeamMember'

const Team = props => {
  // Sets up the page load animation
  const cardAnimation = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 400,
    config: config.gentle,
  })

  if (props.teamList.length === 0) {
    props.history.push('/no-members')
  }

  return (
    <TeamWrapper style={cardAnimation}>
      {props.teamList &&
        props.teamList.map((team, index) => (
          <TeamMember
            key={index}
            member={team}
            handleEdit={props.handleEdit}
            handleDelete={props.handleDelete}
          />
        ))}
    </TeamWrapper>
  )
}

export default Team

const TeamWrapper = styled(animated.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 20rem;
  margin: auto;
  width: 100%;
`
