'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Form } from '../components/Form';

export interface Item {
  name: string;
  price: number;
  quantity: number;
  id: string;
  __v: string;
}

// async function getItems() {
//   const res = await fetch('https://market-api-almalmalm.vercel.app/items');
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

export default function Items() {
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    fetch('https://market-api-almalmalm.vercel.app/items')
      .then((response) => response.json())
      .then((responseData) => setItems(responseData));
  }, [items]);
  // const items: Item[] = await getItems();
  return (
    <main>
      <h1>This is items page!</h1>
      <Link href={'/'}>Go to home</Link>
      <Form />
      <h3>Items</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.quantity} {item.name} ${item.price}
          </li>
        ))}
      </ul>
    </main>
  );
}
