import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Produtos } from "./components/Produtos";

function App() {
  const { pathname } = window.location;
  return (
    <>
      <Header />
      {pathname === "/produtos" ? <Produtos /> : <Home />}
    </>
  );
}

export default App;
