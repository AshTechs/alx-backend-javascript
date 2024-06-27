import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResponse, userResponse] = results;
      const formattedResult = `${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`;
      console.log(formattedResult);
      return formattedResult;
    })
    .catch((error) => {
      console.error('Signup system offline');
      throw error;
    });
}
