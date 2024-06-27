import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ])
    .then((results) => {
      return results.map((result) => ({
        status: result.status === 'fulfilled' ? 'fulfilled' : 'rejected',
        value: result.status === 'fulfilled' ? {
          firstName,
          lastName
        } : `Error: ${fileName} cannot be processed`
      }));
    })
    .catch((error) => {
      console.error('Error in handleProfileSignup:', error);
      return [
        {
          status: 'rejected',
          value: `Error in handleProfileSignup: ${error.message}`
        }
      ];
    });
}
