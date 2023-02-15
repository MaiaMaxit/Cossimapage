import '../styles/components/pages/Home.css';
import React from "react";

const Home =(props) => {
    return (
        <main className="holder">
        <div className="home">
           <img class= "centrar" src="img/home/compras.jpg" alt="Compras" />
        <h2>BIENVENIDOS</h2>
        <div className="columnas">
           <div className="mision">
               <h3>Nuestra Misión</h3>
               <p>Nuestro principal objetivo en On Trend Agency, es proporcionar a nuestros clientes la información más concreta, precisa y clara hoy, sobre las tendencias y hábitos de consumo del mañana, en moda y diseño.
                  Ayudar y guiar a nuestros clientes para ser los primeros en aplicar las últimas tendencias, conectar con su público objetivo, impactando en le mercado y colocando sus productos o servicios, por delante de la competencia.</p>
           </div>
           <div className="metodologia">
               <h3>Metodología</h3>
               <p>Una visión 360º. Nuestra metodología de predicción, nos permite obtener una visión concisa, de las tendencias globales del futuro, igualando la competitividad en el mercado de pequeñas y grandes empresas.
                  El mundo gira entorno a las nuevas tecnologías y la comunicación, todo está conectado, el nexo entre consumo y tendencias es inherente. Los cambios se suceden velozmente, el análisis y el seguimiento continuo de los cambios sociológicos y culturales son la clave del éxito.</p>
           </div>
           </div>
        </div>
   </main>
    )
}
export default Home;