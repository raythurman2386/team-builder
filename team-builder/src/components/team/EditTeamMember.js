import React, { useState } from 'react';

// Components
import TeamMember from './TeamMember';
import Form from '../form/Form';

const EditTeamMember = (props) => {
  const member = props.teamList.find((teamMember) => {
    return teamMember.id === Number(props.match.params.id);
  });

  console.log(props);
  return (
    <div>
      <TeamMember member={member} />
      <Form />
    </div>
  );
};

export default EditTeamMember;
