// const page = (
//   <div>
//     <img src="./react-logo.png" width="40px" />
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K Stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps including mobile apps</li>
//     </ul>
//   </div>
// );

function TestFunc() {
  return (
    <div>
      <img src="./react-logo.png" width="40px" />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K Stars on Github</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps including mobile apps</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<TestFunc />, document.getElementById("root"));
