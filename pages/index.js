import React from 'react';
import PropTypes from 'prop-types';
import { increment, loadData, startClock } from '../actions';
import { withReduxSaga } from '../store';
import Page from '../components/page';

class Counter extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

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
    return <Page title="Index Page" linkTo="/other" />;
  }
}

export default withReduxSaga(Counter);
