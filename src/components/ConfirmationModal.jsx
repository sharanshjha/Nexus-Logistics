import { useEffect } from 'react';
import styles from './ConfirmationModal.module.css';
import { formatDate, formatCurrencyFull, calculateTotalWeight, calculateTotalValue } from '../lib/utils';

export default function ConfirmationModal({ order, onClose }) {
  const totalWeight = calculateTotalWeight(order.packages);
  const totalValue = calculateTotalValue(order.packages);

  /* Lock body scroll while modal is open */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  /* Close on Escape key */
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Success header */}
        <div className={styles.successHeader}>
          <div className={styles.checkCircle}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className={styles.successTitle}>Shipment Confirmed!</h2>
          <p className={styles.successSub}>Your shipping label has been generated successfully</p>
        </div>

        {/* Label card */}
        <div className={styles.label}>
          <div className={styles.labelHeader}>
            <div>
              <p className={styles.labelSmall}>SHIPMENT LABEL</p>
              <h3 className={styles.labelOrderId}>#{order.orderId}</h3>
            </div>
            <span className={`${styles.labelBadge} ${order.deliveryType === 'express' ? styles.badgeExpress : ''}`}>
              {order.deliveryType === 'express' ? '⚡ EXPRESS' : '📦 STANDARD'}
            </span>
          </div>

          <div className={styles.labelDivider} />

          {/* Route */}
          <div className={styles.labelRoute}>
            <div className={styles.labelPoint}>
              <span className={`${styles.labelDot} ${styles.labelDotOrigin}`} />
              <div>
                <p className={styles.labelPointLabel}>FROM</p>
                <p className={styles.labelPointName}>{order.sender.name || '—'}</p>
                <p className={styles.labelPointAddr}>
                  {order.sender.city || '—'}{order.sender.pincode ? ` - ${order.sender.pincode}` : ''}
                </p>
              </div>
            </div>

            <div className={styles.labelArrow}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#b0b0c0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>

            <div className={styles.labelPoint}>
              <span className={`${styles.labelDot} ${styles.labelDotDest}`} />
              <div>
                <p className={styles.labelPointLabel}>TO</p>
                <p className={styles.labelPointName}>{order.receiver.name || '—'}</p>
                <p className={styles.labelPointAddr}>
                  {order.receiver.city || '—'}{order.receiver.pincode ? ` - ${order.receiver.pincode}` : ''}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.labelDivider} />

          {/* Stats row */}
          <div className={styles.labelStats}>
            <div className={styles.labelStat}>
              <p className={styles.labelStatLabel}>DATE</p>
              <p className={styles.labelStatValue}>{formatDate(order.date)}</p>
            </div>
            <div className={styles.labelStat}>
              <p className={styles.labelStatLabel}>PACKAGES</p>
              <p className={styles.labelStatValue}>{order.packages.length}</p>
            </div>
            <div className={styles.labelStat}>
              <p className={styles.labelStatLabel}>WEIGHT</p>
              <p className={styles.labelStatValue}>{totalWeight.toFixed(1)} KG</p>
            </div>
            <div className={styles.labelStat}>
              <p className={styles.labelStatLabel}>VALUE</p>
              <p className={styles.labelStatValue}>{formatCurrencyFull(totalValue)}</p>
            </div>
          </div>

          {/* Tags */}
          {(order.fragile || order.insurance) && (
            <div className={styles.labelTags}>
              {order.fragile && <span className={styles.tagFragile}>⚠ FRAGILE</span>}
              {order.insurance && <span className={styles.tagInsured}>✓ INSURED</span>}
            </div>
          )}

          {/* Barcode placeholder */}
          <div className={styles.barcode}>
            <div className={styles.barcodeLines}>
              {Array.from({ length: 40 }).map((_, i) => (
                <span
                  key={i}
                  className={`${styles.barcodeLine} ${i % 3 === 0 ? styles.barcodeLineWide : ''}`}
                />
              ))}
            </div>
            <p className={styles.barcodeText}>{order.orderId}</p>
          </div>
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <button id="btn-print-label" className={styles.printBtn} onClick={() => window.print()}>
            🖨 Print Label
          </button>
          <button id="btn-new-shipment" className={styles.newBtn} onClick={onClose}>
            + New Shipment
          </button>
        </div>
      </div>
    </div>
  );
}
