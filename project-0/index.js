function Page() {
  return (
    <div>
      <nav>
        <header>
          <img src="./react-logo.png" width="20px" />
          <h1> Reasons I'm interested to learn React</h1>
        </header>
      </nav>
      <ul>
        <li>Popular Library</li>
        <li>Job Opportunities</li>
      </ul>
      <footer>
        <small>Copyright xyz. All rights reserved</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
