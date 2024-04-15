import "./App.css";
import { Header, Footer } from "./components";
import { Login, SignUp, MainRouter } from "./routes/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <MainRouter></MainRouter>
      <Footer />
    </>
  );
}

export default App;
