import { ScrollControls } from "@react-three/drei"
import Featured from "./components/featured_event"
import Landing from "./components/landing"
import Museum from "./components/museum"

function Home() {
    return (
        <ScrollControls pages={2} damping={0.1}>
            <Landing />
            <Featured />
            <Museum />
        </ScrollControls>
    )
}

export default Home