import { inverterString } from '../src/inverterString';

test('Inverte os caracteres de uma string', () => {
  expect(inverterString('target')).toBe('tegrat');
  expect(inverterString('sistemas')).toBe('sametsis');
});
