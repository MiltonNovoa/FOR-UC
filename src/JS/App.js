import './CSS/App.css';

function App() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Reddit-like Page</title>
      <header>
        <div id='header-text'>
          <h1>FOR-UC</h1>
        </div>
        <div id='header-search'>
        </div>
        <div id='header-img'>
          <link to=""><img src="public/IMG/new-post-48.png" alt="crear post" /></link>
          <link to="app/(tabs)/Login.jsx"><img src="public/IMG/usuario-50.png" alt="Iniciar sesion" /></link>
        </div>
      </header>
      <div id="container">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">All</a>
            </li>
            <li>
              <a href="#">Create a Community</a>
            </li>
          </ul>
        </nav>
        <main>
          <div className="post">
            <div className="post-title">Nombre para mi negocio</div>
            <div className="post-content">
              Estoy creando una empresa de alimento para mascotas y snacks naturales
              pero lo que más me ha costado es el nombre. Si les dijera que deben
              comprar en alguna de las siguientes marcas, ¿cuál escogerían?
            </div>
            <div className="poll">
              <form id="poll-form">
                <div className="poll-item">
                  <input
                    type="radio"
                    id="crudog"
                    name="brand"
                    defaultValue="CRUDOG"
                  />
                  <label htmlFor="crudog">CRUDOG</label>
                </div>
                <div className="poll-item">
                  <input
                    type="radio"
                    id="pettit"
                    name="brand"
                    defaultValue="PETTIT"
                  />
                  <label htmlFor="pettit">PETTIT</label>
                </div>
                <div className="poll-item">
                  <input
                    type="radio"
                    id="hueso"
                    name="brand"
                    defaultValue="Hueso Carnudo"
                  />
                  <label htmlFor="hueso">Hueso Carnudo</label>
                </div>
                <div className="poll-item">
                  <input
                    type="radio"
                    id="feralis"
                    name="brand"
                    defaultValue="Feralis"
                  />
                  <label htmlFor="feralis">Feralis</label>
                </div>
                <div className="poll-item">
                  <input
                    type="radio"
                    id="syroy"
                    name="brand"
                    defaultValue="SYROY"
                  />
                  <label htmlFor="syroy">SYROY</label>
                </div>
                <button type="submit">Vote</button>
              </form>
            </div>
          </div>
          <div className="post">
            <div className="post-title">
              Tired of searching in folders, emails and apps?
            </div>
            <div className="post-content">
              Tired of searching in folders, emails and apps? Get Curiosity and find
              everything in one place. All safe on your computer.
            </div>
          </div>
        </main>
      </div>
      <footer className="footer">
        <p>Authors: Juan Fernando Orjuela|Milton Andres Novoa Gutierrez|Maria Fernando Sierra Serna</p>
        <p>©2024</p>
      </footer>
    </>
  );
}

export default App;
