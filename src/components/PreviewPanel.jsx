import styles from './PreviewPanel.module.css';
import SummaryCard from './SummaryCard';
import { formatDate, formatCurrencyFull, calculateTotalWeight, calculateTotalValue } from '../lib/utils';

export default function PreviewPanel({ order, onConfirm, validationErrors = [] }) {
  const totalWeight = calculateTotalWeight(order.packages);
  const totalValue = calculateTotalValue(order.packages);
  const totalPackages = order.packages.length;

  return (
    <div className={styles.panel}>
      {/* ---- Header ---- */}
      <div className={styles.header}>
        <div>
          <p className={styles.previewLabel}>LIVE SHIPMENT PREVIEW</p>
          <h2 className={styles.orderId}>#{order.orderId || '—'}</h2>
          <p className={styles.date}>Pickup Date: {formatDate(order.date)}</p>
        </div>
        <span className={`${styles.badge} ${order.deliveryType === 'express' ? styles.badgeExpress : styles.badgeStandard}`}>
          <span className={styles.badgeDot} />
          {order.deliveryType === 'express' ? 'EXPRESS DELIVERY' : 'STANDARD DELIVERY'}
        </span>
      </div>

      {/* ---- Route: Origin → Destination ---- */}
      <div className={styles.route}>
        <div className={styles.routePoint}>
          <div className={styles.routeHeader}>
            <span className={`${styles.routeDot} ${styles.routeDotOrigin}`} />
            <span className={styles.routeLabel}>ORIGIN</span>
          </div>
          <p className={styles.routeName}>{order.sender.name || '—'}</p>
          <p className={styles.routeCity}>
            {order.sender.city || '—'}{order.sender.city ? ', ' : ''}{order.sender.city ? order.sender.city.substring(0, 2).toUpperCase() : ''}
          </p>
          <p className={styles.routePin}>PIN: {order.sender.pincode || '—'}</p>
        </div>

        <div className={styles.routeArrow}>→</div>

        <div className={styles.routePoint}>
          <div className={styles.routeHeader}>
            <span className={`${styles.routeDot} ${styles.routeDotDest}`} />
            <span className={styles.routeLabel}>DESTINATION</span>
          </div>
          <p className={styles.routeName}>{order.receiver.name || '—'}</p>
          <p className={styles.routeCity}>
            {order.receiver.city || '—'}{order.receiver.city ? ', ' : ''}{order.receiver.city ? order.receiver.city.substring(0, 2).toUpperCase() : ''}
          </p>
          <p className={styles.routePin}>PIN: {order.receiver.pincode || '—'}</p>
        </div>
      </div>

      {/* ---- Package Manifest ---- */}
      <div className={styles.manifest}>
        <h3 className={styles.sectionTitle}>PACKAGE MANIFEST</h3>
        <div className={styles.manifestList}>
          {order.packages.map((pkg, i) => (
            <div key={pkg.id} className={styles.manifestItem}>
              <div className={styles.manifestIcon}>📦</div>
              <div className={styles.manifestInfo}>
                <p className={styles.manifestName}>{pkg.name || `Package ${i + 1}`}</p>
                <p className={styles.manifestDims}>
                  {pkg.length || 0}x{pkg.width || 0}x{pkg.height || 0} CM • {pkg.weight || 0} KG
                </p>
              </div>
              <span className={styles.manifestValue}>{formatCurrencyFull(pkg.value)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ---- Tags ---- */}
      {(order.fragile || order.insurance) && (
        <div className={styles.tags}>
          {order.fragile && <span className={styles.tagFragile}>FRAGILE</span>}
          {order.insurance && <span className={styles.tagInsured}>INSURED</span>}
        </div>
      )}

      {/* ---- Summary Stats ---- */}
      <div className={styles.divider} />
      <SummaryCard
        totalWeight={totalWeight}
        totalPackages={totalPackages}
        totalValue={totalValue}
      />

      {/* ---- Validation Errors ---- */}
      {validationErrors.length > 0 && (
        <div className={styles.errors}>
          {validationErrors.map((err, i) => (
            <p key={i} className={styles.errorItem}>⚠ {err}</p>
          ))}
        </div>
      )}

      {/* ---- CTA ---- */}
      <button id="btn-confirm" type="button" className={styles.cta} onClick={onConfirm}>
        CONFIRM & GENERATE LABEL
        <span className={styles.ctaArrow}>›</span>
      </button>

      {/* ---- Estimated Delivery ---- */}
      <p className={styles.estimate}>
        <span className={styles.estimateIcon}>🕐</span>
        ESTIMATED DELIVERY BY {order.deliveryType === 'express' ? 'TOMORROW, 11:00 AM' : '3-5 BUSINESS DAYS'}
      </p>
    </div>
  );
}
