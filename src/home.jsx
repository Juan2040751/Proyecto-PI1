import { ScrollControls } from "@react-three/drei";
import Featured from "./components/featured_event";
import Landing from "./components/landing";
import Museum from "./components/museum";

function Home({ references, LandingRef}) {
  return (
    <ScrollControls pages={1} damping={0.1}>
      <Landing reference={LandingRef}/>
      <Featured reference={references[0]} />
      <Museum reference={references[1]} />
    </ScrollControls>
  );
}

export default Home;