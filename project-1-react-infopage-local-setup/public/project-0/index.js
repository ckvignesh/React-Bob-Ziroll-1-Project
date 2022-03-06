function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.png" width="20px" />
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>Copyright xyz. All rights reserved</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <h1> Reasons I'm interested to learn React</h1>
      <ul>
        <li>Popular Library</li>
        <li>Job Opportunities</li>
      </ul>
    </div>
  );
}

function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
