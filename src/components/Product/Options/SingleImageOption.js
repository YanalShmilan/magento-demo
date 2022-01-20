import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function SingleImageOption(props) {
  const [data, setData] = useState({
    name: '',
    media_gallery_entries: [''],
  });

  useEffect(() => {
    let mounted = true;
    const getOption = async (optionId) => {
      const response = await axios.get(
        `http://localhost:3001/products/?searchCriteria[filterGroups][0][filters][0][field]=entity_id&searchCriteria[filterGroups][0][filters][0][condition_type]=eq&searchCriteria[filterGroups][0][filters][0][value]=${optionId}`
      );
      return response.data.items[0];
    };

    getOption(props.optionId).then((data) => {
      if (mounted) {
        setData(data);
      }
    });

    return () => (mounted = false);
  }, []);

  return (
    <li class="active">
      <img
        className="options-color-img"
        src={
          'https://cms.mamasfirst.com/media/catalog/product' +
          data?.media_gallery_entries[0]?.file
        }
        data-tooltip={data.name.split('-')[1]}
        onClick={() =>
          props.setData({
            ...data,
            extension_attributes: props.data.extension_attributes,
            selectedOption: data.sku,
          })
        }
      />
    </li>
  );
}
