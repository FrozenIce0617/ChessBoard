import React, { ReactNode } from 'react';

import Square from '../Square';

interface IProps {
  posX: number;
  posY: number;
  isOverlay: boolean;
  children: ReactNode;
}

class BoardSquare extends React.Component<IProps> {
  render() {
    const { posX, posY, isOverlay, children } = this.props;
    const isBlack = (posX + posY) % 2 === 1;

    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Square isBlack={isBlack} isOverlay={isOverlay}>
          {children}
        </Square>
      </div>
    );
  }
}

export default BoardSquare;
