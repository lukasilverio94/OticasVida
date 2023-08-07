import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about">
      <div className="limit_container">
        <h1>QUEM SOMOS NÓS</h1>
        <p>
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida
          iniciou suas atividades focada no atendimento ao público de renda mais
          baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo.{" "}
        </p>
        {/* CARDS */}
        <div className="card_box">
          <img src="assets/loja.png" />

          <div className="card_about">
            <h4>Nossas filiais</h4>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </div>

          <div className="card_about">
            <h4>Atendimento flexível</h4>
            <p>Nossa equipe possui é treinada para te atender</p>
          </div>
        
        <img src='assets/atendimento.png'/>

        </div>
      </div>
    </section>
  );
}
