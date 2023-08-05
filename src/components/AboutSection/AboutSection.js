export default function AboutSection(){
  return (
    <section id="about">
      <div className="limit_container">
        <h1>QUEM SOMOS NÓS</h1>
        <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
      </div>
      <div className="container-box">
        <img className="logo" src={process.env.PUBLIC_URL + '/assets/loja.png'} alt="Logo" />
        <div className="container-box-text">
            <h1 className="uppercaseText">nossas filiais</h1>
            <p>Hoje temos mais de 20 filiais pelo Brasil e América</p>
        </div>
        <div className="container-box-text">
            <h1 className="uppercaseText">atendimento flexível</h1>
            <p>Hoje temos mais de 20 filiais pelo Brasil e América</p>
        </div>
        <img className="logo" src={process.env.PUBLIC_URL + '/assets/atendimento.png'} alt="Logo" />
      </div>
    </section>
  )
}