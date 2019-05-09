const path = require('path');
const times = require('lodash/times');

exports.createPages = ({ actions }) => {
  const { createPage } = actions;

  times(256).forEach(n => createPage({
    path: `wolfram/${n}`,
    component: path.resolve('./src/templates/wolfram.js'),
    context: { index: n },
  }));
};
