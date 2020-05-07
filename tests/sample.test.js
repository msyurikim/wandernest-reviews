describe('Simple test', () => {
  it('test that true === true', () => {
    expect(true).toBe(true);
  });
});

describe('Async test', () => {
    it('Async test', async done => {    
        done()
      })
  });