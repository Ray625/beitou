import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/en",
    element: <Homepage/>
  }
])

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
