import React from 'react';

export default function Account() {
  return (
    <div class="pt-desctop-parent-account pt-parent-box">
      <div class="pt-account pt-dropdown-obj js-dropdown">
        <button
          class="pt-dropdown-toggle"
          data-tooltip="My Account"
          data-tposition="bottom"
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <use href="#icon-user"></use>
          </svg>
        </button>
        <div class="pt-dropdown-menu">
          <div class="pt-mobile-add">
            <button class="pt-close">
              <svg>
                <use href="#icon-close"></use>
              </svg>
              Close
            </button>
          </div>
          <div class="pt-dropdown-inner">
            <ul>
              <li>
                <a href="page-login.html">
                  <i class="pt-icon">
                    <svg width="18" height="23">
                      <use href="#icon-lock"></use>
                    </svg>
                  </i>
                  <span class="pt-text">Sign In</span>
                </a>
              </li>
              <li>
                <a href="page-registration.html">
                  <i class="pt-icon pt-align-icon">
                    <svg width="24" height="24">
                      <use href="#icon-user"></use>
                    </svg>
                  </i>
                  <span class="pt-text">Register</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
