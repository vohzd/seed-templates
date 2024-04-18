// class TestComponent extends HTMLElement {
//   constructor() {
//     super();
//     this.attachShadow({ mode: "open" });
//     this!.shadowRoot!.innerHTML = `<p>Hello, Web Components!</p>`;
//   }
// }
// window.customElements.define("test-component", TestComponent);

class TestComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello world1234</h1>`;
  }
}

customElements.define("test-component", TestComponent);

export default new TestComponent();
