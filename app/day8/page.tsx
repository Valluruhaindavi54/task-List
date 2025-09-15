 'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table';
import styles from '../styles/day8.module.css';

interface Product {
  id: number;
  title: string;
  brand: string;
}

export default function Day8Page() {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  const goHome = () => router.push('/');

  // Fetch data from dummyjson
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  const filteredData = useMemo(() => {
    return products.filter(
      (p) =>

        (p.title?.toLowerCase().includes(search.toLowerCase()) ?? false) ||
        (p.brand?.toLowerCase().includes(search.toLowerCase()) ?? false)

         
    );
  }, [search, products]);

  const columnHelper = createColumnHelper<Product>();

  const columns = [
    columnHelper.accessor('id', { header: 'ID' }),
    columnHelper.accessor('title', { header: 'Title' }),
    columnHelper.accessor('brand', { header: 'Brand' }),
  ];

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Day 8: Advanced UI Components</h1>

      <button className={styles.homeButton} onClick={goHome}>
        Home
      </button>

      <input
        type="text"
        placeholder="Search by title or brand..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.searchBar}
      />

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className={styles.tableHeader}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className={styles.tableRow}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={styles.tableCell}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          className={styles.paginationButton}
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>

        <button
          className={styles.paginationButton}
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>

        <span className="ml-4 text-black">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
      </div>
    </div>
  );
}
