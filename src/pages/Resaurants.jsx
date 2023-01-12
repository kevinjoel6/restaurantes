import { Typography, Button, Grid, Card } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CgDetailsMore } from "react-icons/cg";
import { FcFilledFilter } from "react-icons/fc";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import { Input } from "@mui/material";

export const Resaurants = () => {
  const [query, setquery] = useState("");
  const [restaurants, setrestaurants] = useState([]);

  const getData = async () => {
    try {
      //llamos mi base de datos
      const res = await fetch("http://localhost:8800/api/restaurante");
      const data = await res.json();

      const realData = data.filter(
        (data) =>
          data.name.includes(query) ||
          data.precio == query ||
          data.type.includes(query)
      );
      setrestaurants(realData);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, [query]);

  return (
    <div className="rest">
      <div className="title">Encuentra tu resturante favorito</div>
      <section style={{ marginBottom: "1rem" }}>
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <Typography variant="p" style={{ fontWeight: "400" }}>
            Filtra por nombre, precio o tipo de comida
          </Typography>
          <Input size="medium" onChange={(e) => setquery(e.target.value)} />
          <FcFilledFilter style={{ marginTop: "10px" }} />
        </Grid>
      </section>
      <section
        className="res-card"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1rem",
        }}
      >
        {restaurants.map((e) => (
          <Card key={e.id}>
            <CardContent>
              <div>
                <h4>{e.name}</h4>
              </div>
              <section className="portada">
                <img src={`/assets/images/${e.image}`} />
              </section>
              <section className="info">
                <p>Tipo de restaurante: {e.type}</p>
                <p>Precio: {e.price}/5</p>
              </section>
            </CardContent>
            <CardActions>
              <Button size="small"></Button>
              <section className="more-info">
                <Link to={`/restaurant/${e._id}`} className="more-text">
                  Mas detalles
                </Link>
                <CgDetailsMore className="icon-more" />
              </section>
            </CardActions>
          </Card>
        ))}
      </section>
    </div>
  );
};
