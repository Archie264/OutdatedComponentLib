// Utility functions for data formatting

export function formatDataForDisplay(data) {
  if (Array.isArray(data)) {
    return data.map(item => `<li>${item}</li>`).join('');
  }
  return String(data);
}

export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}