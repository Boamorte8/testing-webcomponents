(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}static get styles(){return`
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
    `}render(){this.title=this.hasAttribute("title")?this.getAttribute("title"):"",this.description=this.hasAttribute("description")?this.getAttribute("description"):"",this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <div class="component">
      <h2 class="title">${this.title}</h2>
      <slot name="boa-card-content"></slot>
      <p class="description">${this.description}</p>
    </div>
    `}}customElements.define("boa-card",i);class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}static get styles(){return`
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
    `}static get observedAttributes(){return["label"]}render(){this.label=this.hasAttribute("label")?this.getAttribute("label"):"",this.shadowRoot.innerHTML=`
      <style>${n.styles}</style>
      <label>${this.label}</label>
    `}attributeChangedCallback(r,s,o){if(console.log(`Attribute ${r} had been modified from ${s} to ${o}.`),r==="label"){const e=this.shadowRoot.querySelector("label");e.textContent=o}}}customElements.define("boa-label",n);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}static get styles(){return`
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
    `}changeExtraText(r){const s=this.shadowRoot.querySelector("span");s.textContent=r}render(){this.shadowRoot.innerHTML=`
      <style>${l.styles}</style>
      <header>
        <img src="boamorte.svg" alt="Boamorte.dev" class="logo">
        <h1>Boamorte.dev <span>Other text</span></h1>
      </header>
    `}}customElements.define("boamorte-header",l);const c=document.querySelector("boamorte-header"),d=document.querySelector("boa-label");setTimeout(()=>{c.changeExtraText("New text for testing"),d.setAttribute("label","New label for testing")},5e3);
