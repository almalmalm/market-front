import React from 'react';
import styles from '@/app/styles/Header.module.css';
import Link from 'next/link';

interface MenuItem {
  name: string;
  href: string;
}

export const MenuItem: React.FC<MenuItem> = ({ name, href }) => {
  return (
    <Link href={href} className={styles.menu_link}>
      {name}
    </Link>
  );
};
