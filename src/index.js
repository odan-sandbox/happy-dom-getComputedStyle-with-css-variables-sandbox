import { Window } from "happy-dom";

const window = new Window({ url: "https://localhost:8080" });

const div = window.document.createElement("div");

const style = window.document.createElement("style");

style.textContent = `
  div {
    border-color: var(--unknown, pink);

    color: var(--my-var, var(--my-background, pink));

    --color: blue;
    background-color: var(--unknown, var(--color, pink));
  }
`;

window.document.head.appendChild(style);
window.document.body.appendChild(div);

// OK: expected: pink, actual: pink
console.log(window.getComputedStyle(div).getPropertyValue("border-color"));

// NG: expected: pink, actual: "" (empty string)
console.log(window.getComputedStyle(div).getPropertyValue("color"));

// NG: expected: blue, actual: "" (empty string)
console.log(window.getComputedStyle(div).getPropertyValue("background-color"));
