import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import WolframCA from '../components/wolfram-ca';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    <WolframCA />
  </Layout>
);

export default IndexPage;
