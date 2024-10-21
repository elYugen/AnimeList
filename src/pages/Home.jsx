import Topbar from "../components/Topbar/Topbar";
import Navbar from "../components/Navbar/Navbar"
import RandomPick from "../components/RandomPick/RandomPick"
import InProgress from "../components/InProgress/InProgress"
import ToSee from "../components/ToSee/ToSee"
import Footer from "../components/Footer/Footer"

function Home() {
  return (
      <>
      <Navbar/>
      <div className="mobileContainer">
        <Topbar/>
        <RandomPick/>
      </div>
      <div className="container">
        <InProgress/>
        <ToSee/>
        <Footer/>
      </div>
      </>
  );
};

export default Home;