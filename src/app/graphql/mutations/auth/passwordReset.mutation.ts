import gql from 'graphql-tag';

export const PasswordResetMutation = gql`
  mutation PasswordReset($input: PasswordResetInput!) {
    passwordReset(input: $input) {
      data {
        id
        fullName
        email
        telephone
        role
      }
      message
      errors
      httpStatus
    }
  }
`;