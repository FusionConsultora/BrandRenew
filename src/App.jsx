import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeES from "./pages/HomeES";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeES />,
  }
]);

function App() {
  return (
    <div className="font-poppins">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
