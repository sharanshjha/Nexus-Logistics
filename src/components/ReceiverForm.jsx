import styles from './ReceiverForm.module.css';

export default function ReceiverForm({ receiver, updateReceiver }) {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <span className={styles.dot} />
        <h3 className={styles.title}>RECEIVER DETAILS</h3>
      </div>

      <div className={styles.fields}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Full Name</label>
          <input
            id="receiver-name"
            type="text"
            className={styles.input}
            placeholder="Enter receiver name"
            value={receiver.name}
            onChange={(e) => updateReceiver('name', e.target.value)}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Address</label>
          <textarea
            id="receiver-address"
            className={styles.textarea}
            placeholder="Full delivery address"
            rows={2}
            value={receiver.address}
            onChange={(e) => updateReceiver('address', e.target.value)}
          />
        </div>

        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>City</label>
            <input
              id="receiver-city"
              type="text"
              className={styles.input}
              placeholder="City"
              value={receiver.city}
              onChange={(e) => updateReceiver('city', e.target.value)}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Pincode</label>
            <input
              id="receiver-pincode"
              type="text"
              className={styles.input}
              placeholder="Pincode"
              value={receiver.pincode}
              onChange={(e) => updateReceiver('pincode', e.target.value)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
