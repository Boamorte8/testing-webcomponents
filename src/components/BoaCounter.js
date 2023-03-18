const template = document.createElement('template');
template.innerHTML = /* html */`
  <style></style>
  <dl class='data'>
    <dt class='label'>Counter:</dt>
    <dd class='counter'></dd>
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
      .data {
        display: inline-flex;
        border-radius: var(--radius-2);
        padding: var(--size-3);
        color: var(--gray-0);
        border: var(--border-size-1) solid var(--gray-1);
      }
    `;
  }

  handleEvent(event) {
    if (event.type === 'counter:data-increment') {
      this.counter += event.detail.counter;
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
    html.querySelector('.counter').textContent = this.counter;
    this.shadowRoot.replaceChildren(html);
  }

  disconnectedCallback() {
    document.removeEventListener('counter:data-increment', this);
  }
}

customElements.define('boa-counter', BoaCounter);
