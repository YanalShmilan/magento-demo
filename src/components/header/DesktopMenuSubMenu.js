import React from 'react';
import DesktopMenuSubItem from './DesktopMenuSubItem';

export default function DesktopMenuSubMenu({ name, sub }) {
  const subSubCategories = sub.map((subSubCategory) => (
    <DesktopMenuSubItem name={subSubCategory.name} />
  ));
  return (
    <div class="col-sm-4">
      <a class="pt-title-submenu" href="listing-left-column.html">
        {name}
      </a>
      <ul class="pt-megamenu-submenu">{subSubCategories}</ul>
    </div>
  );
}
