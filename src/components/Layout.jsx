import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>📦</span>
          <h1 className={styles.logoText}>Nexus<span>Logistics</span></h1>
        </div>
      </header>
      <main className={styles.grid}>{children}</main>
    </div>
  );
}
