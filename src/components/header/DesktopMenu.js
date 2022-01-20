import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DesktopMenuItem from './DesktopMenuItem';

export default function DesktopMenu() {
  const [data, setData] = useState([]);
  useEffect(() => {
    let mounted = true;
    const getCategories = async () => {
      const response = await axios.get(
        'http://localhost:3001/categories?fields=children_data[name,children_data,is_active,id]'
      );
      return response.data.children_data.filter(
        (category) => category.is_active === true
      );
    };
    getCategories().then((data) => {
      if (mounted) {
        setData(data);
      }
    });

    return () => (mounted = false);
  }, []);

  const categories = data.map((category) => (
    <DesktopMenuItem
      id={category.id}
      name={category.name}
      sub={category.children_data}
    />
  ));

  return (
    <div class="container-fluid  headinfo-color">
      <div class="headnav-box">
        <div class="menu-bg menu-small-inner">
          <div class="pt-desctop-parent-menu">
            <div class="pt-desctop-menu">
              <nav>
                <ul>{categories}</ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
