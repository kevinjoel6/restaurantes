import { Input, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Exit = () => {
  const navigate = useNavigate();

  const [user, setuser] = useState({});

  const handleChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const creacion = async () => {
    try {
      //todo bien
      const res = await axios.post("http://localhost:8800/api/register", {
        username: user.username,
        password: user.password,
      });
      //redigiremos
      navigate("/login");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(user);

    creacion();

    alert("usuario creado correctamente");
    navigate("/login");
  };

  return (
    <div style={{ height: "73vh" }}>
      <Typography style={{ textAlign: "center" }}>Registarme</Typography>

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
        <Input
          type="password"
          name="password1"
          onChange={handleChange}
          placeholder="repita su contraseña"
        />

        <Input placeholder="crear usuario" type="submit" />
      </form>
    </div>
  );
};
