import React from 'react';

// Components
import TeamMember from './TeamMember';
import Form from '../form/Form';

const EditTeamMember = (props) => {
  const member = props.teamList.find((teamMember) => {
    return teamMember.id === Number(props.match.params.id);
  });

  props.setIsEditable(true);

  console.log(props);
  return (
    <div>
      <TeamMember member={member} />
      <Form isEditable={props.isEditable} member={member} teamList={props.teamList} setTeamList={props.setTeamList} />
    </div>
  );
};

export default EditTeamMember;
