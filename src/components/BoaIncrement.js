const template = document.createElement('template');
template.innerHTML = /* html */`
  <style></style>
  <button class="button">
    Increment +<span class="step"></span>
  </button>
`;

class BoaIncrement extends HTMLElement {
  step = this.getAttribute('step') || 1;
  button;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /* css */`
      .button {
        background-color: var(--teal-7);
        border-radius: var(--radius-2);
        padding: var(--size-3);
        box-shadow: var(--shadow-2);
        color: var(--gray-0);
        border: none;
      }

      .button:hover {
        background-color: var(--teal-8);
      }
    `;
  }

  handleEvent(event) {
    if (event.type === 'counter:data-step') {
      this.step = event.detail.counter;
      this.render();
    }
    if (event.type === 'click') {
      const messageEvent = new CustomEvent('counter:data-increment', {
        detail: { counter: this.step },
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(messageEvent);
    }
  }

  connectedCallback() {
    document.addEventListener('counter:data-step', this);
    this.render();
  }

  render() {
    const html = template.content.cloneNode((true));
    html.querySelector('style').textContent = BoaIncrement.styles;
    html.querySelector('.step').textContent = this.step;
    this.button = html.querySelector('button');
    this.button.addEventListener('click', this);
    this.shadowRoot.replaceChildren(html);
  }

  disconnectedCallback() {
    document.removeEventListener('counter:data-step', this);
  }
}

customElements.define('boa-increment', BoaIncrement);
