const page = (
  <div>
    <h1>hello h1</h1>
    <h2>Hello h2</h2>
    <ul>
      <li>test</li>
      <li>check</li>
    </ul>
  </div>
);

// document.getElementById("root").append(JSON.stringify(page));
// document.getElementById("root").append(page);
ReactDOM.render(page, document.getElementById("root"));
