import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleSizeOption from './SingleSizeOption';

export default function SizeOptions(props) {
  const [data, setData] = useState();
  useEffect(() => {
    let mounted = true;
    const getSizes = async (attribute_id) => {
      const response = await axios.get(
        `http://localhost:3001/products/attributes/` +
          +attribute_id +
          `/options`
      );
      return response.data;
    };
    getSizes(props?.options?.attribute_id).then((data) => {
      if (mounted) {
        setData(data);
      }
    });

    return () => (mounted = false);
  });
  const sizes = props.options?.values
    ?.map((size) => data?.find((sizeOp) => sizeOp?.value == size?.value_index))
    ?.map((size) => (
      <SingleSizeOption
        handleSetSize={props.handleSetSize}
        label={size?.label}
        value={size?.value}
      />
    ));

  return (
    <>
      <ul class="pt-options-swatch js-change-img">{sizes}</ul>
    </>
  );
}
