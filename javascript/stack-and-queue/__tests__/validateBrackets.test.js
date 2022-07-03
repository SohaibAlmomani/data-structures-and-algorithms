'use strict';
const { validateBrackets } = require('../stack-queue-brackets');

describe('Validate Brackets Test', () => {
  it('Example 1 : {} ==> TRUE ', () => {
    expect(validateBrackets('{}')).toEqual(true);
  });

  it('Example 2 : {}(){} ==> TRUE ', () => {
    expect(validateBrackets('{}(){}')).toEqual(true);
  });

  it('Example 3 : ()[[Extra Characters]] ==> TRUE ', () => {
    expect(validateBrackets('()[[Extra Characters]]')).toEqual(true);
  });

  it('Example 4 : (){}[[]] ==> TRUE ', () => {
    expect(validateBrackets('(){}[[]]')).toEqual(true);
  });

  it('Example 5 : {}{Code}[Fellows](()) ==> TRUE ', () => {
    expect(validateBrackets('{}{Code}[Fellows](())')).toEqual(true);
  });

  it('Example 6 : [({}] ==> FALSE ', () => {
    expect(validateBrackets('[({}]')).toEqual(false);
  });

  it('Example 7 : (]( ==> FALSE ', () => {
    expect(validateBrackets('(](')).toEqual(false);
  });

  it('Example 8 : {(}) ==> FALSE ', () => {
    expect(validateBrackets('{(})')).toEqual(false);
  });

  it('Example 9 : { ==> FALSE ', () => {
    expect(validateBrackets('{')).toEqual(false);
  });

  it('Example 10 : ) ==> FALSE ', () => {
    expect(validateBrackets(')')).toEqual(false);
  });

  it('Example 11 : [} ==> FALSE ', () => {
    expect(validateBrackets('[}')).toEqual(false);
  });
});
