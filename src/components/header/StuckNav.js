import React from 'react';

export default function StuckNav() {
  return (
    <div class="pt-stuck-nav">
      <div class="container-fluid">
        <div class="pt-header-row ">
          <div class="pt-stuck-parent-menu"></div>
          <div class="pt-logo-container">
            {/* <!-- mobile logo --> */}
            <div
              class="pt-logo pt-logo-alignment"
              itemscope
              itemtype="http://schema.org/Organization"
            >
              <a href="index.html" itemprop="url">
                <h2 class="pt-title">Yanka</h2>
              </a>
            </div>
            {/* <!-- /mobile logo --> */}
          </div>
          <div class="pt-stuck-parent-search pt-parent-box"></div>
          <div class="pt-stuck-parent-account pt-parent-box"></div>
          <div class="pt-stuck-parent-compare pt-parent-box"></div>
          <div class="pt-stuck-parent-wishlist pt-parent-box"></div>
          <div class="pt-stuck-parent-cart pt-parent-box"></div>
        </div>
      </div>
    </div>
  );
}
