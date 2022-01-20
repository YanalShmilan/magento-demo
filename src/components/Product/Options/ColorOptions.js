import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleColorOption from './SingleColorOption';

export default function ColorOptions(props) {
  const [data, setData] = useState();
  useEffect(() => {
    let mounted = true;
    const getColors = async (attribute_id) => {
      const response = await axios.get(
        `http://localhost:3001/products/attributes/` +
          +attribute_id +
          `/options`
      );
      return response.data;
    };
    getColors(props?.options?.attribute_id).then((data) => {
      if (mounted) {
        setData(data);
      }
    });

    return () => (mounted = false);
  });
  const colors = props.options?.values
    ?.map((color) =>
      data?.find((colorOp) => colorOp?.value == color?.value_index)
    )
    ?.map((color) => (
      <SingleColorOption
        handleSetColor={props.handleSetColor}
        color={color?.label}
        value={color?.value}
      />
    ));
  return <ul class="pt-options-swatch js-change-img">{colors}</ul>;
}
