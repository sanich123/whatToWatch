import { markChanger, getFormattedTime, dateChanger } from '../formatters';

test('if value equals to 3.5, return Normal', () => {
  expect(markChanger(3.5)).toBe('Normal');
});

test('if passed as value 3601, return 1:00:00', () => {
  expect(getFormattedTime(3601, 1)).toBe('- 01:00:00');
});

test('if passed a string in JSON, return formatted string', () => {
  expect(dateChanger('2022-01-03T15:51:12.118Z')).toBe('January 03, 2022');
});

