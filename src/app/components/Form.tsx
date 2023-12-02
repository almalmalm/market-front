'use client';
import React, { useState } from 'react';

export interface ItemData {
  name: string;
  price: number;
  quantity: number;
}

async function saveItem(itemData: ItemData) {
  const res = await fetch('https://market-api-almalmalm.vercel.app/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemData),
  });

  if (!res.ok) {
    throw new Error('Failed to save data');
  }

  return res.json();
}

export const Form = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newItem: ItemData = {
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
    };

    try {
      await saveItem(newItem);
      // Optionally, you can reset the form fields after successful submission
      setName('');
      setPrice('');
      setQuantity('');
      // You might also fetch updated items and update state to refresh the list
    } catch (error: any) {
      console.error('Error saving item:', error);
      throw new Error('Failed to save data: ' + error.message);
      // Handle error scenarios
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
};
