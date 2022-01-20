import React from 'react';

export default function HeaderUnderLine() {
  return (
    <div class="headerunderline">
      <div class="container-fluid">
        <div class="pt-header-row pt-top-row no-gutters">
          <div class="pt-col-left col-3">
            <div class="pt-box-info">
              <ul>
                <li>
                  EXPRESS DELIVERY
                  {/* <strong class="pt-base-dark-color">1–1–111111</strong> */}
                </li>
              </ul>
            </div>
          </div>
          <div class="pt-col-center col-6">
            <div class="pt-box-info">
              <ul class="js-header-slider pt-slider-smoothhiding slick-animated-show">
                <li>
                  <strong class="pt-base-dark-color">Some Message</strong>{' '}
                  Message description{' '}
                  <a
                    href="page-faq.html"
                    target="_blank"
                    class="pt-link-underline"
                  >
                    Some link
                  </a>
                </li>
                <li>
                  <strong class="pt-base-dark-color">Some Message</strong>{' '}
                  Message description{' '}
                  <a
                    href="page-faq.html"
                    target="_blank"
                    class="pt-link-underline"
                  >
                    Some link
                  </a>
                </li>
                <li>
                  <strong class="pt-base-dark-color">Some Message</strong>{' '}
                  Message description{' '}
                  <a
                    href="page-faq.html"
                    target="_blank"
                    class="pt-link-underline"
                  >
                    Some link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="pt-col-right col-3 ml-auto">
            <div class="pt-desctop-parent-submenu pt-parent-box">
              <ul class="submenu">
                <li>
                  <a target="_blank" href="https://www.facebook.com/">
                    <span class="icon">
                      <svg width="11" height="19" viewBox="0 0 11 19">
                        <use href="#icon-social_icon_facebook"></use>
                      </svg>
                    </span>
                    <span class="text">Facebook</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com">
                    <span class="icon">
                      <svg width="18" height="18" viewBox="0 0 18 18">
                        <use href="#icon-social_icon_1"></use>
                      </svg>
                    </span>
                    <span class="text">Twitter</span>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://www.instagram.com">
                    <span class="icon">
                      <svg width="18" height="19" viewBox="0 0 18 19">
                        <use href="#icon-social_icon_instagram"></use>
                      </svg>
                    </span>
                    <span class="text">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
