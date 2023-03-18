var v=Object.defineProperty;var f=(a,t,e)=>t in a?v(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var n=(a,t,e)=>(f(a,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const m=document.createElement("template");m.innerHTML=`
  <style></style>
  <div class="component">
    <h2 class="title"></h2>
    <slot name="boa-card-content"></slot>
    <p class="description"></p>
  </div>
`;class l extends HTMLElement{constructor(){super();n(this,"title",this.getAttribute("title")||"");n(this,"description",this.getAttribute("description")||"");this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){const e=m.content.cloneNode(!0);e.querySelector("style").textContent=l.styles,e.querySelector(".title").textContent=this.title,e.querySelector(".description").textContent=this.description,this.shadowRoot.appendChild(e)}}customElements.define("boa-card",l);const b=document.createElement("template");b.innerHTML=`
  <style></style>
  <dl class='data'>
    <dt class='label'>Counter:</dt>
    <dd class='counter'></dd>
  </dl>
`;class c extends HTMLElement{constructor(){super();n(this,"step",this.getAttribute("step")||1);n(this,"counter",0);this.attachShadow({mode:"open"})}static get styles(){return`
      .data {
        display: inline-flex;
        border-radius: var(--radius-2);
        padding: var(--size-3);
        color: var(--gray-0);
        border: var(--border-size-1) solid var(--gray-1);
      }
    `}handleEvent(e){e.type==="counter:data-increment"&&(this.counter+=e.detail.counter,this.render())}connectedCallback(){document.addEventListener("counter:data-increment",this),this.render()}render(){const e=b.content.cloneNode(!0);e.querySelector("style").textContent=c.styles,e.querySelector(".counter").textContent=this.counter,this.shadowRoot.replaceChildren(e)}disconnectedCallback(){document.removeEventListener("counter:data-increment",this)}}customElements.define("boa-counter",c);const y=document.createElement("template");y.innerHTML=`
  <style></style>
  <button class="button">
    Increment +<span class="step"></span>
  </button>
`;class d extends HTMLElement{constructor(){super();n(this,"step",this.getAttribute("step")||1);n(this,"button");this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}handleEvent(e){if(e.type==="counter:data-step"&&(this.step=e.detail.counter,this.render()),e.type==="click"){const o=new CustomEvent("counter:data-increment",{detail:{counter:this.step},bubbles:!0,composed:!0});this.dispatchEvent(o)}}connectedCallback(){document.addEventListener("counter:data-step",this),this.render()}render(){const e=y.content.cloneNode(!0);e.querySelector("style").textContent=d.styles,e.querySelector(".step").textContent=this.step,this.button=e.querySelector("button"),this.button.addEventListener("click",this),this.shadowRoot.replaceChildren(e)}disconnectedCallback(){document.removeEventListener("counter:data-step",this)}}customElements.define("boa-increment",d);class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}static get styles(){return`
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
      <style>${u.styles}</style>
      <label>${this.label}</label>
    `}attributeChangedCallback(t,e,o){if(console.log(`Attribute ${t} had been modified from ${e} to ${o}.`),t==="label"){const r=this.shadowRoot.querySelector("label");r.textContent=o}}}customElements.define("boa-label",u);class h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.render()}static get styles(){return`
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
    `}changeExtraText(t){const e=this.shadowRoot.querySelector("span");e.textContent=t}render(){this.shadowRoot.innerHTML=`
      <style>${h.styles}</style>
      <header>
        <img src="boamorte.svg" alt="Boamorte.dev" class="logo">
        <h1>Boamorte.dev <span>Other text</span></h1>
      </header>
    `}}customElements.define("boamorte-header",h);const g=document.createElement("template");g.innerHTML=`
  <style></style>
  <div class="wrapper">
    <label for="step" class="label">Step</label>
    <input type="number" name="step" id="step" class="input" value="1">
  </div>
`;class p extends HTMLElement{constructor(){super();n(this,"step",this.getAttribute("step")||1);n(this,"input");n(this,"regex",/\d+/g);this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}handleEvent(e){if(e.type==="change"){const o=e.target.value;if(o==="")return;const r=new CustomEvent("counter:data-step",{detail:{counter:+o},bubbles:!0,composed:!0});this.dispatchEvent(r)}}connectedCallback(){const e=g.content.cloneNode(!0);e.querySelector("style").textContent=p.styles,this.input=e.querySelector("input"),this.input.addEventListener("change",this),this.shadowRoot.appendChild(e)}disconnectedCallback(){this.input.removeEventListener("counter:data-step",this)}}customElements.define("boa-step",p);const E=document.querySelector("boamorte-header"),x=document.querySelector("boa-label");setTimeout(()=>{E.changeExtraText("New text for testing"),x.setAttribute("label","New label for testing")},5e3);
