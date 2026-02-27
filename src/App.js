import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import Layout from "./Layout/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((route) => {
              return <Route path={route.path} element={route.element} />;
            })}{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
