import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, MenuItem } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/CloseOutlined";
import "./Navbar.css";
import { Link } from "react-router-dom";
import reactLogo from "../assets/logo192.png";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const handleClose = () => {
    setOpenMenu(null);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={reactLogo} alt="reactjs" className="navbar__logo" />
      </Link>

      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div onClick={() => setClicked(!clicked)} className="navbar__icons">
        {clicked ? (
          <CloseIcon className="navbar__icon" />
        ) : (
          <MenuIcon
            className="navbar__icon"
            onClick={e => setOpenMenu(e.currentTarget)}
          />
        )}
        <Menu
          id="simple-menu"
          anchorEl={openMenu}
          open={Boolean(openMenu)}
          PaperProps={{
            style: {
              maxHeight: "100vh",
              width: "100ch"
            }
          }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} className="navbar__menu">
            <Link to="/">
              <h3>Home</h3>
            </Link>
          </MenuItem>
          <MenuItem className="navbar__menu" onClick={handleClose}>
            <Link to="/about">
              <h3>About</h3>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className="navbar__menu">
            <Link to="/projects">
              <h3>Projects</h3>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} className="navbar__menu">
            <Link to="/contact">
              <h3>Contact</h3>
            </Link>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
