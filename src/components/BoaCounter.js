const template = document.createElement('template');
template.innerHTML = /* html */`
  <style></style>
  <dl>
    <dt>Counter:</dt>
    <dd></dd>
  </dl>
`;

class BoaCounter extends HTMLElement {
  step = this.getAttribute('step') || 1;
  counter = 0;

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
    `;
  }

  handleEvent(event) {
    if (event.type === 'counter:data-increment') {
      this.counter = event.detail.counter;
      console.log(this.counter);
      this.render();
    }
  }

  connectedCallback() {
    document.addEventListener('counter:data-increment', this);
    this.render();
  }

  render() {
    const html = template.content.cloneNode((true));
    html.querySelector('style').textContent = BoaCounter.styles;
    // html.querySelector('.step').textContent = this.step;
    this.shadowRoot.replaceChildren(html);
  }

  disconnectedCallback() {
    document.removeEventListener('counter:data-increment', this);
  }
}

customElements.define('boa-counter', BoaCounter);
