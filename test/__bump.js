const expect = require('chai').expect;
const util = require('../src/util');

describe('Bump util', () => {
  it('test with a Major', () => {
    // Calling the function and expecting it to be called
    const patchOutput = util.bump('11.403.12', 'Major');
    expect(patchOutput).to.be.equal('12.0.0');
  });

  it('test with a Minor', () => {
    // Calling the function and expecting it to be called
    const patchOutput = util.bump('11.403.12', 'minor');
    expect(patchOutput).to.be.equal('11.404.0');
  });

  it('test with a Patch', () => {
    // Calling the function and expecting it to be called
    const patchOutput = util.bump('11.403.12', 'patch');
    expect(patchOutput).to.be.equal('11.403.13');
  });
});
