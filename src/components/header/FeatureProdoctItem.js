import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function FeatureProdoctItem({ item }) {
  return (
    <a href="product-type-01.html" class="pt-product" target="_blank">
      <div class="pt-img-blox">
        <span class="pt-img">
          <img
            src={
              'https://cms.mamasfirst.com/media/catalog/product/' +
              item?.media_gallery_entries[0]?.file
            }
            class="lazyload"
            data-src="images/product/product-01.jpg"
            alt="Midi button-up denim skirt"
          />
        </span>
      </div>
      <div class="pt-description">
        <h2 class="pt-title">{item?.name}</h2>
        <div class="pt-price">{item?.price + ' kwd'}</div>
      </div>
    </a>
  );
}
