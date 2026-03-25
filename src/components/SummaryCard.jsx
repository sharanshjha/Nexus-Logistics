import styles from './SummaryCard.module.css';
import { formatCurrency } from '../lib/utils';

export default function SummaryCard({ totalWeight, totalPackages, totalValue }) {
  return (
    <div className={styles.grid}>
      <div className={styles.stat}>
        <span className={styles.statIcon}>⚖</span>
        <p className={styles.statLabel}>TOTAL WEIGHT</p>
        <p className={styles.statValue}>
          {totalWeight.toFixed(1)}<span className={styles.statUnit}>KG</span>
        </p>
      </div>

      <div className={styles.stat}>
        <span className={styles.statIcon}>📦</span>
        <p className={styles.statLabel}>TOTAL UNITS</p>
        <p className={styles.statValue}>
          {String(totalPackages).padStart(2, '0')}
        </p>
      </div>

      <div className={styles.stat}>
        <span className={styles.statIcon}>💰</span>
        <p className={styles.statLabel}>TOTAL VALUE</p>
        <p className={styles.statValue}>{formatCurrency(totalValue)}</p>
      </div>
    </div>
  );
}
