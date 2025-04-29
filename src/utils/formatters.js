// Utility functions for data formatting

export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

export function renderElements(elements, renderer) {
  return elements.map(element => renderer(element)).join('');
}