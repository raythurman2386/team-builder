import React, { useState } from 'react';
import styled from 'styled-components';

const Form = ({ teamList, setTeamList, history }) => {
  // make an initial team to reset the form to
  const initialForm = { name: '', email: '', role: '' };
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
    setTeamList([ ...teamList, form ]);
    // route to the homepage on submit
    history.push('/');
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
        <Input type='text' value={form.name} onChange={handleChange} name='name' placeholder='Name' required />
        <Input type='text' value={form.email} onChange={handleChange} name='email' placeholder='Email' required />
        <Input type='text' value={form.role} onChange={handleChange} name='role' placeholder='Role' required />
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
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
`;

const ButtonWrapper = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 8px 14px;
  background-color: lightskyblue;
  border: none;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);

  &:hover {
    box-shadow: 0 -1px 10px #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 10px rgba(0, 0, 0, 0.24);
  }
`;
