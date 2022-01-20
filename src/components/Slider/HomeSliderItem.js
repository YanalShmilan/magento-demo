import React from 'react';

export default function HomeSliderItem() {
  return (
    <div class="slide">
      <div class="img--holder">
        <picture>
          <img
            src="https://cms.mamasfirst.com/media/slidebanner/h/a/haakaalifestyleeng_1200x_2.jpg"
            alt=""
          />
        </picture>
      </div>
      <div class="slide-content">
        {/* remove pt-point-h-l to center it */}
        <div class="pt-container text-center">
          {/* add text-center to center it */}
          <div class="tp-caption1-wd-1">Some Text</div>
          <div class="tp-caption1-wd-2">
            Some header
            <br />
            Some header
          </div>
          <div class="tp-caption1-wd-3 pt-text-color">SubText.</div>
          <div class="tp-caption1-wd-4">
            <a
              href="listing-left-column.html"
              target="_blank"
              class="btn"
              data-text="DISCOVER NOW!"
            >
              A BUTTON TO GO SOMEWHERE!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
