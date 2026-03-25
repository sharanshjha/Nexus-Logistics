import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import OrderForm from './components/OrderForm';
import PreviewPanel from './components/PreviewPanel';
import ConfirmationModal from './components/ConfirmationModal';
import { generateOrderId, createEmptyPackage } from './lib/utils';

export default function App() {
  const [order, setOrder] = useState({
    orderId: '',
    date: '',
    deliveryType: 'standard',
    sender: { name: '', address: '', city: '', pincode: '' },
    receiver: { name: '', address: '', city: '', pincode: '' },
    packages: [createEmptyPackage()],
    fragile: false,
    insurance: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    setOrder((prev) => ({ ...prev, orderId: generateOrderId() }));
  }, []);

  /* ---- Field updaters ---- */

  const updateField = (field, value) => {
    setOrder((prev) => ({ ...prev, [field]: value }));
  };

  const updateSender = (field, value) => {
    setOrder((prev) => ({
      ...prev,
      sender: { ...prev.sender, [field]: value },
    }));
  };

  const updateReceiver = (field, value) => {
    setOrder((prev) => ({
      ...prev,
      receiver: { ...prev.receiver, [field]: value },
    }));
  };

  /* ---- Package CRUD ---- */

  const updatePackage = (index, field, value) => {
    setOrder((prev) => {
      const updated = [...prev.packages];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, packages: updated };
    });
  };

  const addPackage = () => {
    setOrder((prev) => ({
      ...prev,
      packages: [...prev.packages, createEmptyPackage()],
    }));
  };

  const removePackage = (index) => {
    if (order.packages.length <= 1) return;
    setOrder((prev) => ({
      ...prev,
      packages: prev.packages.filter((_, i) => i !== index),
    }));
  };

  /* ---- Validation & Confirm ---- */

  const handleConfirm = () => {
    const errors = [];

    if (!order.date) errors.push('Pickup date is required');
    if (!order.sender.name) errors.push('Sender name is required');
    if (!order.sender.city) errors.push('Sender city is required');
    if (!order.sender.pincode) errors.push('Sender pincode is required');
    if (!order.receiver.name) errors.push('Receiver name is required');
    if (!order.receiver.city) errors.push('Receiver city is required');
    if (!order.receiver.pincode) errors.push('Receiver pincode is required');

    const hasValidPackage = order.packages.some(
      (pkg) => pkg.name && pkg.weight
    );
    if (!hasValidPackage) errors.push('At least one package needs a name and weight');

    if (errors.length > 0) {
      setValidationErrors(errors);
      // Auto-clear after 5 seconds
      setTimeout(() => setValidationErrors([]), 5000);
      return;
    }

    setValidationErrors([]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Layout>
        <OrderForm
          order={order}
          updateField={updateField}
          updateSender={updateSender}
          updateReceiver={updateReceiver}
          updatePackage={updatePackage}
          addPackage={addPackage}
          removePackage={removePackage}
        />
        <PreviewPanel
          order={order}
          onConfirm={handleConfirm}
          validationErrors={validationErrors}
        />
      </Layout>

      {showModal && (
        <ConfirmationModal order={order} onClose={handleCloseModal} />
      )}
    </>
  );
}
