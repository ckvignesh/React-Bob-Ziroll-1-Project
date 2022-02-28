const h1 = document.createElement("h1");
h1.textContent = "this is an imperative way to program";
h1.className = "header";
console.log(h1);

const element = <h1 className="header">This is JSX header</h1>;

ReactDOM.render(element, document.getElementById("root"));
