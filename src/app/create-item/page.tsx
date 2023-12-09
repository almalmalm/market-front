'use client';
import React, { useEffect, useState } from 'react';
import { Form } from '../components/Form';
import axios from 'axios';
import { IItem } from '../types/Interfaces';
import Item from '../components/Item';

export default function Items() {
  const [items, setItems] = useState<IItem[]>([]);
  const [isInCart, setIsInCart] = useState(false);

  const fetchItems = () => {
    fetch('https://market-api-almalmalm.vercel.app/items')
      .then((response) => response.json())
      .then((responseData) => setItems(responseData));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const deleteItem = async (id: string) => {
    try {
      await axios.delete(`https://market-api-almalmalm.vercel.app/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };
  const addToCart = async (id: string) => {
    try {
      const updatedItems = items.map((item) => {
        if (item._id === id) {
          return { ...item, isInCart: true };
        }
        return item;
      });

      setItems(updatedItems);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  const updateItems = () => {
    fetchItems();
  };
  return (
    <main>
      <h1>Here you can create you item</h1>
      <Form updateItems={updateItems} />
      <h3>Items</h3>
      <div>
        {items.map((item) => (
          <div key={item.name}>
            <Item
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              _id={item._id}
              image={item.image}
              category={item.category}
              deleteItem={deleteItem}
              addToCart={addToCart}
              isInCart={item.isInCart}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
