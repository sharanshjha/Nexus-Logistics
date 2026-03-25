import styles from './AdditionalOptions.module.css';

export default function AdditionalOptions({ fragile, insurance, updateField }) {
  return (
    <section className={styles.card}>
      <h3 className={styles.heading}>ADDITIONAL OPTIONS</h3>

      <div className={styles.options}>
        {/* Fragile */}
        <label id="option-fragile" className={styles.option} htmlFor="fragile-checkbox">
          <div className={styles.optionIcon} data-type="fragile">🛡</div>
          <div className={styles.optionText}>
            <span className={styles.optionTitle}>Fragile Handling</span>
            <span className={styles.optionSub}>EXTRA PROTECTIVE LAYER</span>
          </div>
          <div className={styles.checkboxWrapper}>
            <input
              id="fragile-checkbox"
              type="checkbox"
              className={styles.checkbox}
              checked={fragile}
              onChange={(e) => updateField('fragile', e.target.checked)}
            />
            <span className={styles.checkmark} />
          </div>
        </label>

        {/* Insurance */}
        <label id="option-insurance" className={styles.option} htmlFor="insurance-checkbox">
          <div className={styles.optionIcon} data-type="insurance">✅</div>
          <div className={styles.optionText}>
            <span className={styles.optionTitle}>Transit Insurance</span>
            <span className={styles.optionSub}>FULL VALUE COVERAGE</span>
          </div>
          <div className={styles.checkboxWrapper}>
            <input
              id="insurance-checkbox"
              type="checkbox"
              className={styles.checkbox}
              checked={insurance}
              onChange={(e) => updateField('insurance', e.target.checked)}
            />
            <span className={styles.checkmark} />
          </div>
        </label>
      </div>
    </section>
  );
}
