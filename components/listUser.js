import React from 'react';
import PropTypes from 'prop-types';
import toJS from 'immutable-to-js';

function ListUser({ placeholderData }) {
  return (
    <ul>
      {toJS(placeholderData).map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
}

ListUser.propTypes = {
  placeholderData: PropTypes.array,
};

export default ListUser;
