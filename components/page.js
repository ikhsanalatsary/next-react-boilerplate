import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectLight,
  selectLastUpdate,
  selectPlaceholderData,
  selectError,
} from '../selectors/appSelector';

import AddCount from './add-count';
import Clock from './clock';
import ListUser from './listUser';
import Link from './linkAnchor';

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`;

/* eslint-disable react/prefer-stateless-function */
class Page extends PureComponent {
  render() {
    const {
      error,
      lastUpdate,
      light,
      linkTo,
      placeholderData,
      title,
    } = this.props;
    return (
      <div>
        <Title>{title}</Title>
        <Clock lastUpdate={lastUpdate} light={light} />
        <AddCount />
        <nav>
          <Link href={linkTo}>
            Navigate
          </Link>
        </nav>
        {placeholderData && ListUser({ placeholderData })}
        {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  lastUpdate: selectLastUpdate(),
  light: selectLight(),
  placeholderData: selectPlaceholderData(),
  error: selectError(),
});

Page.propTypes = {
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]).isRequired,
  lastUpdate: PropTypes.number.isRequired,
  light: PropTypes.bool.isRequired,
  linkTo: PropTypes.string.isRequired,
  placeholderData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  title: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Page);
