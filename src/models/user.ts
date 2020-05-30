interface User {
  username: string;
  email: string;
  phoneNumber: string;
}


function mapUser(cognitoUser: any): User {
  return {
    username: cognitoUser.username,
    email: cognitoUser.attributes.email,
    phoneNumber: cognitoUser.attributes.phone_number
  } as User
}

export default User;
export { mapUser }