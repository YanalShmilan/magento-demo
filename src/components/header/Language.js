import React from 'react';

export default function Language() {
  return (
    <div class="pt-desctop-parent-language pt-parent-box">
      <div class="pt-language pt-dropdown-obj02 js-dropdown">
        <button
          class="pt-dropdown-toggle"
          data-tooltip="Language"
          data-tposition="bottom"
        >
          <span class="pt-dropdown-value">Eng</span>
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
                <a data-value="English" href="#">
                  Eng
                </a>
              </li>
              <li>
                <a data-value="German" href="#">
                  Ger
                </a>
              </li>
              <li>
                <a data-value="Spanish" href="#">
                  Span
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
