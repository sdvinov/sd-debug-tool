const expect = require('chai').expect;
const rewire = require('rewire');
const util = rewire('../src/util');
const sinon = require('sinon');

describe('Utility tool', () => {
  beforeEach(() => {
    this.console = {
      log: sinon.spy(),
    };
  });

  it('test', () => {
    const _this = this;
    util.debug('Server is running on port 3000', './../src/server', 'n');
    expect(_this.console.log.callCount).to.equal(1);
  });
});
