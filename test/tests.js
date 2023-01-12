// IMPORT MODULES under test here:
import {
    addExclamationPoints,
    multiplyBySeven,
    multiplyBy12ThenHalve,
    divideThenMultiply,
    returnAsAnArray,
} from '../functions.js';

const { test } = QUnit;

test('this should add !!! to string', (expect) => {
    const expected = 'hello world!!!';

    const actual = addExclamationPoints('hello world');

    expect.equal(actual, expected, 'hello world!!! = hello world!!!');

    const expected2 = 'YAY!!!';

    const actual2 = addExclamationPoints('YAY');

    expect.equal(actual2, expected2, 'YAY!!! = YAY!!!');

    const expected3 = 'THIS WORKS!!!';

    const actual3 = addExclamationPoints('THIS WORKS');

    expect.equal(actual3, expected3, 'THIS WORKS!!! = THIS WORKS!!!');
});

test('this should multiply by 7', (expect) => {
    const expected = 21;

    const actual = multiplyBySeven(3);

    expect.equal(actual, expected, '3*7 = 21');

    const expected2 = 49;

    const actual2 = multiplyBySeven(7);

    expect.equal(actual2, expected2, '7*7 = 49');

    const expected3 = 700;

    const actual3 = multiplyBySeven(100);

    expect.equal(actual3, expected3, '100*7 = 700');
});

test('this should multiply by 12 then divide by 2', (expect) => {
    const expected = 24;

    const actual = multiplyBy12ThenHalve(4);

    expect.equal(actual, expected, '24=24');

    const expected2 = 6;

    const actual2 = multiplyBy12ThenHalve(1);

    expect.equal(actual2, expected2, '6 = 6');

    const expected3 = 60;

    const actual3 = multiplyBy12ThenHalve(10);

    expect.equal(actual3, expected3, '60 = 60');
});

test('this should divide firstNumber by secondNumber the multiply by thirdNumber', (expect) => {
    const expected = 18;

    const actual = divideThenMultiply(12, 2, 3);

    expect.equal(actual, expected, '18 = 18');
    const expected2 = 6;

    const actual2 = divideThenMultiply(10, 5, 3);

    expect.equal(actual2, expected2, '6 = 6');

    const expected3 = 8;

    const actual3 = divideThenMultiply(50, 25, 4);

    expect.equal(actual3, expected3, '8 = 8');
});

test('this should return an array', (expect) => {
    const expected = [1, 2, 3];

    const actual = returnAsAnArray(1, 2, 3);

    expect.deepEqual(actual, expected, '123 = [123]');

    const expected2 = ['apple', 'banana', 'orange'];

    const actual2 = returnAsAnArray('apple', 'banana', 'orange');

    expect.deepEqual(actual2, expected2, 'apple, banana, orange = [apple, banana, orange]');

    const expected3 = [420, 1998, 24];

    const actual3 = returnAsAnArray(420, 1998, 24);

    expect.deepEqual(actual3, expected3, '420, 1998, 24 = [420, 1998, 24]]');
});
