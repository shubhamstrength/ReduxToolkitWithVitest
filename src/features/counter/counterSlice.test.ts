import reducer, { CounterState, decrement, increment } from './counterSlice';

test('should return initial state', () => {
  expect(reducer(undefined, {type: undefined})).toEqual(
    { value: 0}
  );
});

test('should handle increment', () => {
  const previousState: CounterState = {
    value: 0
  };
  expect(reducer(previousState, increment())).toEqual(
    { value: 1}
  );
});

test('should handle decrement', () => {
  const previousState: CounterState = {
    value: 1
  };
  expect(reducer(previousState, decrement())).toEqual(
    { value: 0}
  );
});
