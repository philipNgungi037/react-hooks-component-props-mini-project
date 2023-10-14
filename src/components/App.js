import React from "react";
import blogData from "../data/blog";
import Header from './Header'

console.log(blogData);

function App() {
  return (
    <div className="App">
     <Header props={blogData}/>
    </div>
  );
}

export default App;
