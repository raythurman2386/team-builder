import React, { useState } from 'react';
import styled from 'styled-components';
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

const TeamForm = (props, { errors, touched, status }) => {
  let id = 1 || props.teamList.length + 1;
  // make an initial team to reset the form to
  let initialForm;
  if (!props.isEditable) {
    initialForm = { id: id, name: '', email: '', role: '' };
  } else {
    const member = props.teamList.find((teamMember) => {
      return teamMember.id === Number(props.match.params.id);
    });
    initialForm = {
      id: member.id,
      name: member.name,
      email: member.email,
      role: member.role,
    };
  }

  // Handle submit
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (props.teamList === []) {
  //     props.setTeamList([form]);
  //   } else {
  //     props.setTeamList([...props.teamList, form]);
  //   }

  //   if (props.isEditable) {
  //     props.setIsEditable(!props.isEditable);
  //     // filter then push
  //     let filteredList = props.teamList.filter((item) => item.id !== form.id);
  //     // Set the edited form to the new list
  //     props.setTeamList([...filteredList, form]);
  //   }
  //   // route to the homepage on submit
  //   props.history.push('/');
  //   // resets form as soon as it's submit
  //   resetForm();
  // };

  // function to reset the form
  // const resetForm = () => {
  //   setForm(initialForm);
  // };

  return (
    <div>
      <FormWrapper>
        <Input
          type='text'
          name='name'
          placeholder='Name'
          required
        />
        <Input
          type='email'
          name='email'
          placeholder='Email'
          required
        />
        <Input
          type='text'
          name='role'
          placeholder='Role'
          required
        />
        <ButtonWrapper>Submit</ButtonWrapper>
      </FormWrapper>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: ({ name, email, role }) => {
    return {
      name: name || '',
      email: email || '',
      role: role || '',
    }
  },

  // Validation
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    role: Yup.string().required(),
  }),

  // handleSubmit
  handleSubmit(values, { setStatus }) {
    console.log(values)
    setStatus(values)
  }
})(TeamForm);

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`;

const Input = styled(Field)`
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
