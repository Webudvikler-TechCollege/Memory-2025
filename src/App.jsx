import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { MemoryGame } from "./components/MemoryGame/MemoryGame"

const App = () => {

  return (
    <>
      <Header />
        <Main>
          <MemoryGame />
        </Main>
      <Footer />
    </>
  )
}

export default App
