import React, { ReactChildren } from 'react';

type Props = {
  isBlack: boolean;
  children: ReactChildren;
};

class Square extends React.Component<Props> {
  render() {
    const { isBlack, children } = this.props;
    const fill = isBlack ? 'black' : 'white';
    const stroke = isBlack ? 'white' : 'black';

    return (
      <div
        style={{
          backgroundColor: fill,
          color: stroke,
          width: '100%',
          height: '100%',
        }}
      >
        {children}
      </div>
    );
  }
}

export default Square;
