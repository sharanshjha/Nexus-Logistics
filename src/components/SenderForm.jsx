import styles from './SenderForm.module.css';

export default function SenderForm({ sender, updateSender }) {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <span className={styles.dot} />
        <h3 className={styles.title}>SENDER DETAILS</h3>
      </div>

      <div className={styles.fields}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Full Name</label>
          <input
            id="sender-name"
            type="text"
            className={styles.input}
            placeholder="Enter sender name"
            value={sender.name}
            onChange={(e) => updateSender('name', e.target.value)}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Address</label>
          <textarea
            id="sender-address"
            className={styles.textarea}
            placeholder="Full pickup address"
            rows={2}
            value={sender.address}
            onChange={(e) => updateSender('address', e.target.value)}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>City</label>
            <input
              id="sender-city"
              type="text"
              className={styles.input}
              placeholder="City"
              value={sender.city}
              onChange={(e) => updateSender('city', e.target.value)}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Pincode</label>
            <input
              id="sender-pincode"
              type="text"
              className={styles.input}
              placeholder="Pincode"
              value={sender.pincode}
              onChange={(e) => updateSender('pincode', e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
