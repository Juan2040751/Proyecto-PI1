import { ScrollControls } from "@react-three/drei"
import Featured from "./components/featured_event"
import Landing from "./components/landing"
import NavbarApp from "./components/navbar"

function Home() {
    return (
        <>
            
            <ScrollControls pages={1} damping={0.1}>
                <Landing />
                <Featured style={{ top: "100vh" }} />
            </ScrollControls>
        </>
    );
}

export default Home