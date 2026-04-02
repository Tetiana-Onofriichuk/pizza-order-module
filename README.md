# Pizza Order Module

A small pizza ordering app built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**.

## Features

- Product list with pizzas, drinks, desserts, and menu items
- Product modal with configurable options
- Pizza price calculation based on:
  - selected size
  - selected extra ingredients
  - quantity
- Menu item validation with required drink selection
- Cart modal with:
  - added products list
  - unit price
  - quantity
  - total price per position
  - total amount
  - remove item action
  - increase quantity directly in the cart
  - decrease quantity directly in the cart
  - automatic removal when quantity reaches zero
- Cart merge logic:
  - same product + same options => quantity increases
  - same product + different options => separate cart positions
- Mock API with loading and error handling

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**

## Project Structure

```bash
src/
├── api/
│   └── products.ts
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── BaseModal.tsx
│   ├── Cart.tsx
│   ├── CartModal.tsx
│   ├── ProductCard.tsx
│   └── ProductModal.tsx
├── data/
│   └── products.ts
├── hooks/
│   └── useProducts.ts
├── types/
│   ├── cart.ts
│   └── product.ts
└── utils/
    └── price.ts
```

## How It Works

### Products

Products are stored in a mock data file and fetched through a small mock API layer.

### Product Modal

The modal allows the user to configure the selected product:

- pizza: choose size and extra ingredients
- menu: choose a required drink
- other products: add directly with quantity

### Price Calculation

Pizza price is calculated in a separate utility function:

- base price depends on selected size
- extra ingredients are added to the base price
- total price = unit price × quantity

### Cart Logic

The cart is stored in local page state.

When a new item is added:

- if the same product with the same options already exists in the cart, the app increases `quantity`
- if the options are different, the app creates a separate cart position

Compared fields:

- `product.id`
- `selectedSize`
- `selectedDrink`
- `selectedIngredients`

To compare ingredients correctly, ingredient arrays are sorted before comparison.

The cart also supports quantity changes directly inside the cart modal:

- `+` increases the quantity of the selected item
- `-` decreases the quantity of the selected item
- if quantity becomes `0`, the item is removed automatically

When quantity changes, the app recalculates:

- `quantity`
- `totalPrice`

`unitPrice` stays unchanged because it represents the price of one configured item.

### Modal Behavior

The project uses a reusable `BaseModal` component for modal windows.

It handles:

- closing on overlay click
- closing on `Escape`
- scroll locking while modal is open

This base component is reused by both:

- `ProductModal`
- `CartModal`

## Main Concepts Used

- React `useState`
- React `useEffect`
- custom hooks
- functional state updates
- immutable array updates with spread operator, `map`, and `filter`
- TypeScript union types
- conditional rendering
- separation of concerns
- reusable base modal pattern

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:3000
```
