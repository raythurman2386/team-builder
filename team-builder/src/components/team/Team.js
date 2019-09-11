import React from 'react';
import styled from 'styled-components';

// Team member
import TeamMember from './TeamMember';

const Team = (props) => {
  return (
    <TeamWrapper>
      {props.teamList.map((team, index) => (
        <TeamMember key={team.id} member={team} handleEdit={props.handleEdit} />
      ))}
    </TeamWrapper>
  );
};

export default Team;

const TeamWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  min-height: 20rem;
  margin: auto;
  width: 100%;
`;
