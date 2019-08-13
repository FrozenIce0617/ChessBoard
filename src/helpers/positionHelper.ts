export const positionToString = (posX: number, posY: number) => {
  const row = posX + 'A'.charCodeAt(0);
  const col = posY + '1'.charCodeAt(0);

  return String.fromCharCode(row) + String.fromCharCode(col);
};

export const stringToPosition = (strPos: string) => {
  const row = strPos.charCodeAt(0) - 'A'.charCodeAt(0);
  const col = strPos.charCodeAt(1) - '1'.charCodeAt(0);

  return {
    posX: row,
    posY: col,
  };
};
