import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Layout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(() => {
          console.log("service worker registration successful"); // eslint-disable-line
        })
        .catch((err) => {
          console.warn("service worker registration failed", err.message); // eslint-disable-line
        });
    }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Layout;
