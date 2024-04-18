import { define, html } from "hybrids";

function increaseCount(host) {
  host.count += 1;
}

export default define({
  tag: "simple-counter",
  count: 0,
  render: ({ count }) => html` <button onclick="${increaseCount}">Count: ${count}</button> `,
});
