import React from "react";
import UserContext from "./Contexto";

//creamos el estado y su context
const UserState = (props) => {
  let user = {};

  user = {
    username: "invitado",
  };

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserState;
