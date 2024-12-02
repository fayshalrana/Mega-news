import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Loading from "./Components/Pages/Loading/Loading";
import Footer from "./Components/Share/Footer/Footer";
import Header from "./Components/Share/Header/Header";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress < 100 ? prevProgress + 10 : 100
      );
    }, 30); // Adjust the interval for smoothness

    const timeout = setTimeout(() => {
      setLoading(false);
      clearInterval(interval);
    }, 4000); // Simulating a 3-second loading time

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading loading={loading} progress={progress} />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
