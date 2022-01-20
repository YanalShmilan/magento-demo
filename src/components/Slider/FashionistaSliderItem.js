import React from 'react';

export default function FashionistaSliderItem() {
  return (
    <div class="col-sm-6 col-md-4">
      <div class="pt-promo-card movecontent">
        <a href="#" class="image-box">
          <img
            class="lazyload"
            src="https://floward.imgix.net/web/Files/cat_images/c831245c-7376-4165-b98c-ecd6d33691a1.jpg?w=255&h=255&fit=crop&auto=compress,format"
            alt="NEW COLLETION"
          />
        </a>
        <div class="pt-description">
          <a href="#" class="pt-title">
            <div class="pt-title-small">NEW COLLETION</div>
            <div class="pt-title-large">
              <span>Bibi`s collection</span>
            </div>
          </a>
          <p>some subtext.</p>
          <a href="#" class="btn">
            DISCOVER NOW!
          </a>
        </div>
      </div>
    </div>
  );
}
