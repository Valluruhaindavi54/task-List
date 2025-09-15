 'use client';

import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import styles from '../styles/layout.module.css';

export default function Day2Page() {
  const router = useRouter();

  const goHome = () => {
    router.push('/'); // Redirect to home page
  };

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className={styles.mainContent}>
          <h1 className={styles.taskTitle}>Day 2: Layout & Navigation</h1>

          {/* Home Button */}
          <button
            className={`${styles.button} mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded`}
            onClick={goHome}
          >
            Home
          </button>

          <div className={styles.dashboardGrid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Sidebar</div>
              <div className={styles.cardContent}>
                ✅ Vertical navigation menu with links.<br />
                ✅ Hover effects for active items.
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Navbar</div>
              <div className={styles.cardContent}>
                ✅ Top horizontal bar.<br />
                ✅ Displays app title or breadcrumbs.<br />
                ✅ Shadow for separation.
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTitle}>Dashboard Content</div>
              <div className={styles.cardContent}>
                ✅ Main content area.<br />
                ✅ Grid layout for cards.<br />
                ✅ Easy to extend with charts or tables.
              </div>
            </div>
          </div>

          <p className={styles.taskDescription}>
            ✅ Responsive sidebar + navbar layout completed.<br />
            ✅ Grid layout for content cards.<br />
            ✅ Styled with Tailwind + CSS Modules.
          </p>
        </main>
      </div>
    </div>
  );
}