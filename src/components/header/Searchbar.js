import React from 'react';

export default function Searchbar() {
  return (
    <div class="pt-desctop-parent-search pt-hidden-obj pt-parent-box">
      <div class="pt-search pt-dropdown-obj js-dropdown">
        <button
          class="pt-dropdown-toggle"
          data-tooltip="Search"
          data-tposition="bottom"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use href="#icon-search"></use>
          </svg>
        </button>
        <div class="pt-dropdown-menu">
          <div class="container">
            <form>
              <div class="pt-col">
                <input
                  type="text"
                  class="pt-search-input"
                  placeholder="Search products..."
                />
                <button class="pt-btn-search" type="submit">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <use href="#icon-search"></use>
                  </svg>
                </button>
              </div>
              <div class="pt-col">
                <button class="pt-btn-close">
                  <svg width="16" height="16" viewBox="0 0 16 16">
                    <use href="#icon-close"></use>
                  </svg>
                </button>
              </div>
              <div class="pt-info-text">What are you Looking for?</div>
              <div class="search-results"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
