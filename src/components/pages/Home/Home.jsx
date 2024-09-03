import "./Home.css";
import backgroundImage from "../../../assets/homemAranha.jpeg";
function Home() {
  return (
    <main className="ContainerMenu">

      <section className="hero-section">
        <img
          src={backgroundImage}
          alt="Imagem de fundo"
          className="hero-image"/>
        <div className="overlayImg"></div>
        <div className="overlay">
          <h1>ASSISTA NO NOSSO SITE</h1>
          <p>FILMES EM ALTA QUALIDADE</p>
          <button>Assista Agora</button>
        </div>
      </section>
      
    </main>
  );
}

export default Home;
