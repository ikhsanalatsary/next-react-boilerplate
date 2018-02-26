import React from 'react';
import PropTypes from 'prop-types';

function ListUser({ placeholderData }) {
  return (
    <ul>
      {placeholderData.map((data) => (
        <li key={`user-${data.id}`}>{data.name}</li>
      ))}
    </ul>
  );
}

ListUser.propTypes = {
  placeholderData: PropTypes.array.isRequired,
};

export default ListUser;
