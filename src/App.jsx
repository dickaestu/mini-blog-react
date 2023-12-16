import { Route, Routes } from "react-router-dom";
import "./assets/css/app.css";
import MainLayout from "./layouts/MainLayout";
import Article from "./pages/Article";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <MainLayout>
              <Article />
            </MainLayout>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
