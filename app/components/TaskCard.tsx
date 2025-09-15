import Link from 'next/link';
import styles from '../styles/dashboard.module.css';

export default function TaskCard({ title, link }) {
  return (
    <Link href={link} className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardLink}>Go to Task →</div>
    </Link>
  );
}
