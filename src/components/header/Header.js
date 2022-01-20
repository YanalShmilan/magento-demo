import React from 'react';
import DesktopHeader from './DesktopHeader';
import HeaderUnderLine from './HeaderUnderLine';
import MobileHeader from './MobileHeader';
import MobileMenuHeader from './MobileMenuHeader';
import StuckNav from './StuckNav';

export default function Header() {
  return (
    <header id="pt-header">
      <HeaderUnderLine />
      {/* <!-- pt-mobile menu --> */}
      <MobileMenuHeader />
      {/* <!-- pt-mobile-header --> */}
      <MobileHeader />
      {/* <!-- pt-desktop-header --> */}
      <DesktopHeader />
      {/* <!-- stuck nav --> */}
      <StuckNav />
    </header>
  );
}
