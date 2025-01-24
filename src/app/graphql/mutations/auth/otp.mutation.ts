import gql from 'graphql-tag';

export const OtpRequestMutation = gql`
  mutation OtpRequest($input: OtpRequestInput!) {
    otpRequest(input: $input) {
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