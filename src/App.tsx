import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

interface AppProps {}

function App({}: AppProps) {
  // // Create the count state.
  // const [count, setCount] = useState(0);
  // // Create the counter (+1 every second).
  // useEffect(() => {
  //   const timer = setTimeout(() => setCount(count + 1), 1000);
  //   return () => clearTimeout(timer);
  // }, [count, setCount]);
  // // Return the App component.

  const [portfolioData, setPortfolioData] = React.useState([{}]);
  const [project, setProject] = React.useState({});
  const [techData, setTechData] = React.useState([{}]);

  let techUrl = 'https://cole.pythonanywhere.com/api/v1/technologies/';
  useEffect(() => {
    fetch(techUrl)
      .then((res) => res.json())
      .then((data) => setTechData(data));
  }, [techUrl]);

  let url = 'https://cole.pythonanywhere.com/api/v1/projects/';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPortfolioData(data));
  }, [url]);

  function handleClick(id: number, data: any) {
    data.forEach((item: any) => {
      if (item.id === id) {
        setProject(() => item);
      }
    });
  }
  return (
    <div>
      <Header />
      {/* <Project data={project} /> */}

      <p>Hello Worlds</p>

      {/* <section className="cards-list">
          <Carousel key={1} data={portfolioData} handleClick={handleClick}/>  
      </section>   */}

      <Footer />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <p>
    //       Page has been open for <code>{count}</code> seconds.
    //     </p>
    //     <p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </p>
    //   </header>
    // </div>
  );
}

export default App;
