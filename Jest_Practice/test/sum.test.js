const sum=require('../sum.js')

test('add 1+2 equal to 3',()=>{
    expect(sum(1,2)).toBe(3)
});