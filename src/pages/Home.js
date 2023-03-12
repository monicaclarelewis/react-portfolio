import React from "react";

function Home() {
    return (
        <div className="jumbotron" id="banner">
        <div className="jumboCopy" id="jumboText">
        <h1 className="display-4">Monica Lewis</h1>
        <p className="lead">Welcome to my front-end web development portfolio!</p>
        <img src={require('./images/profile.png')} alt="" />
        </div>
    </div>
    );
  }
  
  export default Home;