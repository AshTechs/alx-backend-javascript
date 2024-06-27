import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];

  promises.push(
    signUpUser(firstName, lastName)
      .then((data) => ({ status: 'resolved', value: data }))
      .catch((error) => ({ status: 'rejected', value: error })),
  );

  promises.push(
    uploadPhoto(fileName)
      .then((data) => ({ status: 'resolved', value: data }))
      .catch((error) => ({ status: 'rejected', value: error })),
  );

  return Promise.all(promises);
}
