// import React from "react";
// import ReactDOM from "react-dom";
// import Header from "./Header";
// import Footer from "./Footer";
// import MainContent from "./MainContent";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" className="nav-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>Copyright Vignesh C K. All rights reserved</small>
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
