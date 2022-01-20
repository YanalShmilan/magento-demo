import React from 'react';

export default function WishList() {
  return (
    <div class="pt-desctop-parent-wishlist pt-parent-box">
      <div class="pt-wishlist pt-dropdown-obj">
        <a
          href="page-wishlist.html"
          class="pt-dropdown-toggle"
          data-tooltip="Wishlist"
          data-tposition="bottom"
        >
          <span class="pt-icon">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <use href="#icon-wishlist"></use>
            </svg>
          </span>
          <span class="pt-text">Wishlist</span>
          <span class="pt-badge">13</span>
        </a>
      </div>
    </div>
  );
}
