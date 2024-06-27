import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(),
      createUser()
    ]);

    const formattedResult = `${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`;
    console.log(formattedResult);
    return formattedResult;
  } catch (error) {
    console.error('Signup system offline');
    throw error;
  }
}
