import chai from 'chai';
import chaiHttp from 'chai-http';
import { app } from './api.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('Index page', function() {
  let server;

  before((done) => {
    server = app.listen(7865, done);
  });

  after((done) => {
    server.close(done);
  });

  it('should return the correct status code', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should return the correct result', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  });
});
