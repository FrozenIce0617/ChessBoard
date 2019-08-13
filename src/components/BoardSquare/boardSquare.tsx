import React, { ReactNode } from 'react';

import Square from '../Square';
import './styles.scss';

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
      <div className="squareContainer">
        <Square isBlack={isBlack} isOverlay={isOverlay}>
          {children}
        </Square>
      </div>
    );
  }
}

export default BoardSquare;
