import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import ProductOutOfStock from '../Product/ProductOutOfStock';
import Tabs from './Tabs';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function ProductsTabs({ categoryId }) {
  const [data, setData] = useState();
  useEffect(() => {
    let mounted = true;
    const getProducts = async (categoryId) => {
      const response = await axios.get(
        `http://localhost:3001/products?searchCriteria[filter_groups][0][filters][0][field]=category_id&searchCriteria[filter_groups][0][filters][0][value]=${categoryId}&searchCriteria[filter_groups][0][filters][0][condition_type]=eq&searchCriteria[currentPage]=1&searchCriteria[pageSize]=10`
      );
      const categoryName = await axios.get(
        `http://localhost:3001/categories/${categoryId}`
      );

      return { ...response.data, name: categoryName.data.name };
    };
    getProducts(categoryId).then((data) => {
      if (mounted) {
        setData(data);
      }
    });

    return () => (mounted = false);
  });

  const products = data?.items?.map((item) => (
    <SwiperSlide>
      <Product sku={item.sku} />
    </SwiperSlide>
  ));

  return (
    <div class="container-indent">
      <div class="container container-fluid-custom-mobile-padding">
        <div class="pt-block-title">
          <h4 class="pt-title">{data?.name}</h4>
        </div>
        <div class="pt-tab-wrapper tt-ajax-tabs">
          <div class="tab-content">
            <div
              class="tab-pane show fade active"
              id="pt-tab-01"
              role="tabpanel"
            >
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={false}
                navigation={true}
                className=""
              >
                {products}
              </Swiper>
              {/* <div
                class="js-init-carousel js-align-arrow row arrow-location-center-02 pt-layout-product-item"
                data-item="5"
              >
              </div> */}
            </div>
            <div class="tab-pane fade" id="pt-tab-02" role="tabpanel"></div>
            <div class="tab-pane fade" id="pt-tab-03" role="tabpanel"></div>
            <div class="tab-pane fade" id="pt-tab-04" role="tabpanel"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
