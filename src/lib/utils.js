/**
 * Generates a random order ID in format ORD-XXXXX
 */
export function generateOrderId() {
  const num = Math.floor(10000 + Math.random() * 90000);
  return `ORD-${num}`;
}

/**
 * Formats date string to display format "Oct 24, 2023"
 */
export function formatDate(dateString) {
  if (!dateString) return '—';
  const date = new Date(dateString + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Formats number as abbreviated ₹ currency (e.g. ₹60K)
 */
export function formatCurrency(value) {
  if (!value && value !== 0) return '₹0';
  const num = Number(value);
  if (num >= 1000) {
    return `₹${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}K`;
  }
  return `₹${num.toLocaleString('en-IN')}`;
}

/**
 * Formats number as full ₹ currency
 */
export function formatCurrencyFull(value) {
  if (!value && value !== 0) return '₹0';
  return `₹${Number(value).toLocaleString('en-IN')}`;
}

/**
 * Creates an empty package object
 */
export function createEmptyPackage() {
  return {
    id: Date.now() + Math.random(),
    name: '',
    weight: '',
    length: '',
    width: '',
    height: '',
    value: '',
  };
}

/**
 * Calculates total weight from packages array
 */
export function calculateTotalWeight(packages) {
  return packages.reduce((sum, pkg) => sum + (Number(pkg.weight) || 0), 0);
}

/**
 * Calculates total value from packages array
 */
export function calculateTotalValue(packages) {
  return packages.reduce((sum, pkg) => sum + (Number(pkg.value) || 0), 0);
}
