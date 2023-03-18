const template = document.createElement('template');
template.innerHTML = /* html */`
  <style></style>
  <div class="wrapper">
    <label for="step" class="label">Step</label>
    <input type="number" name="step" id="step" class="input" value="1">
  </div>
`;

class BoaStep extends HTMLElement {
  step = this.getAttribute('step') || 1;
  input;
  regex = /\d+/g;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /* css */`
      .wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--size-2);
      }

      .label {
        color: var(--gray-0);
        font-size: var(--font-size-0);
      }

      .input {
        background-color: var(--indigo-11);
        border-radius: var(--radius-2);
        padding: var(--size-1);
        box-shadow: var(--shadow-2);
        color: var(--gray-0);
        border: none;
      }
    `;
  }

  handleEvent(event) {
    if (event.type === 'change') {
      const value = event.target.value;
      if (value === '') return;
      const messageEvent = new CustomEvent('counter:data-step', {
        detail: { counter: +value },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(messageEvent);
    }
  }

  connectedCallback() {
    const html = template.content.cloneNode((true));
    html.querySelector('style').textContent = BoaStep.styles;
    this.input = html.querySelector('input');
    this.input.addEventListener('change', this);
    this.shadowRoot.appendChild(html);
  }

  disconnectedCallback() {
    this.input.removeEventListener('counter:data-step', this);
  }
}

customElements.define('boa-step', BoaStep);
