import "./App.css";

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

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="produtos">Produtos</a>
        </li>
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <>
      <h3>Home</h3>
      <p>Essa é a home do site</p>
    </>
  );
}

function Produtos() {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
  ];

  return (
    <>
      <h3>Produtos</h3>
      {produtos.map(({ nome, propriedades }) => (
        <div>
          <p>{nome}</p>
          <ul>
            {
              propriedades.map((element) => <li>{element}</li>)
            }
          </ul>
        </div>
      ))}
    </>
  );
}
