import React from 'react';

export default function SearchbarContent() {
  return (
    <div class="navinfo cont-center">
      <div class="pt-search-02 size-xl">
        <form>
          <div class="search-form">
            <input
              type="text"
              class="pt-search-input"
              placeholder="Search products..."
            />
            <button class="pt-btn-search" type="submit">
              <svg>
                <use href="#icon-search"></use>
              </svg>
            </button>
          </div>
          <div class="search-results">
            <ul>
              <li>
                <a href="product.html">
                  <div class="thumbnail">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAOCAQMAAACvc5NpAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAHBJREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg9uCABAAAAEDQ/9f9CBUAAAAAAAAAAAAAAAAAAAAAAGAiOEEAAVstZ/kAAAAASUVORK5CYII="
                      class="lazyload"
                      data-src="images/product/product-15.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="pt-description">
                    <div class="pt-title">Midi button-up denim skirt</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="product.html">
                  <div class="thumbnail">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAOCAQMAAACvc5NpAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAHBJREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg9uCABAAAAEDQ/9f9CBUAAAAAAAAAAAAAAAAAAAAAAGAiOEEAAVstZ/kAAAAASUVORK5CYII="
                      class="lazyload"
                      data-src="images/product/product-09.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="pt-description">
                    <div class="pt-title">Printed dress</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="product.html">
                  <div class="thumbnail">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAOCAQMAAACvc5NpAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAHBJREFUeNrswYEAAAAAgKD9qRepAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg9uCABAAAAEDQ/9f9CBUAAAAAAAAAAAAAAAAAAAAAAGAiOEEAAVstZ/kAAAAASUVORK5CYII="
                      class="lazyload"
                      data-src="images/product/product-13.jpg"
                      alt="image"
                    />
                  </div>
                  <div class="pt-description">
                    <div class="pt-title">Corduroy backpack</div>
                  </div>
                </a>
              </li>
            </ul>
            <a href="empty-search.html" class="pt-view-all btn-link btn-lg">
              <span class="pt-text">View All Products</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
