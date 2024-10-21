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
      <Topbar />
      <RandomPick />
      <div className="container">
        <InProgress/>
        <ToSee/>
        <Footer/>
      </div>
      </>
  );
};

export default Home;