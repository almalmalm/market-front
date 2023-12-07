'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Form } from '../components/Form';
import axios from 'axios';
import { IItem } from '../types/Interfaces';
import Item from '../components/Item';
import styles from '@/app/styles/Item.module.css';

const deleteItem = async (id: any) => {
  axios.delete(`https://market-api-almalmalm.vercel.app/items/${id}`);
};

export default function Items() {
  const [items, setItems] = useState<IItem[]>([]);

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
  const updateItems = () => {
    fetchItems();
  };
  return (
    <main>
      <h1>Here you can create you item</h1>
      <Form updateItems={updateItems} />
      <h3>Items</h3>
      <div className={styles.items_list}>
        {items.map((item) => (
          <div key={item.name}>
            <Item
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              _id={item._id}
              image={item.image}
              category={item.category}
              onClick={deleteItem}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
