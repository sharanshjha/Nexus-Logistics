import styles from './OrderForm.module.css';
import ShipmentDetails from './ShipmentDetails';
import SenderForm from './SenderForm';
import ReceiverForm from './ReceiverForm';
import PackagesSection from './PackagesSection';
import AdditionalOptions from './AdditionalOptions';

export default function OrderForm({
  order,
  updateField,
  updateSender,
  updateReceiver,
  updatePackage,
  addPackage,
  removePackage,
}) {
  return (
    <div className={styles.column}>
      <ShipmentDetails
        orderId={order.orderId}
        date={order.date}
        deliveryType={order.deliveryType}
        updateField={updateField}
      />

      <div className={styles.addressRow}>
        <SenderForm sender={order.sender} updateSender={updateSender} />
        <ReceiverForm receiver={order.receiver} updateReceiver={updateReceiver} />
      </div>

      <PackagesSection
        packages={order.packages}
        updatePackage={updatePackage}
        addPackage={addPackage}
        removePackage={removePackage}
      />

      <AdditionalOptions
        fragile={order.fragile}
        insurance={order.insurance}
        updateField={updateField}
      />
    </div>
  );
}
