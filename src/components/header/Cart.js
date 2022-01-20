import React from 'react';

export default function Cart() {
  return (
    <div class="pt-desctop-parent-cart pt-parent-box">
      <div
        class="pt-cart pt-dropdown-obj js-dropdown"
        data-ajax="ajax-content/ajax_dropdown-cart.html"
      >
        <button
          class="pt-dropdown-toggle"
          data-tooltip="Cart"
          data-tposition="bottom"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use href="#icon-cart_1"></use>
          </svg>
          <span class="pt-badge">2</span>
        </button>
        <div class="pt-dropdown-menu"></div>
      </div>
    </div>
  );
}
