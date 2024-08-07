import Grid from "./components/Grid"
import { PathFindingProvider } from "./context/PathContext"
import { SpeedProvider } from "./context/SpeedContext"
import { TileProvider } from "./context/TileContex"


function App() {

  return (
    <>
      <PathFindingProvider>
        <TileProvider>
          <SpeedProvider>
            <div className="h-screen w-screen flex flex-col">
              <Grid/>
            </div>
          </SpeedProvider>
        </TileProvider>
      </PathFindingProvider>
    </>
  )
}

export default App
