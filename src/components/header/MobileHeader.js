import React from 'react';

export default function MobileHeader() {
  return (
    <div class="pt-mobile-header">
      <div class="container-fluid">
        <div class="pt-header-row">
          {/* <!-- mobile menu toggle --> */}
          <div class="pt-mobile-parent-menu">
            <div class="pt-menu-toggle">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <use href="#icon-mobile-menu-toggle"></use>
              </svg>
            </div>
          </div>
          {/* <!-- /mobile menu toggle --> */}
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
          {/* <!-- search --> */}
          <div class="pt-mobile-parent-search pt-parent-box"></div>
          {/* <!-- /search -->
    <!-- cart --> */}
          <div class="pt-mobile-parent-cart pt-parent-box"></div>
          {/* <!-- /cart --> */}
        </div>
      </div>
    </div>
  );
}
