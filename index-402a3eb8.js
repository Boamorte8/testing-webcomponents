(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();class n extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}static get styles(){return`
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
    `}changeExtraText(r){const o=this.shadowRoot.querySelector("span");o.textContent=r}render(){this.shadowRoot.innerHTML=`
      <style>${n.styles}</style>
      <header>
        <img src="boamorte.svg" alt="Boamorte.dev" class="logo">
        <h1>Boamorte.dev <span>Other text</span></h1>
      </header>
    `}}customElements.define("boamorte-header",n);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}static get styles(){return`
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
      <style>${i.styles}</style>
      <label>${this.label}</label>
    `}attributeChangedCallback(r,o,s){if(console.log(`Attribute ${r} had been modified from ${o} to ${s}.`),r==="label"){const e=this.shadowRoot.querySelector("label");e.textContent=s}}}customElements.define("boa-label",i);const l=document.querySelector("boamorte-header"),c=document.querySelector("boa-label");setTimeout(()=>{l.changeExtraText("New text for testing"),c.setAttribute("label","New label for testing")},5e3);
