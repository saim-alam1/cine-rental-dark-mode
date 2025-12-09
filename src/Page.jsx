import { useContext } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ThemeContext } from "./contexts";

export default function Page() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
}
