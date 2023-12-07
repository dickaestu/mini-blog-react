import { Route, Routes } from "react-router-dom";
import "./assets/css/app.css";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainLayout>tes</MainLayout>}></Route>
      </Routes>
    </div>
  );
}

export default App;
