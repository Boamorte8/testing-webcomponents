class BoaLabel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get styles() {
    return /* css */`
      label {
        display: inline-flex;
        align-items: center;
        padding: var(--size-3);
        background: var(--green-8);
        color: var(--gray-0);
        border-radius: var(--radius-4);
        font-size: var(--font-size-1);
        font-family: var(--font-sans);
        width: content;
      }
    `;
  }

  static get observedAttributes() {
    return ['label'];
  }

  render() {
    this.label = this.hasAttribute('label') ? this.getAttribute('label') : '';
    this.shadowRoot.innerHTML = /* html */`
      <style>${BoaLabel.styles}</style>
      <label>${this.label}</label>
    `;
  }

  attributeChangedCallback(name, old, now) {
    console.log(`Attribute ${name} had been modified from ${old} to ${now}.`);
    if (name === 'label') {
      const label = this.shadowRoot.querySelector('label');
      label.textContent = now;
    }
  }
}

customElements.define('boa-label', BoaLabel);
