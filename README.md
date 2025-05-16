# 🛍️ Product Selector Coding Interview

> This repository is used to validate candidates for our project. Your task is to implement a reusable `ProductSelector` component in React using Apollo Client.

---

## 📖 Table of Contents
1. [Overview](#overview)
2. [Requirements](#requirements)
   - [Selection Modes](#selection-modes)
   - [Search](#search)
   - [Pagination](#pagination)
   - [Pre-selected Items (Advanced)](#pre-selected-items-advanced)
3. [Setup & Run](#setup--run)
4. [Usage](#usage)
5. [Validation Criteria](#validation-criteria)
6. [Good Luck!](#good-luck)

---

## 🗺️ Overview

The `ProductSelector` component allows users to pick one or more products from a paginated list fetched via GraphQL (Apollo Client). It supports search, pagination, and optional pre-selected items, making it easy to integrate into any page of your application.

---

## ✅ Requirements

### 1. Selection Modes

- Support **single** or **multiple** selection.
- Accept an `onSubmit` prop:
  ```ts
  onSubmit: (selectedIds: string | string[]) => void
  ```
- When the user confirms, call `onSubmit` with:
  - A single product ID (string)
  - An array of product IDs (`string[]`)

### 2. Search

- Render a search input at the top of the selector.
- Update the GraphQL query variable as the user types.
- Perform server-side filtering based on the search term.

### 3. Pagination

- Fetch products in pages of 10 items.
- Implement one of the following loading strategies:
  - **Infinite scroll**: call `fetchMore` when the user scrolls to the bottom.
  - **Load more button**: render a button that fetches the next page on click.

### 4. Pre-selected Items (Advanced)

> **Use case:** On a category detail page, some products (e.g., product ID **499**) may have been selected previously. Even if these IDs are outside of the first 10 results, they should appear and remain selected when the selector mounts.

- Accept an optional prop:
  ```ts
  selectedIds?: string | string[]
  ```
- On mount, ensure all IDs in `selectedIds` are visible and selected.
- **Hint:** Run a secondary query to fetch specific IDs:
  ```graphql
  query ProductsByIds($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product { id name }
    }
  }
  ```
  Then merge those results into your paginated list or adjust pagination logic accordingly.

---

## 🛠️ Setup & Run

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Generate GraphQL
pnpm codegen
```

Open the app at: `http://localhost:5173`

> **Focus**: `/app/components/ProductSelector`

---

## 🚀 Usage Example

```tsx
import React from 'react';
import { ProductSelector } from './components/ProductSelector';

function App() {
  const handleSubmit = (ids: string | string[]) => {
    console.log('Selected product IDs:', ids);
  };

  return (
    <ProductSelector
      onSubmit={handleSubmit}
      selectedIds={["pid_xxxx"]}  // optional pre-selections
    />
  );
}
```

---

## 📝 Validation Criteria

1. **Correctness**
   - `onSubmit` receives the correct ID(s).
   - Search input drives the GraphQL `query` variable.
   - Pagination loads additional pages correctly.
2. **Code Quality**
   - Clear separation of concerns.
   - Reusable, well-typed components/hooks.
   - Proper loading and error states.
3. **UX**
   - Smooth search experience.
   - Intuitive single/multiple selection flow.
   - Seamless loading of more items (scroll or button).

---

## 🎉 Good Luck!

We look forward to seeing your solution. Built with ❤️ by the team.