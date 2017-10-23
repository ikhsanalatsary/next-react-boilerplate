import React from 'react';
import PropTypes from 'prop-types';
import { increment, startClock } from '../actions/appAction';
import { withReduxSaga } from '../store';
import Layout from '../components/layout';
import Page from '../components/page';

class Counter extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
  };

  static async getInitialProps({ store }) {
    store.dispatch(increment());
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return (
      <Layout>
        <Page title="Other Page" linkTo="/" />
      </Layout>
    );
  }
}

export default withReduxSaga(Counter);
