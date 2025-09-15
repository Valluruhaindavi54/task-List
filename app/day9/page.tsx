 'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import styles from './day9.module.css';

// Dynamically import Chart for performance
const Chart = dynamic(() => import('../components/Chart'), { ssr: false });

const Day9Page: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Day 9: Performance & Deployment</h1>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>Optimized Chart Component</h2>
        <Chart />
      </section>

      <p>✅ Dashboard is ready for deployment!</p>

      <Link href="/" className={styles.homeButton}>
        ← Home
      </Link>
    </div>
  );
};

export default Day9Page;
