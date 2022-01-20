import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Brand({ brand }) {
  const [data, setData] = useState();
  useEffect(() => {
    let mounted = true;
    const getBrands = async (brand) => {
      const response = await axios.get(
        `http://localhost:3001/mamas-brand/brandlist`
      );
      return response.data;
    };
    getBrands(brand).then((data) => {
      if (mounted) {
        setData(data);
      }
    });

    return () => (mounted = false);
  });
  return (
    <a href="#">{data?.find((_brand) => _brand.brand_id == brand)?.label}</a>
  );
}
