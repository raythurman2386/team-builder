import React from 'react';
import styled from 'styled-components';

const TeamMember = ({ member }) => {
  return (
    <TeamMemberCard>
      <h1>{member.name}</h1>
      <h2>{member.email}</h2>
      <h3>{member.role}</h3>
      <button>Edit</button>
    </TeamMemberCard>
  );
};

export default TeamMember;

const TeamMemberCard = styled.div`
  width: 400px;
  min-height: 250px;
  background-color: #f2f2f2;
  padding: 1.5rem;
  box-shadow: 0 10px 6px -6px #777;
  margin: 2rem auto;
  cursor: pointer;
  :hover {
    transform: scale(0.98);
  }

  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }

  h2 {
    text-align: center;
    margin: 2rem 0;
  }

  h3 {
    text-align: center;
    margin: 4rem 0;
    font-size: 2rem;
  }

  button {
    padding: 6px 12px;
    border: none;
    box-shadow: 0 5px 5px #777;
    cursor: pointer;
    background-color: #333;
    color: white;
    :hover {
      background-color: red;
      transition: 1s ease;
    }
  }
`;
