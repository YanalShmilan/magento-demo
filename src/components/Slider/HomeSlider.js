import React from 'react';
import HomeSliderItem from './HomeSliderItem';

export default function HomeSlider() {
  return (
    <div class="container-indent nomargin">
      <div class="mainSlider-layout">
        <div class="mainSliderSlick mainSliderSlick-js arrow-slick-main">
          <HomeSliderItem />
          <HomeSliderItem />
          <HomeSliderItem />
        </div>
      </div>
    </div>
  );
}
