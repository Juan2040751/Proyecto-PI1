import { ScrollControls } from "@react-three/drei";
import Featured from "./components/featured_event";
import Landing from "./components/landing";
import Museum from "./components/museum";
import Gastronomy from "./components/Gastronomy";

function Home({ references, LandingRef, setScroll}) {
  return (
    <ScrollControls pages={1} damping={0.1}>
      <Landing reference={LandingRef} setScroll={setScroll}/>
      <Featured reference={references[0]} />
      <Museum reference={references[1]} />
      <Gastronomy reference={references[2]}/>
    </ScrollControls>
  );
}

export default Home;