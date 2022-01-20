import React from 'react';
import Account from './Account';
import Compare from './Compare';
import SearchbarContent from './SearchbarContent';
import WishList from './WishList';
import Cart from './Cart';
import Currency from './Currency';
import Language from './Language';
import DesktopMenu from './DesktopMenu';
import Searchbar from './Searchbar';

export default function DesktopHeader() {
  return (
    <div class="pt-desktop-header">
      <div class="container-fluid">
        <div class="headinfo-box form-inline">
          {/* <!-- logo --> */}
          <div
            class="pt-logo pt-logo-alignment"
            itemscope
            itemtype="http://schema.org/Organization"
          >
            <a href="index.html" itemprop="url">
              <img
                class="pt-title"
                src="https://cms.mamasfirst.com/media/logo/stores/1/mamas-logo-w230.png"
              />
            </a>
          </div>
          {/* <!-- /logo --> */}
          <SearchbarContent />
          <div class="options">
            {/* <!-- pt-search --> */}
            <Searchbar />
            {/* <!-- /pt-search -->
    <!-- pt-account --> */}
            <Account />
            {/* <!-- /pt-account -->
    <!-- pt-compare --> */}
            <Compare />
            {/* <!-- /pt-compare -->
    <!-- pt-wishlist --> */}
            <WishList />
            {/* <!-- /pt-wishlist -->
    <!-- pt-cart --> */}
            <Cart />
            {/* <!-- /pt-cart --> */}
            <Language />
            <Currency />
          </div>
        </div>
      </div>
      <DesktopMenu />
    </div>
  );
}
