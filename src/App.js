import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Resaurants } from "./pages/Resaurants";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";
import { Exit } from "./pages/Exit";
import { Detail } from "./pages/Detail";
import Footer from "./components/Footer";
import UserState from "./contextos/State.jsx";

function App() {
  return (
    <div className="App">
      <UserState>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Resaurants />} path="/" />
            <Route element={<Detail />} path="/restaurant/:idRestaurant" />
            <Route element={<Login />} path="/login" />
            <Route element={<Exit />} path="/logout" />
          </Routes>
        </BrowserRouter>
        <Footer />
      </UserState>
    </div>
  );
}

export default App;
