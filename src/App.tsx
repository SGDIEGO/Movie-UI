import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="h-full w-full bg-black">
      <Header />
      <Outlet />
    </div>
  );
}
