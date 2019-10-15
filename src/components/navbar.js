import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const styles = {
    navbarColor: {
        backgroundColor: 'white',
        color: '#f5f5f5'
    }
};
    return (
        <nav className="navbar is-transparent" role="navigation" aria-label="main navigation" style = {styles.navbarColor}>
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src="../../checkmarkaqua.png" width="44" height="54"/>
              Donezo
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <NavLink
                className = "navbar-item"
                to = "/dashboard"
                exact
              >Dashboard</NavLink> 
              {!window.localStorage.username ? <NavLink
                className = "navbar-item"
                to = "/login"
                exact
              >Login</NavLink> : null }
              {/* Login link only shows if no one logged in */}
              <NavLink
                className = "navbar-item"
                to = "/environments"
                exact
              >Environments</NavLink>
              <NavLink
                className = "navbar-item"
                to = "/deeds"
                exact
              >Deeds to Do</NavLink>
              <NavLink
                className = "navbar-item"
                to = "/done"
                exact
              >Done Deeds</NavLink>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <NavLink className="button is-primary"
                  to ="/users/new">
                    <strong>Sign up</strong>
                  </NavLink>

                  <NavLink className="button is-light"
                  to = "/logout"
                  exact
                  >
                    Log Out
                  </NavLink>
                  <NavLink className="button is-light"
                  to = "/login"
                  exact
                  >
                    Log in
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
    );
  };

export default NavBar