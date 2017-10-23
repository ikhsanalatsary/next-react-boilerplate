import React from 'react';
import PropTypes from 'prop-types';
import { increment, loadData, startClock } from '../actions/appAction';
import { withReduxSaga } from '../store';
import Layout from '../components/layout';
import Page from '../components/page';

class Counter extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func,
  };

  static async getInitialProps({ store }) {
    store.dispatch(increment());
    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }
  }

  componentDidMount() {
    this.props.dispatch(startClock());
  }

  render() {
    return (
      <Layout>
        <Page title="Index Page" linkTo="/other" />
      </Layout>
    );
  }
}

export default withReduxSaga(Counter);
