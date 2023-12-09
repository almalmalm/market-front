import Image from 'next/image';
import React from 'react';
import { Search } from './Search';
import { Menu } from './Menu';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="header__container">
      <Link href="/" className="header__logo_nike">
        <Image src="/nike_logo.svg" alt="Nike logo" width={58} height={58} className="header__logo_hovered" />
      </Link>
      <Menu />
      <Search />
      <Link href="/favorites" className="header__icon header__icon_hovered">
        <Image src="/favorite_icon.svg" alt="Favorites icon" width={24} height={24} />
      </Link>
      <Link href="/cart" className="header__icon header__icon_hovered">
        <Image src="/bag_icon.svg" alt="Bag icon" width={24} height={24} className="header__icon_hovered" />
      </Link>
    </header>
  );
};
