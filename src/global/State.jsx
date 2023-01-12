import React from "react";
import UserContext from "./Context";

//creamos el estado y su context
const UserState = (props) => {
  let user = {};

  /*
    fetch("/assets/data/data.json")
    .then(response=>response.json())
    .then(data=>{
        user=data;
        console.log(user)

    })
  */
  user = {
    nom: "enrique",
    rol: "invitdo",
    idioma: "CA",
  };

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserState;
