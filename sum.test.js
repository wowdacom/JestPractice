import sum from './sum';

describe('sum', () =>{

  it('create sum of 2numbers', () => {
    expect(sum(15, 8)).toBe(23);
  })

  it('ignnore three parameters', () => {
    expect(sum(2, 3, 4)).toBe(sum(2, 3))
  })

})
