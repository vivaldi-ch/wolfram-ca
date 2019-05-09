import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: null };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { index } = this.state;
    return (
      <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <form
          style={{
            marginTop: '4em',
          }}
        >
          <input
            type="number"
            name="index"
            value={index}
            onChange={this.handleInputChange}
          />
          <Link to={`wolfram/${index}`}><button type="submit">Submit</button></Link>
        </form>
      </Layout>
    );
  }
}

export default IndexPage;
