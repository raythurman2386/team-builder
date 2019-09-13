import React from 'react'
import styled from 'styled-components'
import { useSpring, animated, config } from 'react-spring'

import image from '../../assets/workers-team.svg'

const TeamPlaceholder = () => {
  // Sets up the page load animation
  const teamAnimation = useSpring({
    from: { opacity: 0 },
    opacity: 1,
    delay: 800,
  })

  return (
    <Wrapper style={teamAnimation}>
      <img src={image} alt='One Team' />
      <h1>Oh dear! It appears you don't have a team!</h1>
      <p>How about adding your team members?</p>
    </Wrapper>
  )
}

export default TeamPlaceholder

const Wrapper = styled(animated.div)`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin: 0 auto;
    width: 500px;
    color: #2d3436;
    padding: 0;
  }

  h1 {
    color: #2d3436;
    font-size: 3rem;
    font-weight: 600;
  }

  p {
    font-size: 1.5rem;
    padding: 1rem;
  }
`
