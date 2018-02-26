import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCount } from '../selectors/appSelector';

import { increment } from '../actions/appAction';

class AddCount extends Component {
  static propTypes = {
    onIncrementClick: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  };

  add = () => {
    this.props.onIncrementClick();
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <style jsx>
          {`
            div {
              padding: 0 0 20px 0;
            }
          `}
        </style>
        <h1>
          AddCount: <span>{count}</span>
        </h1>
        <button onClick={this.props.onIncrementClick}>Add To Count</button>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  count: selectCount(),
});
// const mapStateToProps = ({count}) => ({count})
const mapDispatchToProps = (dispatch) => ({
  onIncrementClick: () => {
    dispatch(increment());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCount);
