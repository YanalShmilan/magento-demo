import React from 'react';

export default function SingleColorOption({ color, handleSetColor, value }) {
  return (
    <li class="active">
      <a
        className="options-color"
        style={{ backgroundColor: color?.toLowerCase() }}
        onClick={() => {
          handleSetColor(value);
        }}
      ></a>
    </li>
  );
}
