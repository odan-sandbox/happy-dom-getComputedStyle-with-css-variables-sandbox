import { Window } from "happy-dom";

const window = new Window({ url: "https://localhost:8080" });

const div = window.document.createElement("div");
div.setAttribute("style", "--my-color1: pink;");

const style = window.document.createElement("style");

style.textContent = `
  div {
    border-color: var(--my-color1);
  }
`;

window.document.head.appendChild(style);
window.document.body.appendChild(div);

// OK: expected: pink, actual: "" (empty string)
console.log(window.getComputedStyle(div).getPropertyValue("border-color"));
