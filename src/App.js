import { RouterProvider } from "react-router-dom";
import router from "./Routes";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
