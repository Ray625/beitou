import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Homepage from "./pages/homepage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />
  }
  // {
  //   path: '/',
  //   element: <Navigate to="/zh" replace />, // 預設重定向到中文頁面
  // },
  // {
  //   path: '/:lng',
  //   element: <Homepage />,
  // }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
