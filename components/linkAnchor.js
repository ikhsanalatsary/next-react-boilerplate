import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function LinkAnchor (props) {
  const { children, ...rest } = props;
  return <Link {...rest}><a href={rest.as || rest.href}>{children}</a></Link>;
}

LinkAnchor.propTypes = {
  children: PropTypes.node.isRequired,
}
