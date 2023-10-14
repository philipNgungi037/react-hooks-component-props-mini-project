import React from "react";
import blogData from "../data/blog";
import Header from './Header'
import About from "./About";

console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header props={blogData}/>
     <About props={blogData}/>
    </div>
  );
}

export default App;
