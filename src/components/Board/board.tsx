import React from 'react';
import { connect } from 'react-redux';

import { positionToString } from '../../helpers/positionHelper';
import BoardSquare from '../BoardSquare';
import Knight from '../Knight';
import { getPositionRequest } from '../../redux/api/actions';

interface IProps {
  availablePosition: string[];
  getPosition: Function;
}

interface IState {
  posX: number;
  posY: number;
}

class Board extends React.Component<IProps, IState> {
  state = {
    posX: -1,
    posY: -1,
  };

  isOverlay = (x: number, y: number) => {
    const { availablePosition } = this.props;
    const { posX, posY } = this.state;

    if (posX === -1 || posY === -1) return false;
    if (typeof availablePosition === 'undefined') return false;

    return availablePosition.includes(positionToString(x, y));
  };

  onHandleClick = (x: number, y: number) => {
    const { getPosition, availablePosition } = this.props;
    const { posX, posY } = this.state;

    if (
      (posX === -1 && posY === -1) ||
      availablePosition.includes(positionToString(x, y))
    ) {
      this.setState({
        posX: x,
        posY: y,
      });

      getPosition({
        pos: positionToString(x, y),
      });
    }
  };

  renderPiece = (x: number, y: number) => {
    const { posX, posY } = this.state;

    if (x === posX && y === posY) {
      return <Knight />;
    }
  };

  renderSquare = (index: number) => {
    const x = index % 8;
    const y = Math.floor(index / 8);

    return (
      <div
        key={index}
        style={{ width: '10vw', height: '10vw' }}
        onClick={() => this.onHandleClick(x, y)}
      >
        <BoardSquare posX={x} posY={y} isOverlay={this.isOverlay(x, y)}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  };

  render() {
    const squares = [];
    for (let i = 0; i < 64; i += 1) squares.push(this.renderSquare(i));

    return (
      <div
        style={{
          width: '80vw',
          height: '80vw',
          paddingLeft: '10vw',
          paddingRight: '10vw',
        }}
      >
        <div
          style={{
            border: '1px solid gray',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          {squares}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  availablePosition: state.Api.data,
});

const mapDispatchToProps = {
  getPosition: getPositionRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Board);
