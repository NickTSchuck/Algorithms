const fib = require('./index');

let fibonacci = new fib();

test('Fib function is defined', () => {
  expect(typeof fibonacci.calc).toEqual('function');
});

test('calculates correct fib value for 1', () => {
  expect(fibonacci.calc(1)).toEqual(1);
});

test('calculates correct fib value for 2', () => {
  expect(fibonacci.calc(2)).toEqual(1);
});

test('calculates correct fib value for 3', () => {
  expect(fibonacci.calc(3)).toEqual(2);
});

test('calculates correct fib value for 4', () => {
  expect(fibonacci.calc(4)).toEqual(3);
});

test('calculates correct fib value for 15', () => {
  expect(fibonacci.calc(39)).toEqual(63245986);
});
