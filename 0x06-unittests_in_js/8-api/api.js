import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(7865, () => {
    console.log('API available on localhost port 7865');
  });
}

export { app };
