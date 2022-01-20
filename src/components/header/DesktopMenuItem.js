import React from 'react';
import DesktopMenuSubMenu from './DesktopMenuSubMenu';
import FeaturedProductsSlider from './FeaturedProductsSlider';
import CategoryBanner from './CategoryBanner';
export default function DesktopMenuItem({ name, sub, id }) {
  const subCategories = sub.map((subCategory) => (
    <DesktopMenuSubMenu
      name={subCategory.name}
      sub={subCategory.children_data}
    />
  ));
  if (subCategories.length < 1) {
    return (
      <li class={'dropdown megamenu'}>
        <a href="listing-left-column.html">
          <span>{name}</span>
        </a>
      </li>
    );
  }

  return (
    <li class="dropdown megamenu">
      <a href="listing-left-column.html">
        <span>{name}</span>
      </a>
      <div class="dropdown-menu">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <div class="row pt-col-list">{subCategories}</div>
            </div>
            <FeaturedProductsSlider id={id} />
          </div>
        </div>
        {/* <CategoryBanner /> */}
      </div>
    </li>
  );
}
