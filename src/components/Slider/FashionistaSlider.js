import React from 'react';
import FashionistaSliderItem from './FashionistaSliderItem';

export default function FashionistaSlider() {
  return (
    <div class="pt-offset-small container-indent">
      <div class="container-fluid">
        <div class="pt-layout-promo-box">
          <div
            class="row js-init-carousel js-align-arrow row arrow-location-center js-promo-align-arrow slickDots-indent-1"
            data-item="3"
            data-itemmobile="1"
          >
            <FashionistaSliderItem />
            <FashionistaSliderItem />
            <FashionistaSliderItem />
            <FashionistaSliderItem />
            <FashionistaSliderItem />
          </div>
        </div>
      </div>
    </div>
  );
}
