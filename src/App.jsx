import React, { Component } from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'
import AddDeveloper from './AddDeveloper'
import './App.css'
import DisplayBios from './DisplayBios'
import Home from './Home'
import Navbar from './Navbar'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      developers: [

      ]
    }
  }

  // handleNewDeveloper = (dev) => {
  //   dev.id = this.state.developers.length + 1;
  //   let newDev = [ ... this.state.developers, dev ];
  //   this.setState({ developers: newDev });
  // }

  componentDidMount() {
    fetch('https://dev-bios-api-dot-cog01hprmn542jqme4w772bk1dxpr.uc.r.appspot.com/developers/all')
      .then(response => response.json())
      .then(devs => {this.setState({developers:devs})})
      .catch(error => console.error('Error fetching developers:', error));
  }


  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/developers" element={
              <DisplayBios developers={this.state.developers} />
            } />
            <Route path="/developers/add" element={
              <AddDeveloper />
            } />
          </Routes>
        </Router>
      </>
    );
  }
}




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       {/* <DeveloperBio title="Prerak's Bio" favoriteLanguage="Java" yearStarted="2025"/> */}
//       <DisplayBios/>
//     </>
//   )
// }