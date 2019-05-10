import React from 'react';
import { Link } from 'gatsby';
import random from 'lodash/random';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <br />
    <p>You entered an invalid number. <Link to={`/wolfram/${random(1, 255)}`}>Try</Link> a number between 1 and 255!</p>
  </Layout>
);

export default NotFoundPage;
