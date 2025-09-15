 'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import DataTable from '../components/DataTable';
import styles from '../styles/day4.module.css';

export default function Day4Page() {
  const router = useRouter();
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    const res = await fetch('/api/users');
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  const addUser = async () => {
    const name = prompt('Enter user name:');
    const email = prompt('Enter user email:');
    if (!name || !email) return;
    await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
    fetchUsers();
  };

  const deleteUser = async (id: number) => {
    await fetch(`/api/users?id=${id}`, { method: 'DELETE' });
    fetchUsers();
  };

  const goHome = () => {
    router.push('/'); // Redirect to home page
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Day 4: API Routes Dashboard</h1>

      <div className={styles.buttons}>
        <button className={styles.button} onClick={fetchUsers}>
          Refresh
        </button>
        <button className={styles.button} onClick={addUser}>
          Add User
        </button>
        <button className={styles.button} onClick={goHome}>
          Home
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {users.length > 0 && (
        <DataTable
          columns={['id', 'name', 'email']}
          data={users.map((u) => ({ ...u, action: u.id }))}
        />
      )}

      {users.length > 0 && (
        <div className="mt-4">
          {users.map((u) => (
            <button
              key={u.id}
              className={`${styles.button} mr-2 mt-2 bg-red-500 hover:bg-red-600`}
              onClick={() => deleteUser(u.id)}
            >
              Delete {u.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
