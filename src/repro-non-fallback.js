import { Window } from "happy-dom";

const window = new Window({ url: "https://localhost:8080" });

const div = window.document.createElement("div");

const style = window.document.createElement("style");

style.textContent = `
  div {
    --my-color1: pink;
    --my-color2: red;

    border-color: var(--my-color1);

    color: var(--my-color1, var(--my-color2, blue));

    background-color: var(--my-color1, var(--my-color2));
  }
`;

window.document.head.appendChild(style);
window.document.body.appendChild(div);

// OK: expected: pink, actual: pink
console.log(window.getComputedStyle(div).getPropertyValue("border-color"));

// with fallback value
// OK: expected: pink, actual: pink
console.log(window.getComputedStyle(div).getPropertyValue("color"));

// without fallback value
// NG: expected: red, actual: "" (empty string)
console.log(window.getComputedStyle(div).getPropertyValue("background-color"));
