const { setList, magic8BallResponses } = require('../data');
const get8BallResponse = require('../functions/get8BallResponse');
const fizzBuzz = require('../functions/fizzBuzz');


test('there is an e in Eddie but no x', () => {
    expect('Eddie').toMatch(/e/);
    expect('Eddie').not.toMatch(/x/);
});

test('The setlist contains This Is the Life and does not contain Panic Attack', () => {
    console.log(setList);

    expect(setList).toContain('This Is the Life');
    expect(setList).not.toContain('Panic Attack');
});

test('8-ball gives a correct random response', () => {
    console.log(magic8BallResponses);
    const response = get8BallResponse(magic8BallResponses);
    console.log(response);

    expect(magic8BallResponses).toContain(response);
});

test('FizzBuzz function works as intended', () => {
    const response = fizzBuzz(4);
    console.log(response);

    expect(fizzBuzz(21)).toBe('Fizz');
    expect(fizzBuzz(25)).toBe('Buzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(7)).toBe(7);
});