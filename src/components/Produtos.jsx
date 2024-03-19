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