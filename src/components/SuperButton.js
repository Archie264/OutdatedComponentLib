// SuperButton.js - A fancy button component
class SuperButton {
    constructor(text, color = 'blue', size = 'medium') {
      this.text = text;
      this.color = color;
      this.size = size;
    }
  
    render() {
      return `<button class="super-button ${this.color} ${this.size}">${this.text}</button>`;
    }
    
    onClick(callback) {
      // Add click event handler
      document.querySelector('.super-button').addEventListener('click', callback);
    }
  }
  
  export default SuperButton;