import { Component, h } from "@stencil/core";

@Component({
  tag: "my-other-component",
  styleUrl: "other-component.css",
  shadow: true
})
export class OtherComponent {
  render() {
    return <p>This is another cool Web Component</p>;
  }
}
