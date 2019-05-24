import React from 'react';
import PropTypes from 'prop-types';

import { getWolframCAArray } from '../../utils/wolfram';

import styles from './wolfram-ca.module.css';

const CELL_SIDE = 15;

class WolframArray extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    const { value, width, height } = this.props;
    const ctx = this.canvas.getContext('2d');

    getWolframCAArray(value, width, height).forEach((object, index) => {
      object.forEach((o, objectIndex) => {
        if (o === 1) {
          ctx.fillRect(
            objectIndex * CELL_SIDE,
            index * CELL_SIDE,
            CELL_SIDE,
            CELL_SIDE,
          );
        }
      });
    });
  }

  render() {
    const { value } = this.props;
    const isNumberValid = value > 0 && value < 256;

    const wolframHTML = isNumberValid ? (
      <div className={styles.table}>
        <canvas ref={(canvas) => { this.canvas = canvas; }} width={765} height={7500} />
      </div>
    ) : (
      <h4 className={styles.notFound}>Invalid number.</h4>
    );

    return wolframHTML;
  }
}

WolframArray.propTypes = {
  value: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default WolframArray;
