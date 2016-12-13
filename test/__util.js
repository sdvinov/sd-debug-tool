const expect = require('chai').expect;
const rewire = require('rewire');
const util = rewire('../src/util');
const sinon = require('sinon');

describe('Utility tool', () => {
  beforeEach(() => {
    // Before each test puts spy on console.log
    // sinon.spy(object, method)
    this.console = {
      log: sinon.spy(console, 'log'),
    };
  });

  afterEach(() => {
    // Restores functionallity of console.log after each test
    console.log.restore();
  });

  it('Testing console.log', (done) => {
    // Calling the function and expecting it to be called
    util.debug('Server is running on port 3000', './../src/server', 'n');
    expect(console.log).to.be.called;
    done();
  });
});
