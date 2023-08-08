import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contacts">
      <div className="limit_container">
        <h1>FALE CONOSCO</h1>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
        </p>       
        <div className="contact_container">
          <div className="contact_box">
            <h3>Contato</h3>            
            <div>
              <p><img src="assets/local.png"/>Nova Iguaçu, RJ</p>
            </div>
            <div>
              <p><img src="assets/telefone.png"/>(21) 9999-9999</p>
            </div>
            <div>
              <p><img src="assets/local.png"/>contato@oticavida.com</p>
            </div>
          </div>
          <div className="contact_box">
            <h3>Nossas Redes Sociais</h3>
            <div>
              <p><img src="assets/fb.png"/>OticaVida</p>
            </div>
            <div>
              <p><img src="assets/ig.png"/>@oticavidarj</p>
            </div>
            <div>
              <p><img src="assets/ig.png"/>@oticavidarj</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
