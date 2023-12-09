'use client';
import React, { useState } from 'react';

export interface ItemData {
  name: string;
  price: number;
  quantity: number;
  image: string;
  category: string;
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

export const Form = ({ updateItems }: { updateItems: () => void }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newItem: ItemData = {
      name,
      price: parseFloat(price),
      quantity: parseInt(quantity),
      image,
      category,
    };

    try {
      await saveItem(newItem);
      // Reset the form fields after successful submission
      setName('');
      setPrice('');
      setQuantity('');
      setImage('');
      setCategory('');
      // Fetch updated items and update the list after successfully saving a new item
      updateItems();
    } catch (error: any) {
      console.error('Error saving item:', error);
      throw new Error('Failed to save data: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
      <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      <input type="text" placeholder="Image" value={image} onChange={(e) => setImage(e.target.value)} />
      <select name="Category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="" disabled></option>
        <option value="Cars">Cars</option>
        <option value="Animals">Animals</option>
        <option value="Toys">Toys</option>
        <option value="Electronics">Electronics</option>
      </select>
      <button type="submit">Save</button>
    </form>
  );
};
