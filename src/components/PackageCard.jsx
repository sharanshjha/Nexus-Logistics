import styles from './PackageCard.module.css';

export default function PackageCard({ pkg, index, updatePackage, removePackage, canRemove }) {
  return (
    <div className={styles.card}>
      {/* Header with delete */}
      <div className={styles.header}>
        <label className={styles.label}>CONTENT DESCRIPTION</label>
        {canRemove && (
          <button
            id={`btn-remove-pkg-${index}`}
            type="button"
            className={styles.deleteBtn}
            onClick={() => removePackage(index)}
            title="Remove package"
          >
            🗑
          </button>
        )}
      </div>

      <input
        id={`pkg-name-${index}`}
        type="text"
        className={styles.input}
        placeholder="Enter package description"
        value={pkg.name}
        onChange={(e) => updatePackage(index, 'name', e.target.value)}
      />

      {/* Weight + Dimensions row */}
      <div className={styles.row}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>WEIGHT (KG)</label>
          <input
            id={`pkg-weight-${index}`}
            type="number"
            className={styles.input}
            placeholder="0.0"
            value={pkg.weight}
            onChange={(e) => updatePackage(index, 'weight', e.target.value)}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>DIMENSIONS (L/W/H)</label>
          <div className={styles.dimRow}>
            <input
              id={`pkg-length-${index}`}
              type="number"
              className={styles.dimInput}
              placeholder="L"
              value={pkg.length}
              onChange={(e) => updatePackage(index, 'length', e.target.value)}
            />
            <span className={styles.dimSep}>×</span>
            <input
              id={`pkg-width-${index}`}
              type="number"
              className={styles.dimInput}
              placeholder="W"
              value={pkg.width}
              onChange={(e) => updatePackage(index, 'width', e.target.value)}
            />
            <span className={styles.dimSep}>×</span>
            <input
              id={`pkg-height-${index}`}
              type="number"
              className={styles.dimInput}
              placeholder="H"
              value={pkg.height}
              onChange={(e) => updatePackage(index, 'height', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Value */}
      <div className={styles.fieldGroup}>
        <label className={styles.label}>DECLARED VALUE (₹)</label>
        <div className={styles.valueInput}>
          <span className={styles.currencySymbol}>₹</span>
          <input
            id={`pkg-value-${index}`}
            type="number"
            className={styles.valueField}
            placeholder="0"
            value={pkg.value}
            onChange={(e) => updatePackage(index, 'value', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
