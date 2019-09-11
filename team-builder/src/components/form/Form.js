import React, { useState } from 'react';
import styled from 'styled-components';

const Form = (props) => {
  let id = 1;
  // make an initial team to reset the form to
  let initialForm;
  if (!props.isEditable) {
    initialForm = { id: id + 1, name: '', email: '', role: '' };
  } else {
    const member = props.teamList.find((teamMember) => {
      return teamMember.id === Number(props.match.params.id);
    });
    console.log(member);
    initialForm = { name: member.name, email: member.email, role: member.role };
  }

  // Form hook
  const [ form, setForm ] = useState(initialForm);

  // Initial handleChange for the form
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name] : value,
    });
  };

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    props.setTeamList([ ...props.teamList, form ]);

    if (props.isEditable) {
      props.setIsEditable(!props.isEditable);
    }
    // route to the homepage on submit
    props.history.push('/');
    // resets form as soon as it's submit
    resetForm();
  };

  // function to reset the form
  const resetForm = () => {
    setForm(initialForm);
  };

  return (
    <div>
      <FormWrapper onSubmit={handleSubmit}>
        <Input
          type='text'
          value={form.name}
          onChange={handleChange}
          name='name'
          placeholder='Name'
          required
        />
        <Input
          type='email'
          value={form.email}
          onChange={handleChange}
          name='email'
          placeholder='Email'
          required
        />
        <Input
          type='text'
          value={form.role}
          onChange={handleChange}
          name='role'
          placeholder='Role'
          required
        />
        <ButtonWrapper>Submit</ButtonWrapper>
      </FormWrapper>
    </div>
  );
};

export default Form;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

const Input = styled.input`
  margin: 10px 0;
  line-height: 2;
  border: none;
  // border-radius: 8px;
  padding: 5px 10px;
  width: 60%;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`;

const ButtonWrapper = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 8px 14px;
  background-color: lightskyblue;
  border: none;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 -1px 10px #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
      0 2px 10px rgba(0, 0, 0, 0.24);
  }
`;
