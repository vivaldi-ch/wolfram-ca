import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: '' };
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
        <p
          style={{
            marginTop: '1em',
            textAlign: 'center',
          }}
        >
          Enter a number from 1 to 255. This will generate a pattern based on Wolfram&lsquo;s &nbsp;
          <a href="https://en.wikipedia.org/wiki/Elementary_cellular_automaton">
            Elementary Cellular Automaton
          </a>
          .
        </p>
        <form
          style={{
            marginTop: '3em',
            textAlign: 'center',
          }}
        >
          <input type="number" name="index" value={index} onChange={this.handleInputChange} />
          <Link to={index ? `/wolfram/${index}` : '/'}>
            <button type="submit">Submit</button>
          </Link>
        </form>
      </Layout>
    );
  }
}

export default IndexPage;
