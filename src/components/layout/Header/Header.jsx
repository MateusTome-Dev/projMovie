
import "./Header.css";

const Header = () => {
  

  return (
    <header className="header" id="header">
      <nav className="nav-bar">
        <div className="logo">
          <h1><span>New </span>Movie</h1>
        </div>
        <div className="nav-list">
          <ul>
            <li className="nav-item">
              <a href="#" className="nav-link">Início</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Sobre</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Serviços</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Contatos</a>
            </li>
          </ul>
        </div>
        <div className="login-button">
          <button><a href="#">Assista Agora</a></button>
        </div>

        <div className="mobile-menu-icon">
          <button>
            
          </button>
        </div>
      </nav>

      <div className="mobile-menu">
        <ul>
          <li className="nav-item">
            <a href="#" className="nav-link">Início</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Sobre</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Serviços</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contatos</a>
          </li>
        </ul>

        <div className="login-button">
          <button><a href="#">Assista Agora</a></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
