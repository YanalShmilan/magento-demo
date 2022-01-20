import React from 'react';
import DesktopHeader from './DesktopHeader';
import HeaderUnderLine from './HeaderUnderLine';
import MobileHeader from './MobileHeader';
import MobileMenuHeader from './MobileMenuHeader';
import StuckNav from './StuckNav';

export default function TopPanel() {
  return (
    <>
      {' '}
      {/* <!-- pt-top-panel --> */}
      <div class="pt-top-panel">
        <div class="container">
          <div class="pt-row">
            <div class="pt-description">
              <strong>ENJOY AN EXTRA 40% OFF</strong> select sales styles
              <div class="pt-link-dropdown js-toppanel-link-dropdown">
                <button class="pt-dropdown-toggle">{''} More details</button>
                <div class="pt-dropdown-menu">
                  <div class="pt-dropdown-wrapper">
                    This offer is valid from 3:15 a.m. PT on January 23, 2019,
                    to 11:59 p.m. PT on February 19, 2019, on select sale
                    styles. Discount will{' '}
                    <a href="listing-left-column.html" target="_blank">
                      be automatically
                    </a>{' '}
                    reflected in cart. This offer is not valid on previously
                    purchased merchandise. This offer has no cash value. This
                    offer cannot be combined with any other offer, except for a
                    for free shipping.
                  </div>
                </div>
              </div>
            </div>
            <button class="pt-btn-close js-removeitem">
              <svg fill="none">
                <use href="#icon-close"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <!-- /pt-top-panel --> */}
      <HeaderUnderLine />
      {/* <!-- pt-mobile menu --> */}
      <MobileMenuHeader />
      {/* <!-- pt-mobile-header --> */}
      <MobileHeader />
      {/* <!-- pt-desktop-header --> */}
      <DesktopHeader />
      {/* <!-- stuck nav --> */}
      <StuckNav />
    </>
  );
}
