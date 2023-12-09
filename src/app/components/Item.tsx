import React from 'react';
import { IItemProps } from '../types/Interfaces';

const Item: React.FC<IItemProps> = ({ name, price, quantity, image, _id, deleteItem, addToCart, isInCart }) => {
  return (
    <div>
      <img src={image} alt={name} width={250} />
      <span>{name}</span>
      <span>${price}</span>
      <span>{quantity}</span>
      {isInCart ? <button>Remove</button> : <button onClick={() => addToCart(_id)}>Buy</button>}
      <button onClick={() => deleteItem(_id)}>Delete</button>
    </div>
  );
};

export default Item;
