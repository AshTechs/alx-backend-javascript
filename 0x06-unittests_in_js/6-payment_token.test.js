// 6-payment_token.test.js
const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return the correct response when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then(response => {
        expect(response).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(done);
  });

  it('should reject the promise when success is false', function (done) {
    getPaymentTokenFromAPI(false)
      .then(() => {
        done(new Error('Expected promise to be rejected but it was resolved'));
      })
      .catch(err => {
        expect(err).to.be.an('error');
        expect(err.message).to.equal('Failed to get payment token');
        done();
      });
  });
});
