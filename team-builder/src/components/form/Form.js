import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Form, Field, withFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

const TeamForm = (props, { errors, touched, status }) => {
  const [formValues, setFormValues] = useState({})
  console.log(status, 'status')

  // set the values to state from app
  useEffect(() => {
    if (status) {
      props.setTeamList([...props.teamList, ...status])
    }
  }, [status])

  return (
    <div>
      <FormWrapper>
        <Input type='text' name='name' placeholder='Name' required />
        <Input type='email' name='email' placeholder='Email' required />
        <Input type='text' name='role' placeholder='Role' required />
        <ButtonWrapper type='submit'>Submit</ButtonWrapper>
      </FormWrapper>
    </div>
  )
}

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
    email: Yup.string()
      .email()
      .required(),
    role: Yup.string().required(),
  }),

  // handleSubmit
  handleSubmit(values, { setStatus }) {
    console.log(values)
    axios
      .post('https://reqres.in/api/user', values)
      .then(res => {
        console.log(res)
        setStatus(res.data)
      })
      .catch(err => console.log(err))
  },
})(TeamForm)

const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
`

const Input = styled(Field)`
  margin: 10px 0;
  line-height: 2;
  border: none;
  // border-radius: 8px;
  padding: 5px 10px;
  width: 60%;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
`

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
`
