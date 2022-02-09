import { testingPassword, testingEmail } from './regexps';

test('expect not to match from only one char', () => {
  expect('d').not.toMatch(testingPassword);
  expect('12').not.toMatch(testingPassword);
  expect('k2').toMatch(testingPassword);
  expect('ao@com').not.toMatch(testingEmail);
  expect('aovoronin.piano@gmail.com').toMatch(testingEmail);
});
