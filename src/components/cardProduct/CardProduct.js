import React from 'react';
import styles from '../cardProduct/CardProduct.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { products } from '../../utilities/products';

function CardProduct() {

    console.log(products)

    const addIcon = <FontAwesomeIcon icon={faCirclePlus} />

    return (
        <>
            {products.map((product) => {

                return <div className={styles.gridItem}>
                    <div className={styles.card}>
                        <div className={styles.imgDiv}>
                            <img src={product.img}
                                alt='productImg'>
                            </img>
                        </div>
                        <div className={styles.infoFlex}>
                            <h3>{product.productName}</h3>
                            <h4>{product.category}</h4>
                        </div>
                        <div className={styles.priceFlex}>
                            <h4>${product.price}</h4>
                            {addIcon}
                        </div>
                    </div>
                </div>
            })}
        </>
    )
}

export default CardProduct