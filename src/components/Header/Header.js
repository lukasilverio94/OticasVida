import './Header.css'
export default function Header(){
  return (
    <header>
      <div className="navbar limit_container">
      <img className="logo" src={process.env.PUBLIC_URL + '/assets/logo.png'} alt="Logo" />
      <nav>
        <ul>
          <li>
            <a href="#products">Produtos</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
            </li>
          <li>
            <a href="#contacts">Contato</a>
            </li>
        </ul>
      </nav>
      </div>
    </header>
  )
}