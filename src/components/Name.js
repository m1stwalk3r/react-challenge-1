import React from 'react';

const Name = (props) => (
  <button className="btn btn-primary name" name="name" onClick={props.onClick}>Name</button>
);

export default Name;
