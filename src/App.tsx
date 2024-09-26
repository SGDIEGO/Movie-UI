import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <div className="h-screen w-screen bg-slate-600">
      <Header />
      <Outlet />
    </div>
  );
}
