import React from 'react';

export default function SingleSizeOption({ label, value, handleSetSize }) {
  return (
    <li class="active">
      <a
        onClick={() => {
          handleSetSize(value);
        }}
      >
        {label}
      </a>
    </li>
  );
}
