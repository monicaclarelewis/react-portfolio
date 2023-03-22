import React from "react";
import "../styles/Home.css"

function Home() {
    return (
    <div className="home">
        <div className="jumbotron" id="banner">
        <div className="jumboCopy" id="jumboText">
        <h1 className="display-4">Hi, My Name is Monica</h1>
        <div className="lead">
            <p>Welcome to my front-end web development portfolio!</p>
        </div>
        <img id="me" src={require('../assets/profile.png')} alt="" />
        </div>
        </div>
    </div>
    );
}
  
export default Home