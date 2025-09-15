 'use client';

import { useState } from 'react';
import Link from 'next/link';
import DataTable from '../components/DataTable';
import styles from '../styles/day3.module.css';

export default function Day3Page() {
  const [view, setView] = useState<'products' | 'carts' | 'both' | null>(null);
  const [products, setProducts] = useState<any[]>([]);
  const [carts, setCarts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    setProducts(data.products);
    setLoading(false);
  };

  const fetchCarts = async () => {
    setLoading(true);
    const res = await fetch('https://dummyjson.com/carts');
    const data = await res.json();
    setCarts(data.carts);
    setLoading(false);
  };

  const handleClick = async (type: 'products' | 'carts' | 'both') => {
    setView(type);
    if (type === 'products') {
      await fetchProducts();
    } else if (type === 'carts') {
      await fetchCarts();
    } else {
      await fetchProducts();
      await fetchCarts();
    }
  };

  return (
    <div className={styles.container}>
      <div className="mb-4">
        <Link
          href="/"
          className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition"
        >
          Home
        </Link>
      </div>

      <h1 className={styles.title}>Day 3: Data Fetching</h1>

      <div className={styles.buttons}>
        <button className={styles.button} onClick={() => handleClick('products')}>
          Products
        </button>
        <button className={styles.button} onClick={() => handleClick('carts')}>
          Carts
        </button>
        <button className={styles.button} onClick={() => handleClick('both')}>
          Both
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {view === 'products' && products.length > 0 && (
        <DataTable
          columns={['id', 'title', 'price', 'category']}
          data={products}
        />
      )}

      {view === 'carts' && carts.length > 0 && (
        <DataTable
          columns={['id', 'totalProducts', 'totalQuantity', 'discountedTotal']}
          data={carts}
        />
      )}

      {view === 'both' && (
        <div className={styles.bothTablesContainer}>
          {products.length > 0 && (
            <div className={styles.tableContainer}>
              <h2 className="font-bold text-lg mb-2">Products</h2>
              <DataTable
                columns={['id', 'title', 'price', 'category']}
                data={products}
              />
            </div>
          )}
          {carts.length > 0 && (
            <div className={styles.tableContainer}>
              <h2 className="font-bold text-lg mb-2">Carts</h2>
              <DataTable
                columns={['id', 'totalProducts', 'totalQuantity', 'discountedTotal']}
                data={carts}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
