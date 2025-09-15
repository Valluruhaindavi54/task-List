 import Link from 'next/link';
import styles from '../styles/layout.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h2 className="text-2xl font-bold mb-6">My Dashboard</h2>

      <Link href="/dashboard" className={styles.link}>Dashboard</Link>
      <Link href="/day1" className={styles.link}>Day 1 Task</Link>
      <Link href="/day2" className={styles.link}>Day 2 Task</Link>
      <Link href="/settings" className={styles.link}>Settings</Link>
    </div>
  );
}
