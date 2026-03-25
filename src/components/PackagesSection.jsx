import styles from './PackagesSection.module.css';
import PackageCard from './PackageCard';

export default function PackagesSection({ packages, updatePackage, addPackage, removePackage }) {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <span className={styles.icon}>📋</span>
          <h2 className={styles.title}>Packages</h2>
        </div>
        <button id="btn-add-package" type="button" className={styles.addBtn} onClick={addPackage}>
          <span className={styles.addIcon}>＋</span>
          ADD PACKAGE
        </button>
      </div>

      <div className={styles.list}>
        {packages.map((pkg, index) => (
          <PackageCard
            key={pkg.id}
            pkg={pkg}
            index={index}
            updatePackage={updatePackage}
            removePackage={removePackage}
            canRemove={packages.length > 1}
          />
        ))}
      </div>
    </section>
  );
}
