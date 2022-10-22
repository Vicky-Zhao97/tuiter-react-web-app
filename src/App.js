import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";


/*function App() {
    return (
        <h1>Hello World!</h1>
    );
}*/

/*function App() {
    return (
        <div className="container">
            <h1>Hello World!</h1>
            <Labs/>
        </div>
    );
}*/

/*function App() {
    return (
        <div className="container">
            <HelloWorld/>
            <Labs/>
        </div>
    );
}*/

/*function App() {
    return (
        <div className="container">
            <HelloWorld/>
            <Labs/>
            <Tuiter/>
        </div>
    );
}*/

/*function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <HelloWorld/>
                <Labs/>
                <Tuiter/>
            </div>
        </BrowserRouter>
    );
}*/

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index /*path="/labs"*/
                           element={<Labs/>}/>
                    <Route path="/hello"
                           element={<HelloWorld/>}/>
                    <Route path="/tuiter/*" element={<Tuiter/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;






/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Web Dev!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
