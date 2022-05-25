import React from "react";

function Footer() {
  return(
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="jbfsh">
            {new Date().getFullYear()} @Copyright Text
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Footer


