// EnhancedButton.js - An improved button component with better accessibility
class EnhancedButton {
    constructor(text, options = {}) {
      this.text = text;
      this.options = {
        color: 'blue',
        size: 'medium',
        disabled: false,
        ...options
      };
    }
  
    render() {
      const { color, size, disabled } = this.options;
      const disabledAttr = disabled ? 'disabled' : '';
      
      return `<button class="enhanced-button ${color} ${size}" ${disabledAttr}>
        ${this.text}
      </button>`;
    }
    
    addEventListener(eventType, callback) {
      const button = document.querySelector('.enhanced-button');
      if (button) {
        button.addEventListener(eventType, callback);
      }
    }
  }
  
  export default EnhancedButton;