import './SectionProducts.css';

export default function SectionProducts() {
  return (
    <section id="products">
      <div className="limit_container">
        <div className="header_products_container">
          <h2>Nossos produtos</h2>
          <p>
            Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
            modelos masculino, feminino e infantil.
          </p>
          <p>
            Todos os nossos preços são acessíveis e contam com a melhor qualidade
            do mercado.
          </p>
        </div>
        {/*CARDS CONTAINER*/}
        <div className="cards">
          <div className="card">
            <h3>Óculos de grau</h3>
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/assets/oculos01.png"}
              alt="óculos de grau"
            />
            <p>R$ 500,00</p>
          </div>
          <div className="card">
            <h3>Óculos Transition</h3>
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/assets/oculos02.png"}
              alt="óculos de grau"
            />
            <p>R$ 750,00</p>
          </div>
          <div className="card">
            <h3>Óculos de Sol</h3>
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/assets/oculos03.png"}
              alt="óculos de grau"
            />
            <p>R$ 700,00</p>
          </div>
          <div className="card">
            <h3>Óculos Infantil</h3>
            <img
              className="logo"
              src={process.env.PUBLIC_URL + "/assets/oculos04.png"}
              alt="óculos de grau"
            />
            <p>R$ 500,00</p>
          </div>
        </div>
        {/* Features Products*/}
        <div className="products_features">
          <p>Todos os nossos produtos incluem: </p>
          <ul>
            <li>Garantia de 1 ano</li>
            <li>Manutenção preventiva</li>
            <li>Descontos especiais na compra da segunda unidade</li>
            <li>Flexibilidade de pagamento</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
