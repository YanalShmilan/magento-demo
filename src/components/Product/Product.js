import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Brand from './Brand';
import ColorOptions from './Options/ColorOptions';
import PatternOptions from './Options/PatternOptions';
import SizeOptions from './Options/SizeOptions';

export default function Product({ sku }) {
  const [data, setData] = useState({
    name: '',
    extension_attributes: {
      stock_item: {
        is_in_stock: '',
      },
    },
    media_gallery_entries: [''],
    configurable_product_options: [''],
    selectedOption: null,
  });
  const [products, setProducts] = useState([]);
  const [options, setOptions] = useState();
  useEffect(() => {
    let mounted = true;
    const getProduct = async (sku) => {
      const response = await axios.get(`http://localhost:3001/products/${sku}`);
      const products = await axios.get(
        `http://localhost:3001/configurable-products/${sku}/children`
      );
      return { data: response.data, products: products.data };
    };

    getProduct(sku).then((data) => {
      if (mounted) {
        setData({ ...data.data, selectedOption: null });
        setProducts(data.products);
      }
    });

    return () => (mounted = false);
  }, []);
  const handleSetColor = (color) => {
    setOptions({ ...options, color });
    setData({ ...data, selectedOption: 's' });
    handleSetOptions();
  };
  const handleSetSize = (size) => {
    setOptions({ ...options, size });
    setData({ ...data, selectedOption: 's' });
    handleSetOptions();
  };

  const handleSetOptions = () => {
    let foundedProduct = products?.filter(
      (product) =>
        product?.custom_attributes?.find(
          (atr) => atr.attribute_code === 'color'
        )?.value == options.color
    );
    if (options.size) {
      foundedProduct = foundedProduct?.filter(
        (product) =>
          product?.custom_attributes?.find(
            (atr) => atr.attribute_code === 'size'
          )?.value == options.size
      );
    }
    console.log(options);
    console.log(foundedProduct);

    setData({ ...data, ...foundedProduct[0] });
  };

  return (
    <div class="">
      <div class="pt-product" data-rollover="images/product/product-01-02.jpg">
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
            <div class="pt-imgs">
              {/* changed from img to imgs to remove hover */}
              <img
                src={
                  'https://cms.mamasfirst.com/media/catalog/product/' +
                  data?.custom_attributes?.find(
                    (atr) => atr.attribute_code === 'thumbnail'
                  )?.value
                }
                alt="imageo"
              />
            </div>
            <span class="pt-label-location">
              {data?.extension_attributes?.stock_item?.is_in_stock ===
                false && <span class="pt-label-out-stock">OUT OF STOCK</span>}
              {data?.custom_attributes?.find(
                (att) => att.attribute_code === 'special_price'
              )?.value !== undefined ? (
                <span class="pt-label-sale">SALE</span>
              ) : null}
            </span>
          </a>
        </div>
        <div class="pt-description">
          <div class="pt-col">
            <ul class="pt-add-info">
              <li>
                <Brand
                  brand={
                    data?.custom_attributes?.find(
                      (atr) => atr.attribute_code === 'product_brand'
                    )?.value
                  }
                />
              </li>
            </ul>
            <h2 class="pt-title">
              <a href="product-type-03.html">{data.name}</a>
            </h2>
            <div class="pt-price">$24</div>
            <div class="pt-option-block">
              {/* <!-- options pattern --> */}
              {/* <PatternOptions
                data={data}
                setData={setData}
                options={data?.extension_attributes?.configurable_product_links}
              /> */}
              {/* <!-- options color --> */}
              <ColorOptions
                handleSetColor={handleSetColor}
                options={data?.extension_attributes?.configurable_product_options?.find(
                  (att) => att.label === 'Color'
                )}
              />
              {/* <!-- options size --> */}
              <SizeOptions
                handleSetSize={handleSetSize}
                options={data?.extension_attributes?.configurable_product_options?.find(
                  (att) => att.label === 'Size'
                )}
              />
            </div>
          </div>
          <div class="pt-col">
            <div class="pt-row-hover">
              <a
                href="#"
                class={
                  data?.extension_attributes?.stock_item?.is_in_stock
                    ? 'pt-btn-addtocart'
                    : 'pt-btn-addtocart pt-disable'
                }
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
                <span class="pt-text">
                  {data?.extension_attributes?.configurable_product_links
                    ?.length > 0 && options === undefined
                    ? 'Select Option First'
                    : data?.extension_attributes?.stock_item?.is_in_stock
                    ? `ADD TO CART`
                    : 'SOLD OUT'}
                </span>
              </a>
              <div class="pt-price">
                <span class="old-price">
                  {data?.custom_attributes?.find(
                    (att) => att.attribute_code === 'special_price'
                  )?.value ? (
                    <>{data?.price} KWD</>
                  ) : null}
                </span>
                <span class="new-price">
                  {data?.custom_attributes?.find(
                    (att) => att.attribute_code === 'special_price'
                  )?.value
                    ? parseFloat(
                        data?.custom_attributes?.find(
                          (att) => att.attribute_code === 'special_price'
                        )?.value
                      ).toFixed(3)
                    : data?.price}
                  KWD
                </span>
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
                  class="pt-btn-quickview"
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
