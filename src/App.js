import { Routes, Route } from "react-router-dom";
import router from "./Routes";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <div className='App'>
        <Routes>
          {router.map((items) => (
            <Route path={items.path} key={items.path} element={items.element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
