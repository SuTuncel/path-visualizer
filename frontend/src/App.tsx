import { PathFindingProvider } from "./context/PathContext"

function App() {

  return (
    <>
      <PathFindingProvider>
       <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </PathFindingProvider>
    </>
  )
}

export default App
