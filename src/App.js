import React from "react"
import './App.css';
import Header from "./Header";
import TinderCards from "./TincarCards"
import CardFooter from "./CardFooter"

function App() {
  return (
    <div className="app">

    {/*Header*/}
    <Header/>
    {/*TinderCards*/}
    <TinderCards/>
    {/*Footer*/}
    <CardFooter/>
    </div>
  );
}

export default App;
