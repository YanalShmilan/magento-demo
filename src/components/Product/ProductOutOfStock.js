import React from 'react';

export default function ProductOutOfStock() {
  return (
    <div class="col-6 col-md-4 col-lg-3">
      <div class="pt-product" data-rollover="images/product/product-02-02.jpg">
        <div class="pt-image-box">
          <div class="pt-app-btn">
            <a
              href="#"
              class="pt-btn-wishlist"
              data-tooltip="Add to Wishlist"
              data-tposition="left"
            >
              <svg>
                <use href="#icon-wishlist"></use>
              </svg>
              <svg>
                <use href="#icon-wishlist-add"></use>
              </svg>
            </a>
            <a
              href="#"
              class="pt-btn-compare"
              data-tooltip="Add to Compare"
              data-tposition="left"
            >
              <svg>
                <use href="#icon-compare"></use>
              </svg>
              <svg>
                <use href="#icon-compare-add"></use>
              </svg>
            </a>
            <a
              href="#"
              class="pt-btn-quickview"
              data-toggle="modal"
              data-target="#ModalquickView"
              data-tooltip="Quick View"
              data-tposition="left"
            >
              <svg>
                <use href="#icon-quick_view"></use>
              </svg>
            </a>
          </div>
          <a href="product-type-03.html" class="block-once">
            <div class="pt-img">
              <picture>
                <source
                  srcset="images/product/product-02.webp"
                  type="image/webp"
                />
                <source
                  srcset="images/product/product-02.jpg"
                  type="image/jpg"
                />
                <img
                  class="lazyload"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAOCAQMAAACvc5NpAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAHBJREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg9uCABAAAAEDQ/9f9CBUAAAAAAAAAAAAAAAAAAAAAAGAiOEEAAVstZ/kAAAAASUVORK5CYII="
                  data-lazy="images/product/product-02.webp"
                  alt="image"
                />
              </picture>
            </div>
            <span class="pt-label-location">
              <span class="pt-label-sale">SALE -27%</span>
            </span>
          </a>
        </div>
        <div class="pt-description">
          <div class="pt-col">
            <ul class="pt-add-info">
              <li>
                <a href="#">WOMEN’S</a>
              </li>
            </ul>
            <h2 class="pt-title">
              <a href="product-type-03.html">Printed dress</a>
            </h2>
            <div class="pt-price">$24</div>
            <div class="pt-option-block">
              {/* <!-- options switch image --> */}
              <ul class="pt-options-swatch js-change-img">
                <li class="active" data-availability="false">
                  <a
                    href="#"
                    class="options-color-img"
                    data-src="images/product/product-02.jpg"
                  ></a>
                </li>
                <li data-availability="false">
                  <a
                    href="#"
                    class="options-color-img"
                    data-src="images/product/product-02-02.jpg"
                  ></a>
                </li>
              </ul>
              {/* <!-- options pattern --> */}
              <ul class="pt-options-swatch js-change-img">
                <li class="active" data-availability="false">
                  <a
                    href="#"
                    class="options-color-img"
                    data-src="images/product/product-02-03.jpg"
                    data-src-demo="images/product/pattern-item/filter_color10.png"
                    data-tooltip="Cotton"
                  ></a>
                </li>
                <li data-availability="false">
                  <a
                    href="#"
                    class="options-color-img"
                    data-src="images/product/product-02-04.jpg"
                    data-src-demo="images/product/pattern-item/filter_color11.png"
                    data-tooltip="Silk"
                  ></a>
                </li>
              </ul>
              {/* <!-- options color --> */}
              <ul class="pt-options-swatch">
                <li data-availability="false" class="active">
                  <span class="availability-icon"></span>
                  <a class="options-color pt-color-bg-12" href="#"></a>
                </li>
                <li data-availability="false">
                  <span class="availability-icon"></span>
                  <a class="options-color pt-color-bg-02" href="#"></a>
                </li>
                <li data-availability="false">
                  <span class="availability-icon"></span>
                  <a class="options-color pt-color-bg-13" href="#"></a>
                </li>
              </ul>
              {/* <!-- options size --> */}
              <ul class="pt-options-swatch">
                <li data-availability="false" class="active">
                  <a href="#">XS</a>
                </li>
                <li data-availability="false">
                  <a href="#">S</a>
                </li>
                <li data-availability="false">
                  <a href="#">M</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="pt-col">
            <div class="pt-row-hover">
              <a
                href="#"
                class="pt-btn-addtocart pt-disable"
                data-toggle="modal"
                data-target="#modalAddToCart"
              >
                <div class="pt-icon">
                  <svg>
                    <use href="#icon-cart_1"></use>
                  </svg>
                  <svg>
                    <use href="#icon-cart_1_plus"></use>
                  </svg>
                  <svg>
                    <use href="#icon-cart_1_disable"></use>
                  </svg>
                </div>
                <span class="pt-text">SOLD OUT</span>
              </a>
              <div class="pt-price">
                <span class="old-price">$78.89</span>
                <span class="new-price">$48.89</span>
              </div>
              <div class="pt-wrapper-btn">
                <a href="#" class="pt-btn-wishlist">
                  <span class="pt-icon">
                    <svg>
                      <use href="#icon-wishlist"></use>
                    </svg>
                    <svg>
                      <use href="#icon-wishlist-add"></use>
                    </svg>
                  </span>
                  <span class="pt-text">Add to wishlist</span>
                </a>
                <a href="#" class="pt-btn-compare">
                  <span class="pt-icon">
                    <svg>
                      <use href="#icon-compare"></use>
                    </svg>
                    <svg>
                      <use href="#icon-compare-add"></use>
                    </svg>
                  </span>
                  <span class="pt-text">Add to compare</span>
                </a>
                <a
                  href="#"
                  class="pt-btn-quickview pt-disable"
                  data-toggle="modal"
                  data-target="#ModalquickView"
                >
                  <span class="pt-icon">
                    <svg>
                      <use href="#icon-quick_view"></use>
                    </svg>
                  </span>
                  <span class="pt-text">Zoom</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
