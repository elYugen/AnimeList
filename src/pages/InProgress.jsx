import Navbar from "../components/Navbar/Navbar"
import Topbar from "../components/Topbar/Topbar";
import Footer from "../components/Footer/Footer"
import AnimeSearchForToSee from "../components/AnimeSearchForWatched/AnimeSearchForWatched";
import AnimeInProgress from "../components/AnimeInProgress/AnimeInProgress";

function InProgress() {
  return (
      <>
      {/* <Navbar/> */}
      <Topbar />
      <div className="container">
        <a href="/">
          <div className="pagesTitle">
            <h3><i className="bi bi-arrow-left"></i></h3>
            <h3>Mes animés en cours</h3>
          </div>
        </a>
        <AnimeInProgress/>
      </div>
      </>
  );
};

export default InProgress;