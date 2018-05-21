import sum from './sum';

describe('sum', () => {

  it('create sum of 2 numbers', ()=>{
    expect(sum(15, 8)).toBe(23);
    expect(sum('vue', 'conf')).toBe('vueconf');
  })

  it('ignores extra arguments', ()=>{
    expect(sum(1, 2, 3)).toBe(sum(1, 2));
  })
})
