const ContactSection = () => {
return (
  <section id="contacts">
      <div className="limit_container">
        <h1>FALE CONOSCO</h1>
        <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
      </div>
      {/*Container dos contatos dentro tem mais 2 pequenos  */}
      <div className="contact_container">
        <div className="contact_box">
          <h3>Contato</h3>
          {/*INSERIR ICONES DEPOIS*/}
          <p>Nova Iguaçu, RJ</p>
          <p>(21) 9999-9999</p>
          <p>contato@oticavida.com</p>
        </div>
        <div className="social_box">
          <h3>Nossas Redes Sociais</h3>
          <p>/OticaVida</p>
          <p>@oticavidarj</p>
          <p>@oticavidarj</p>
        </div>
      </div>

  </section>
)
}

export default ContactSection