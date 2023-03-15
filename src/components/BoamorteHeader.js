class BoamorteHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  static get styles() {
    return /* css */`
      header {
        background: var(--gray-10);
        display: flex;
        gap: var(--size-4);
        align-items: center;
        padding: var(--size-3);
      }

      h1 {
        color: var(--gray-0);
        font-size: var(--font-size-3);
        font-family: var(--font-sans);
      }

      .logo {
        width: var(--size-8);
      }
    `;
  }

  changeExtraText(newText) {
    const span = this.shadowRoot.querySelector('span');
    span.textContent = newText;
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${BoamorteHeader.styles}</style>
    <header>
      <img src="boamorte.svg" alt="Boamorte.dev" class="logo">
      <h1>Boamorte.dev <span>Other text</span></h1>
    </header>
    `;
  }
}

customElements.define('boamorte-header', BoamorteHeader);
