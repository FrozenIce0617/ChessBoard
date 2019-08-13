import React, { ReactNode } from 'react';

import './styles.scss';

interface IProps {
  isBlack: boolean;
  isOverlay: boolean;
  children?: ReactNode;
}

class Square extends React.Component<IProps> {
  render() {
    const { isBlack, isOverlay, children } = this.props;
    const fill = isBlack ? 'black' : 'white';
    const stroke = isBlack ? 'white' : 'black';

    return (
      <div
        className="square"
        style={{
          backgroundColor: isOverlay ? 'red' : fill,
          opacity: isOverlay ? 0.5 : 1,
          color: stroke,
        }}
      >
        {children}
      </div>
    );
  }
}

export default Square;
