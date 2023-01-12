import React from "react";

import AppBar from "@mui/material/AppBar";

import { FaUserAlt } from "react-icons/fa";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../feature/users/userSlice";

export const Navbar = () => {
  // const {username}=React.useContext(UserContext);

  //redux sacar estado
  const userState = useSelector((state) => state.users);
  const dispatch = useDispatch();
  //console.log(userState)

  const log = () => {
    dispatch(logout());
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "orange" }}>
      <Toolbar>
        <img src="./assets/logo/loogo.png" className="logo" />
        <Button>
          <Link className="elem" to="/">
            HOME
          </Link>
        </Button>
        <Button>
          <Link className="elem" to="/">
            Restaurantes
          </Link>
        </Button>
        <Button>
          <Link className="elem" to="/logout">
            Registarme
          </Link>
        </Button>
        <Button>
          <Link className="log" to="/login">
            <FaUserAlt className="user-icon" />
            login
          </Link>
        </Button>
        <Typography>{userState.username}</Typography>
        <section className="prueba">
          <button className="logout" onClick={log}>
            Log Out
          </button>
        </section>
      </Toolbar>
    </AppBar>
  );
};
