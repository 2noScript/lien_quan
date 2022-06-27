import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import { useDesktop, useLaptop } from "./hooks";
import { CardTwo } from "cpm/Card";
function App() {
  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          const Layout = route.layout;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
