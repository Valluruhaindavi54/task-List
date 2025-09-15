 import styles from '../../styles/dashboard.module.css';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard Tasks</h1>

      <div className={styles.taskList}>
        <Link href="/day1" className={styles.taskItem}>
          <span className={styles.taskLink}>✅ Day 1: Setup & Basics</span>
        </Link>

        <Link href="/day2" className={styles.taskItem}>
          <span className={styles.taskLink}>✅ Day 2: Advanced Features (Coming Soon)</span>
        </Link>

        <Link href="/day3" className={styles.taskItem}>
          <span className={styles.taskLink}>✅ Day 3: Advanced Features (Coming Soon)</span>
        </Link>

        <Link href="/day4" className={styles.taskItem}>
          <span className={styles.taskLink}>✅ Day 4: Advanced Features (Coming Soon)</span>
        </Link>

        <Link href="/day9" className={styles.taskItem}>
          <span className={styles.taskLink}>✅ Day 9: Performance & Deployment</span>
        </Link>
      </div>
    </div>
  );
}
