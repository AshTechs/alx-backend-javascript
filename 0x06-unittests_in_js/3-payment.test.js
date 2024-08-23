// 3-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with SUM type and correct arguments', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;

    spy.restore();
    consoleSpy.restore();
  });
});