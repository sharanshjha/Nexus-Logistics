<div align="center">

# 📦 Nexus Logistics

### Shipment Order Form with Live Preview

A beautifully crafted, design-first logistics order form built with **React** and **CSS Modules**.  
Create shipment orders and watch the live preview update in real-time.

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![CSS Modules](https://img.shields.io/badge/CSS-Modules-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 🚚 **Shipment Details** | Auto-generated Order ID, date picker, Standard/Express toggle |
| 👤 **Sender & Receiver** | Full address forms with name, address, city, pincode |
| 📦 **Dynamic Packages** | Add/remove multiple packages with name, weight, dimensions (L×W×H), declared value (₹) |
| 🛡 **Additional Options** | Fragile handling & transit insurance checkboxes |
| 📋 **Live Preview** | Real-time shipment summary that mirrors form state instantly |
| 📊 **Calculated Values** | Total weight, total units, total declared value — computed dynamically |
| 🏷 **Visual Indicators** | Fragile & Insured badges, delivery type badge |
| ✅ **Form Validation** | Smart validation with animated error messages |
| 🎫 **Label Generation** | Confirmation modal with printable shipping label + barcode |
| 📱 **Responsive** | Desktop two-column → mobile single-column layout |

---

## 🏗 Tech Stack

- **React 19** — Functional components + hooks
- **Vite** — Lightning-fast dev server & build
- **CSS Modules** — Scoped, modular styling (zero global CSS, zero inline styles)
- **ES6+ JavaScript** — Modern syntax throughout

### Strict Constraints Met

- ✅ CSS Modules only — no Tailwind, no inline styles, no global CSS
- ✅ No UI libraries (MUI, Chakra, Bootstrap, etc.)
- ✅ No external form libraries
- ✅ No CSS-in-JS
- ✅ Clean, modular component architecture

---

## 📁 Project Structure

```
nexus-logistics/
├── index.html                    # Entry HTML
├── vite.config.js                # Vite configuration
├── package.json
└── src/
    ├── main.jsx                  # React entry point
    ├── index.module.css          # Global reset (CSS Module with :global)
    ├── App.jsx                   # Root — single source of truth for state
    ├── lib/
    │   └── utils.js              # Pure helpers (ID gen, formatting, calculations)
    └── components/
        ├── Layout.jsx            # Responsive two-column grid
        ├── OrderForm.jsx         # Left panel — form wrapper
        ├── ShipmentDetails.jsx   # Order ID, date, delivery toggle
        ├── SenderForm.jsx        # Consignor address fields
        ├── ReceiverForm.jsx      # Consignee address fields
        ├── PackagesSection.jsx   # Package list container + Add button
        ├── PackageCard.jsx       # Individual package form card
        ├── AdditionalOptions.jsx # Fragile & Insurance toggles
        ├── PreviewPanel.jsx      # Right panel — live shipment preview
        ├── SummaryCard.jsx       # Total weight/units/value stats
        └── ConfirmationModal.jsx # Success modal with shipping label
```

Each component has its own `.module.css` file — **11 components, 12 CSS Modules**.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/sharanshjha/Nexus-Logistics.git
cd Nexus-Logistics

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🎨 Design Decisions

### Layout
- **Desktop**: 50/50 two-column grid — form on left, sticky preview on right
- **Tablet**: Same grid with tighter spacing
- **Mobile**: Single column, form stacked above preview

### Color System
| Token | Value | Usage |
|---|---|---|
| Primary | `#5b4cff` | Buttons, badges, accents, focus rings |
| Background | `#f0f2f5` | Page background |
| Card | `#ffffff` | All card surfaces |
| Text Primary | `#1a1a2e` | Headings, values |
| Text Secondary | `#8a8a9a` | Labels, muted text |
| Danger | `#ff6b6b` | Destination dot, delete action |
| Success | `#28a745` | Insured badge |

### Typography
- **Font**: Inter (400, 500, 600, 700, 800)
- **Hierarchy**: 8px/12px spacing system with consistent letter-spacing

### Interactions
- Input focus rings with purple glow
- Button hover lift with shadow animation
- Toggle active states
- Validation shake animation
- Modal slide-up with backdrop blur

---

## 📐 State Management

Single source of truth in `App.jsx`:

```javascript
order = {
  orderId: string,         // auto-generated "ORD-XXXXX"
  date: string,            // ISO date
  deliveryType: "standard" | "express",
  sender: { name, address, city, pincode },
  receiver: { name, address, city, pincode },
  packages: [
    { id, name, weight, length, width, height, value }
  ],
  fragile: boolean,
  insurance: boolean
}
```

All mutations are defined in `App.jsx` and passed as props — no prop drilling libraries needed.

---

## 🧮 Calculations

```
Total Packages = packages.length
Total Weight   = Σ packages[i].weight
Total Value    = Σ packages[i].value
```

---

## 🌟 Bonus Features

- ✅ **CSS animations** — modal slide-up, checkmark pop-in, validation shake, button hover lift
- ✅ **Empty states** — dash placeholders when fields are blank
- ✅ **Edge states** — minimum 1 package enforced, validation on submit
- ✅ **Accessibility** — semantic HTML, labeled inputs, keyboard-dismissable modal

---

## 📄 License

MIT

---

<div align="center">

**Built with ❤️ by [Sharansh Jha](https://github.com/sharanshjha)**

</div>
