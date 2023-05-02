import "./App.css";

import { Routes, Route } from "react-router-dom";
import NavBar from "./Component/NaveBar/NavBar";
import Header from "./Component/Header/Header";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header/>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
