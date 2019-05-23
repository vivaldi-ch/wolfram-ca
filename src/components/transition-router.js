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
            <Router location={location}>
              {props.children}
            </Router>
          </CSSTransition>
        </TransitionGroup>
      ) : (
        <Router location={location}>
          {props.children}
        </Router>
      )
    )}
  </Location>
);

TransitionRouter.defaultProps = {
  isAnimated: true,
};

TransitionRouter.propTypes = {
  children: PropTypes.element.isRequired,
  isAnimated: PropTypes.bool,
};

export default TransitionRouter;
