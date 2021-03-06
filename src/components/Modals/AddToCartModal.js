import React from 'react';

export default function AddToCartModal() {
  return (
    <div
      class="modal fade"
      id="modalAddToCart"
      tabindex="-1"
      role="dialog"
      data-srcvalue="ajax-content/ajax_modal-add-to-cart.html"
      aria-label="myModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-sm">
        <div class="modal-content">
          <div class="modal-body noindent">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                <span class="icon icon-clear"></span>
              </button>
            </div>
            <div class="pt-modal-addtocart">
              <h6 class="pt-title-modal">Added to Cart Successfully!</h6>
              <div class="pt-modal-product">
                <div class="pt-img">
                  <img
                    src="images/product/product-01.jpg"
                    alt="Push Up Low Rise Jeans"
                  />
                </div>
                <h2 class="pt-title">
                  <a href="product.html">Midi button-up denim skirt</a>
                </h2>
                <ul class="pt-add-info">
                  <li>
                    <a href="#">White</a>
                  </li>
                  <li>
                    <a href="#">XS</a>
                  </li>
                </ul>
                <div class="pt-qty">
                  1 x <strong>$35.89</strong>
                </div>
                <a href="#" class="pt-cart-total">
                  There are 2 items in your cart
                  <div class="pt-total">
                    Total: <span class="pt-price">$78.96</span>
                  </div>
                </a>
                <a href="#" class="btn btn-block btn-dark" data-dismiss="modal">
                  <div class="pt-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <use href="#icon-arrow_large_left"></use>
                    </svg>
                  </div>
                  <span class="pt-text">Continue Shopping</span>
                </a>
                <a
                  href="page-shopping_cart.html"
                  class="btn btn-border btn-block"
                >
                  View Cart
                </a>
                <div class="btn-block">
                  <div class="checkbox-group">
                    <input
                      type="checkbox"
                      id="checkBox-addtocart"
                      name="checkbox"
                      checked=""
                    />
                    <label for="checkBox-addtocart">
                      <span class="check"></span>
                      <span class="box"></span>I agree with the terms and
                      conditions
                    </label>
                  </div>
                </div>
                <a href="#" class="btn btn-block disable">
                  PROCEED TO CHECKOUT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
