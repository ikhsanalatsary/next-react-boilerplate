import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLight, selectLastUpdate, selectPlaceholderData, selectError } from '../selectors';

import AddCount from './add-count';
import Clock from './clock';
import ListUser from './listUser';

const Title = styled.h1`
  color: blue;
  font-size: 50px;
`;

class Page extends PureComponent { // eslint-disable-line
  render() {
    const { error, lastUpdate, light, linkTo, placeholderData, title } = this.props;
    return (
      <div>
        <Title>
          {title}
        </Title>
        <Clock lastUpdate={lastUpdate} light={light} />
        <AddCount />
        <nav>
          <Link href={linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
        {placeholderData && ListUser({ placeholderData })}
        {error &&
          <p style={{ color: 'red' }}>
            Error: {error.message}
          </p>}
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
  error: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object,
  ]),
  lastUpdate: PropTypes.number,
  light: PropTypes.bool,
  linkTo: PropTypes.string,
  placeholderData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  title: PropTypes.string,
};

export default connect(mapStateToProps)(Page);
