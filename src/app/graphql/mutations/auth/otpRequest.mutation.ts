import { gql } from '@apollo/client/core';

export const OtpRequestMutation = gql`
  mutation otpRequest($email: String!) {
    otpRequest(input: { email: $email }) {
      data {
        id
        fullName
        email
        telephone
      }
      message
      errors
      httpStatus
    }
  }
`; 