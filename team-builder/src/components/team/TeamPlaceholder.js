import React from 'react'

import image from '../../assets/workers-team.svg'

const TeamPlaceholder = () => {
  return (
    <div>
      <img src={image} alt='One Team' />
      <h1>Oh dear! It appears you don't have a team!</h1>
      <p>How about adding your team members?</p>
    </div>
  )
}

export default TeamPlaceholder
