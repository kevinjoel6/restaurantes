import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StarsRating from "react-star-rate";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { Typography, Button, Card, Input } from "@mui/material";
import { Container } from "@mui/system";

import axios from "axios";

export const Detail = () => {
  const [newcommnet, setnewcommnet] = useState("");
  const [users, setusers] = useState([]);
  const [start, setstart] = useState("");

  const [writer, setwriter] = useState("");

  const [show, setshow] = useState(false);

  const { idRestaurant } = useParams();
  const navigate = useNavigate();

  const [restaurant, setrestaurant] = useState({});
  const [comments, setcomments] = useState([]);
  const [mostrarcomentarios, setmostrarcomentarios] = useState(true);

  const getRestaurant = async (filtro) => {
    try {
      const res = await fetch("http://localhost:8800/api/restaurante");
      const data = await res.json();
      //console.log(data)

      //filtramos
      const finalData = await data.find((e) => e._id == filtro);

      setrestaurant(finalData);

      await getComments(filtro);
    } catch (err) {
      console.log(err);
    }
  };

  const getComments = async (filtro) => {
    try {
      const res = await fetch("http://localhost:8800/api/details");
      const data = await res.json();
      console.log(data);

      const finalData = await data.filter((e) => e.name == filtro);
      console.log(finalData);
      setcomments(finalData);
      if (!finalData) {
        alert("nada");
        setmostrarcomentarios(false);
      } else {
        setmostrarcomentarios(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const commentario = {
      user: writer,
      comment: newcommnet,
      name: restaurant._id,
      stars: start,
    };
    console.log(commentario);
    comment(commentario);

    console.log(comment);
  };

  const getUsers = async () => {
    try {
      const { data } = await axios.get("http://localhost:8800/api/users");

      setusers(data);
    } catch (err) {
      console.log(err);
    }
  };

  const comment = async (body) => {
    try {
      const res = await axios.post("http://localhost:8800/api/doramas", body);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
    getRestaurant(idRestaurant);
  }, []);

  return (
    <div>
      <Card style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
        <CardMedia
          sx={{
            minHeight: "300px",
            height: "100%",
          }}
          image={`/assets/images/${restaurant.image}`}
          title="green iguana"
        />

        <CardContent>
          <Typography color="black" gutterBottom variant="h5" component="div">
            {restaurant.name}
          </Typography>
          <Typography variant="body2" color="black">
            Tipo de restuante: {restaurant.type}
          </Typography>
          <Typography variant="body2" color="black">
            Precio: {restaurant.price}/5
          </Typography>
          <Typography variant="body2" color="black">
            Telefono: {restaurant.telephone}
          </Typography>
          <Container>
            Menú
            <br />
            {restaurant.platos}
          </Container>
          <CardActions>
            <Button size="small" onClick={() => navigate(-1)}>
              volver
            </Button>
            <Button size="small" onClick={() => setshow(!show)}>
              comentar
            </Button>
          </CardActions>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setwriter(e.target.value)}>
          {users.map((user) => (
            <option
              onChange={(e) => setwriter(e.target.value)}
              value={user._id}
            >
              {user.username}
            </option>
          ))}
        </select>
        <Input
          placeholder="crear tu comentario"
          onChange={(e) => setnewcommnet(e.target.value)}
        />
        <Input
          type="number"
          placeholder="pon tu nota"
          onChange={(e) => setstart(e.target.value)}
        />
        <div>
          {/* <StarsRating
        value={value}
        onChange={value => {
          setValue(value);
        }}
      /> */}
        </div>
        <button className="comment-b" type="submit">
          Comentar
        </button>
      </form>

      <Typography variant="h6">Comentarios recientes</Typography>

      {mostrarcomentarios && (
        <div>
          {comments.map((c) => (
            <section className="comments" key={c.id}>
              <h5>{c.user ? c.user.username : "Guest"}</h5>
              <p>{c.comment}</p>
              <p>Valoración: {c.stars}</p>
            </section>
          ))}
          {/* <section>
            {users.map((user) => (
              <h2 value={user._id}>{user.username}</h2>
            ))}
          </section> */}
        </div>
      )}
    </div>
  );
};
