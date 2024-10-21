import Topbar from "../components/Topbar/Topbar";
import RandomPick from "../components/RandomPick/RandomPick"
import InProgress from "../components/InProgress/InProgress"
function Home() {
  return (
      <>
      <Topbar />
      <RandomPick />
      <div className="container">
        <InProgress/>
      </div>
      </>
  );
};

export default Home;