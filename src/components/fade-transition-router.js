import React from 'react';
import PropTypes from 'prop-types';
import { Router, Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './fade-transition-router.css';

const FadeTransitionRouter = props => (
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

FadeTransitionRouter.defaultProps = {
  isAnimated: true,
};

FadeTransitionRouter.propTypes = {
  children: PropTypes.element.isRequired,
  isAnimated: PropTypes.bool,
};

export default FadeTransitionRouter;
