class BoaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
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

  render() {
    this.title = this.hasAttribute('title') ? this.getAttribute('title') : '';
    this.description = this.hasAttribute('description') ? this.getAttribute('description') : '';
    this.shadowRoot.innerHTML = /* html */`
    <style>${BoaCard.styles}</style>
    <div class="component">
      <h2 class="title">${this.title}</h2>
      <slot name="boa-card-content"></slot>
      <p class="description">${this.description}</p>
    </div>
    `;
  }
}

customElements.define('boa-card', BoaCard);
