import React from 'react'

  export  const validate =   values => {
  const errors = {}
  if (!values.Password) {
    errors.password = 'This field is required'
  } else if (values.username.length < 6) {
    errors.password = 'Must be 6 characters at least'
  }
  if (!values.Email) {
    errors.email = 'This field is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}
