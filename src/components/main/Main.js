import React from 'react';
import styles from '../main/Main.module.css';
import CardProduct from '../cardProduct/CardProduct';

function Main() {
    return (
        <div className={styles.centralDiv}>
            <div className={styles.containerGrid}>
                <CardProduct />
            </div>
        </div>
    )
}

export default Main