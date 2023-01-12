import { Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginn } from "../feature/users/userSlice";
import { Password } from "@mui/icons-material";
// import { Input} from "@nextui-org/react";

export const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [user, setuser] = useState({});
  const [users, setusers] = useState([]);
  const [error, seterror] = useState(false);

  //verificacionn del usuario
  const login = () => {
    console.log(users);
    console.log(user);
    const filtrado = users.find(
      (e) => e.name === user.name && e.password === user.password
    );
    console.log(filtrado);

    if (filtrado) {
      //subimos al localstorage

      //cambiamos nuestro estaod de redux

      navigate("/");
    } else {
      seterror(true);
      setuser({});
      //return alert("no correcto")
    }
  };

  const loginDb = async () => {
    try {
      //llamada a la api
      const res = await axios.post("http://localhost:8800/api/login", user);
      console.log(res);
      //todo va bien
      if (res.status == 201) {
        //redux
        dispatch(loginn(user));

        navigate("/");
      }
    } catch (err) {
      //autenticacionn fallida
      seterror(true);
      setuser({});
      console.log(err);
    }
  };
  const getData = async () => {
    try {
      const res = await fetch("/assets/data/data1.json");
      const data = await res.json();
      setusers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    //  console.log(user)
    // login()
    loginDb();
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ height: "73vh" }}>
      <Typography variant="h6">Conectarme a mi aplicacion</Typography>
      {error && <Alert severity="error">usuario o contraseña incorrecta</Alert>}

      <form onSubmit={handelSubmit}>
        <Input
          name="username"
          onChange={handleChange}
          placeholder="tu usuario"
        />
        <Input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="tu contraseña"
        />
        <Input placeholder="conectarme" type="submit" />
      </form>
    </div>
  );
};
