import styles from './ShipmentDetails.module.css';

export default function ShipmentDetails({ orderId, date, deliveryType, updateField }) {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <span className={styles.icon}>🚚</span>
          <h2 className={styles.title}>Shipment Details</h2>
        </div>
        <span className={styles.orderId}>#{orderId}</span>
      </div>

      <div className={styles.fields}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>PICKUP DATE</label>
          <input
            id="pickup-date"
            type="date"
            className={styles.input}
            value={date}
            onChange={(e) => updateField('date', e.target.value)}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>DELIVERY TYPE</label>
          <div className={styles.toggle}>
            <button
              id="btn-standard"
              type="button"
              className={`${styles.toggleBtn} ${deliveryType === 'standard' ? styles.active : ''}`}
              onClick={() => updateField('deliveryType', 'standard')}
            >
              Standard
            </button>
            <button
              id="btn-express"
              type="button"
              className={`${styles.toggleBtn} ${deliveryType === 'express' ? styles.active : ''}`}
              onClick={() => updateField('deliveryType', 'express')}
            >
              Express
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
