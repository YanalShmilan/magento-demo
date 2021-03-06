import React from 'react';

export default function Currency() {
  return (
    <div class="pt-desctop-parent-currency pt-parent-box">
      <div class="pt-currency pt-dropdown-obj02 js-dropdown">
        <button
          class="pt-dropdown-toggle"
          data-tooltip="Currency"
          data-tposition="bottom"
        >
          <span class="pt-dropdown-value">USD</span>
          <span class="pt-icon">
            <svg width="12" height="7" viewBox="0 0 12 7">
              <use href="#icon-arrow_small_bottom"></use>
            </svg>
          </span>
        </button>
        <div class="pt-dropdown-menu">
          <div class="pt-dropdown-inner">
            <ul>
              <li>
                <a data-value="USD" href="#">
                  $&nbsp;&nbsp;US Dollars
                </a>
              </li>
              <li>
                <a data-value="EUR" href="#">
                  €&nbsp;&nbsp;Euro
                </a>
              </li>
              <li>
                <a data-value="GBR" href="#">
                  £&nbsp;&nbsp;British Pounds
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
