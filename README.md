# OutdatedComponentLib

A lightweight component library for building modern UIs.

## Installation

```bash
npm install outdated-component-lib
```

## Components

### SuperButton

A versatile button component with customizable styling.

```javascript
import { SuperButton } from 'outdated-component-lib';

// Create a new SuperButton
const button = new SuperButton('Click me!', 'green', 'large');

// Render the button
const buttonHTML = button.render();
document.getElementById('button-container').innerHTML = buttonHTML;

// Add click handler
button.onClick(() => {
  alert('Button clicked!');
});
```

## Utilities

### formatDataForDisplay

Formats data for display in a list.

```javascript
import { formatDataForDisplay } from 'outdated-component-lib';

const items = ['Apple', 'Banana', 'Cherry'];
const formattedList = formatDataForDisplay(items);
// Output: "<li>Apple</li><li>Banana</li><li>Cherry</li>"

document.getElementById('list-container').innerHTML = `<ul>${formattedList}</ul>`;
```

## Constants

The library provides several useful constants:

```javascript
import { MAX_ITEMS } from 'outdated-component-lib';

// Limit the number of items displayed
if (data.length > MAX_ITEMS) {
  data = data.slice(0, MAX_ITEMS);
}
```

## Examples

### Creating a product list with maximum items

```javascript
import { formatDataForDisplay, MAX_ITEMS } from 'outdated-component-lib';

function renderProductList(products) {
  // Limit to MAX_ITEMS (10)
  const limitedProducts = products.slice(0, MAX_ITEMS);
  
  // Format the products for display
  const formattedProducts = formatDataForDisplay(limitedProducts);
  
  // Render to the DOM
  document.getElementById('product-list').innerHTML = `<ul>${formattedProducts}</ul>`;
}
```

### Building a call-to-action section

```javascript
import { SuperButton } from 'outdated-component-lib';

function createCallToAction(text) {
  const actionButton = new SuperButton(text, 'red', 'large');
  return actionButton.render();
}

// Usage
const ctaSection = document.getElementById('cta-section');
ctaSection.innerHTML = createCallToAction('Sign Up Now!');
```