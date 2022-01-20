import React from 'react';

export default function Compare() {
  return (
    <div class="pt-desctop-parent-compare pt-parent-box">
      <div class="pt-compare pt-dropdown-obj">
        <a
          href="page-compare.html"
          class="pt-dropdown-toggle"
          data-tooltip="Compare"
          data-tposition="bottom"
        >
          <span class="pt-icon">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <use href="#icon-compare"></use>
            </svg>
          </span>
          <span class="pt-text">Compare</span>
          <span class="pt-badge">4</span>
        </a>
      </div>
    </div>
  );
}
