import React from 'react';
import { IItemProps } from '../types/Interfaces';
import styles from '@/app/styles/Item.module.css';

const Item: React.FC<IItemProps> = ({ name, price, quantity, image, _id, onClick }) => {
  return (
    <div className={styles.item_container}>
      <img src={image} alt={name} width={250} />
      <span>{name}</span>
      <span>${price}</span>
      <span>{quantity}</span>
      <button onClick={() => onClick(_id)}>Delete</button>
    </div>
  );
};

export default Item;
