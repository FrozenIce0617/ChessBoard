import React, { ReactNode } from 'react';

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
        style={{
          backgroundColor: isOverlay ? 'red' : fill,
          opacity: isOverlay ? 0.5 : 1,
          color: stroke,
          width: '100%',
          height: '100%',
          userSelect: 'none',
        }}
      >
        {children}
      </div>
    );
  }
}

export default Square;
