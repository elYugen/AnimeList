import Navbar from "../components/Navbar/Navbar"
import Topbar from "../components/Topbar/Topbar";
import Footer from "../components/Footer/Footer"
import AnimeSearchForToSee from "../components/AnimeSearchForToSee/AnimeSearchForToSee";
import AnimeToSee from "../components/AnimeToSee/AnimeToSee";

function ToSee() {
  return (
      <>
      {/* <Navbar/> */}
      <Topbar />
      <div className="container">
        <a href="/">
          <div className="pagesTitle">
            <h3><i className="bi bi-arrow-left"></i></h3>
            <h3>Mes animés à voir</h3>
          </div>
        </a>
        <AnimeToSee/>
      </div>
      </>
  );
};

export default ToSee;