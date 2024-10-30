import { Outlet } from "react-router-dom";
import { AppContextProvider } from "./context/app.context";
import { SearchContextProvider } from "./context/search.context";

export default function App() {
  return (
    <AppContextProvider>
      <SearchContextProvider>
        <Outlet/>
      </SearchContextProvider>
    </AppContextProvider>
  );
}
