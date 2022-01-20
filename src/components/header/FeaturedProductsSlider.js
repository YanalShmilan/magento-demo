import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeatureProdoctItem from './FeatureProdoctItem';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function FeaturedProductsSlider({ id }) {
  const [data, setData] = useState();
  useEffect(() => {
    let mounted = true;
    const getProducts = async (id) => {
      const response = await axios.get(
        `http://localhost:3001/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${id}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[currentPage]=1&searchCriteria[pageSize]=6`
      );

      return response.data;
    };
    getProducts(id).then((data) => {
      if (mounted) {
        setData(data);
      }
    });

    return () => (mounted = false);
  });

  return (
    <div class="col-sm-6">
      <a href="listing-left-column.html" class="pt-title-submenu">
        Featured Products
      </a>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={false}
        navigation={true}
        className=""
      >
        {data?.items?.map((item) => (
          <SwiperSlide>
            <FeatureProdoctItem item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
