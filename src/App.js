import router from "./routes/routeWrappers";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="h-full">
      <Toaster />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
