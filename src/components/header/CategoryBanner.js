import React from 'react';

export default function CategoryBanner() {
  return (
    <div class="row">
      <div class="col-sm-6">
        <a href="listing-left-column.html" class="pt-promo-desktopMenu">
          <div class="pt-img">
            <img
              src="https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png"
              class="lazyload"
              data-src="https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png"
              alt="Complete Your Look"
            />
          </div>
          <div class="pt-description pt-point-h-l pt-point-v-t">
            <div class="pt-description-wrapper">
              <div class="pt-title-large">
                <span>Banner 1</span>
              </div>
              <div class="pt-title-small">Banner 1 description</div>
            </div>
          </div>
        </a>
      </div>
      <div class="col-sm-6">
        <a href="listing-left-column.html" class="pt-promo-desktopMenu">
          <div class="pt-img">
            <img
              src="https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png"
              class="lazyload"
              alt="Collections 2019/20"
            />
          </div>
          <div class="pt-description pt-point-h-l pt-point-v-t">
            <div class="pt-description-wrapper">
              <div class="pt-title-large pt-color-white">
                <span>Baner 2</span>
              </div>
              <div class="pt-title-small pt-color-white">
                Baner 2 description
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
