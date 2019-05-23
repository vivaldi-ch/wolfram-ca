import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

import FullscreenLayout from './fullscreen-layout';
import WolframRep from './wolfram-rep';
import { decimalToBinary } from '../../utils/wolfram';

import styles from './wolfram-ca.module.css';
import './layout.css';

const LazyWolframArray = lazy(() => import('./wolfram-array'));

const WIDTH_OF_CA = 51;
const HEIGHT_OF_CA = 500;

const WolframCA = ({ value }) => {
  const wolframValue = Number(value) || 0;
  const isNumberValid = value > 0 && value < 256;

  return (
    <FullscreenLayout>
      <div>
        <h3>Index: {wolframValue}</h3>
        <div>
          <WolframRep wolframArr={decimalToBinary(wolframValue).reverse()} />
        </div>
        <div
          className={styles.wolframWrapper}
          style={{
            display: isNumberValid ? 'block' : 'flex',
          }}
        >
          <Suspense fallback={<div />}>
            <LazyWolframArray value={wolframValue} width={WIDTH_OF_CA} height={HEIGHT_OF_CA} />
          </Suspense>
        </div>
      </div>
    </FullscreenLayout>
  );
};

WolframCA.defaultProps = {
  value: '0',
};

WolframCA.propTypes = {
  value: PropTypes.string,
};

export default WolframCA;
