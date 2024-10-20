import Topbar from "../components/Topbar/Topbar";
import RandomPick from "../components/RandomPick/RandomPick"
function Home() {
  return (
      <>
      <Topbar />
      <RandomPick />
      <div className="container">
        <h3>Mes Animés En Cours</h3>
      </div>
      </>
  );
};

export default Home;