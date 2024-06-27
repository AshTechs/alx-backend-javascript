import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResponse, userResponse] = results;
      return `${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`;
    })
    .then((formattedResult) => {
      console.log(formattedResult);
      return formattedResult;
    })
    .catch((error) => {
      console.error('Signup system offline');
      throw error;
    });
}
