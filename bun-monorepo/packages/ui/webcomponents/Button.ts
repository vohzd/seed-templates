class Button extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.addClickListener();
  }

  render() {
    const buttonText = this.innerHTML.trim() || "Default Text";
    this.shadowRoot!.innerHTML = `<button><slot>${buttonText}</slot></button>`;
  }

  addClickListener() {
    this.shadowRoot!.querySelector("button").addEventListener("click", () => {
      this.dispatchEvent(
        new CustomEvent("button-click", {
          detail: { message: "Button clicked434322342!" },
          bubbles: true,
          composed: true,
        })
      );
    });
  }
}

customElements.define("k-button", Button);

export default Button;
