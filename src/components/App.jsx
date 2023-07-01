import "./App.css";
import RedEpic from "./RedEpic/RedEpic.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import HomePage from "./HomePage/HomePage.jsx";
import Loader from "./Loader.jsx";
import { useEffect, useState } from "react";
import CustomersPage from "./CustomersPage/CustomersPage.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <HomePage />
          <CustomersPage />
          <div
            style={{
              height: "100vh",
              width: "100%",
              backgroundColor: "black",
              color: "white",
              padding: 0,
              margin: 0,
            }}
          >
            nas film slike sa snimanja (reklame,promo,spotovi) on scroll
          </div>
          {/*  insert button to see all gear we own/use/rent */}
          <RedEpic />
          <div
            style={{
              height: "100vh",
              width: "100%",
              backgroundColor: "pink",
              padding: 0,
              margin: 0,
            }}
          >
            filmovi (video i slike)
          </div>
        </>
      )}
    </>
  );
};

export default App;
