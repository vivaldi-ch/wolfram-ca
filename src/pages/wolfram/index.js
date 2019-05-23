import React from 'react';
import PropTypes from 'prop-types';

import last from 'lodash/last';
import toNumber from 'lodash/toNumber';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import WolframCA from '../../components/wolfram-ca';
import WolframLink from '../../components/wolfram-link';
import TransitionRouter from '../../components/transition-router';

class WolframPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { wolframIndex: this.getIndexFromPath() };
  }

  getIndexFromPath() {
    const {
      location: { pathname },
    } = this.props;
    return toNumber(last((pathname || '/').split('/')));
  }

  render() {
    const { wolframIndex } = this.state;

    return (
      <Layout>
        <SEO title={`Wolfram ${wolframIndex}`} />
        <TransitionRouter isAnimated={false}>
          <WolframLink path="wolfram/:value" />
        </TransitionRouter>
        <TransitionRouter>
          <WolframCA path="wolfram/:value" />
        </TransitionRouter>
      </Layout>
    );
  }
}

WolframPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default WolframPage;
