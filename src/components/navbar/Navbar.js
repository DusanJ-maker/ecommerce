import React from 'react';
import styles from '../navbar/Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faCartShopping, faBagShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar({ switchTheme }) {

    const moonIcon = <FontAwesomeIcon icon={faMoon} />
    const logoIcon = <FontAwesomeIcon icon={faCartShopping} />

    return (
        <div className={styles.centralDiv}>
            <div className={styles.parentNavFlex}>
                <div>
                    {logoIcon}
                </div>
                <ul className={styles.navItemFlex}>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Cart</li>
                    <li><button onClick={switchTheme}>{moonIcon}</button></li>
                    <li><img src='https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg' alt='userImg'></img></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar