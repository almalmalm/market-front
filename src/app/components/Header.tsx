import React from 'react';
import { MenuItem } from './MenuItem';
import styles from '@/app/styles/Header.module.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className={styles.menu_container}>
      <Link href="/">
        <img src="market-marketplace-high-resolution-logo-transparent.svg" alt="Logo" width={200} />
      </Link>
      <div className={styles.menu_items}>
        <MenuItem href="/home" name="Home" />
        <MenuItem href="/categories" name="Categories" />
        <MenuItem href="/deals" name="Deals" />
        <MenuItem href="/sell" name="Sell" />
        <MenuItem href="/about" name="About" />
        <MenuItem href="/support" name="Support" />
        <MenuItem href="/faq" name="FAQ" />
        <MenuItem href="/account" name="Account" />
      </div>
      <Link href="/cart">
        <img src="shopping-cart.svg" alt="Cart icon" width={48} />
      </Link>
    </div>
  );
};
