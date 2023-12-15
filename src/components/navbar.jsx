import React, { Component } from 'react'
import "../styles.css";
import { Link } from 'react-router-dom';

export class navbar extends Component {
  render() {
    return (
      <div className='navbarContainer'>
        <div className="leftSide">

        </div>
        <div className="rightSide">
          <div className="home">
            <Link to={"http://localhost:3000/"}><h1>Home</h1> </Link>  
          </div>
          <div className="allPosts">
            <Link to={"http://localhost:3000/blogs/10"}><h1>All Posts</h1> </Link> 
          </div>
          <div className="about">
            <Link to={"http://localhost:3000"}><h1>About</h1> </Link>
          </div>
          <div className="contact">
            <Link to={"http://localhost:3000"}><h1>Contact</h1> </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default navbar