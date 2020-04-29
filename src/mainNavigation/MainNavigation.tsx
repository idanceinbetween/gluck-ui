import React from 'react';
import { Link } from 'react-router-dom';
import styles from './mainNavigation.module.scss';
import Logo from './assets/logo.png';

export function MainNavigation() {
  return (
    <nav role={'navigation'} className={styles.mainNav}>
      <div className={styles.mainNavLogoContainer}>
        <div className={styles.mainNavItemsContent}>
          <img alt={'logo'} src={Logo} />
        </div>
        <div className={styles.mainNavItemsContent}>glūck</div>
      </div>
      <div className={styles.mainNavItemsContainer}>
        <ul className={styles.mainNavItemsContent}>
          <li>All Gifts</li>
          <li>
            <Link to={'/about'}>About</Link>
          </li>
          <li>Add A Gift</li>
          <li>My Exchanges</li>
          <li>My Account</li>
        </ul>
      </div>
    </nav>
  );
}
