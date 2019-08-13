import { positionToString, stringToPosition } from './positionHelper';

describe('PositionToString Helper', () => {
  test('(0, 0) => A1', () => {
    expect(positionToString(0, 0)).toBe('A1');
  });

  test('(5, 4) => F5', () => {
    expect(positionToString(5, 4)).toBe('F5');
  });
});

describe('StringToPosition Helper', () => {
  test('A1 => (0, 0)', () => {
    expect(stringToPosition('A1')).toStrictEqual({
      posX: 0,
      posY: 0,
    });
  });

  test('(5, 4) => F5', () => {
    expect(stringToPosition('G7')).toStrictEqual({
      posX: 6,
      posY: 6,
    });
  });
});
