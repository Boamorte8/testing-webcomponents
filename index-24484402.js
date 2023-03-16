var h=Object.defineProperty;var m=(s,e,r)=>e in s?h(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r;var i=(s,e,r)=>(m(s,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const u=document.createElement("template");u.innerHTML=`
  <style></style>
  <div class="component">
    <h2 class="title"></h2>
    <slot name="boa-card-content"></slot>
    <p class="description"></p>
  </div>
`;class l extends HTMLElement{constructor(){super();i(this,"title",this.getAttribute("title")||"");i(this,"description",this.getAttribute("description")||"");this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){const r=u.content.cloneNode(!0);r.querySelector("style").textContent=l.styles,r.querySelector(".title").textContent=this.title,r.querySelector(".description").textContent=this.description,this.shadowRoot.appendChild(r)}}customElements.define("boa-card",l);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}static get styles(){return`
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
      <style>${c.styles}</style>
      <label>${this.label}</label>
    `}attributeChangedCallback(e,r,a){if(console.log(`Attribute ${e} had been modified from ${r} to ${a}.`),e==="label"){const t=this.shadowRoot.querySelector("label");t.textContent=a}}}customElements.define("boa-label",c);class d extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}static get styles(){return`
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
    `}changeExtraText(e){const r=this.shadowRoot.querySelector("span");r.textContent=e}render(){this.shadowRoot.innerHTML=`
      <style>${d.styles}</style>
      <header>
        <img src="boamorte.svg" alt="Boamorte.dev" class="logo">
        <h1>Boamorte.dev <span>Other text</span></h1>
      </header>
    `}}customElements.define("boamorte-header",d);const b=document.querySelector("boamorte-header"),p=document.querySelector("boa-label");setTimeout(()=>{b.changeExtraText("New text for testing"),p.setAttribute("label","New label for testing")},5e3);
