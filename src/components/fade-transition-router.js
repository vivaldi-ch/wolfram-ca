import React from 'react';
import PropTypes from 'prop-types';
import { Router, Location } from '@reach/router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './fade-transition-router.css';

const FadeTransitionRouter = props => (
  <Location>
    {({ location }) => (
      <TransitionGroup className="transition-group">
        {props.animated ? (
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Router location={location} className="router">
              {props.children}
            </Router>
          </CSSTransition>
        ) : (
          <Router location={location} className="router">
            {props.children}
          </Router>
        )}
      </TransitionGroup>
    )}
  </Location>
);

FadeTransitionRouter.defaultProps = {
  animated: true,
};

FadeTransitionRouter.propTypes = {
  children: PropTypes.element.isRequired,
  animated: PropTypes.bool,
};

export default FadeTransitionRouter;
