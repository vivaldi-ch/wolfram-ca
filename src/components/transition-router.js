import React from 'react';
import PropTypes from 'prop-types';
import { Router, Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './transition-router.css';

const TransitionRouter = props => (
  <Location>
    {({ location }) => (
      props.isAnimated ? (
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Router location={location} primary={props.isPrimary}>
              {props.children}
            </Router>
          </CSSTransition>
        </TransitionGroup>
      ) : (
        <Router location={location} primary={props.isPrimary}>
          {props.children}
        </Router>
      )
    )}
  </Location>
);

TransitionRouter.defaultProps = {
  isAnimated: true,
  isPrimary: false,
};

TransitionRouter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  isAnimated: PropTypes.bool,
  isPrimary: PropTypes.bool,
};

export default TransitionRouter;
