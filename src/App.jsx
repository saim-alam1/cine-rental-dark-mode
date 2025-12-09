import { useState } from "react";
import "./App.css";
import MovieList from "./cine/MovieList";
import { MovieContext } from "./contexts";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ToastContainer } from "react-toastify";

function App() {
  const [cartData, setCartData] = useState([]);
  return (
    <>
      {/* <MovieContext.Provider value={(cartData, setCartData)}> */}
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-14">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
        <ToastContainer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
