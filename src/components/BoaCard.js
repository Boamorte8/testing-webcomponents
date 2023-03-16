const template = document.createElement('template');
template.innerHTML = /* html */`
  <style></style>
  <div class="component">
    <h2 class="title"></h2>
    <slot name="boa-card-content"></slot>
    <p class="description"></p>
  </div>
`;

class BoaCard extends HTMLElement {
  title = this.getAttribute('title') || '';
  description = this.getAttribute('description') || '';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get styles() {
    return /* css */`
      .component {
        background-color: var(--gray-7);
        margin-bottom: var(--size-3);
        border-radius: var(--radius-3);
        padding: var(--size-3);
        box-shadow: var(--shadow-2);
      }

      .title {
        color: var(--gray-0);
        margin-top: 0;
      }

      .description {
        color: var(--gray-0);
        margin-bottom: 0;
      }
    `;
  }

  connectedCallback() {
    const html = template.content.cloneNode((true));
    html.querySelector('style').textContent = BoaCard.styles;
    html.querySelector('.title').textContent = this.title;
    html.querySelector('.description').textContent = this.description;
    this.shadowRoot.appendChild(html);
  }
}

customElements.define('boa-card', BoaCard);
