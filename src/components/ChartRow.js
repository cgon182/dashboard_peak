import React from 'react';

function ChartRow(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.categories}</td>
      <td>{props.description}</td>
      <td>{props.name}</td>
      <td>{props.price}</td> 
    </tr>
  );
}

export default ChartRow;

