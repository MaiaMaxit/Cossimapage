import '../styles/components/pages/Servicios.css';
import React from "react";

const Servicios =(props) => {
    return(
        <main className="holder">
        <div className="headservicios">
            <img src="img/servicios/head.jpg" alt="serv0" />
        </div>

        <h2>SERVICIOS</h2>

        <div class="servicios">
        <h3> Servicios de Consultoría de Moda, 
            Tendencias & Marketing</h3>
        </div>
        <div class="servicio">
            <img src="img/servicios/serv1.jpg" alt="serv1" />
            <div class="info">
                <h4>¿Qué nos hace únicos?</h4>
                <p>Todos nuestros servicios de consultoría de moda, análisis de tendencias, diseño, marketing y comunicación, están enfocados en aumentar tus beneficios, impulsar tus ventas, reducir el tiempo y los costes. ¡Nos adelantamos al futuro, te proporcionamos las tendencias clave del mañana!</p>
        <p>Trabajamos con entusiasmo, para inspirar en tus proyectos un nuevo pensamiento, innovador y creativo, en sintonía con los movimientos culturales y sociológicos, adelantándonos a los hábitos de consumo de tu público objetivo.
        </p>
                <ul>
                    <li>Aumentamos tus beneficios, impulsamos tus ventas, reducimos el tiempo y los costes,
                        facilitándote las tendencias clave del futuro.</li>
                </ul>
                <ul>
                    <li>Trabajamos con pasión para darle vida a tus conceptos, los materializamos en productos de
                        éxito, y en colecciones comerciales.</li>
                </ul>
                <ul>
                    <li>Desarrollamos un plan de crecimiento especifico para tu producto, servicio, marca o empresa,
                        en base a tu público objetivo y demanda del mercado.</li>
                </ul>
                <ul>
                    <li>Mejoramos el rendimiento de tus productos y/o equipos a través de nuestros servicios de
                        consultoría y talleres de innovación.</li>
                </ul>
                <ul>
                    <li>Diseñamos para tu empresa una estratégica de marketing y comunicación efectiva, enfocada en
                        tus consumidores.</li>
                </ul>
            </div>
        </div>
        <div className="servicio">
            <img src="img/servicios/serv2.jpg" alt="serv2" />
            <div className="info">
                <h4>Trend Forecasting</h4>
                <ul>
                    <li>¿Por qué las tendencias son importantes para tu empresa?</li>
                    <li>¿Qué tendencias influyen sobre tu público objetivo?</li>
                    <li>¿Cómo se aplican las tendencias a tus productos o servicios?</li>
                    <li>¿Cuándo llegaran las tendencias al Mercado?</li>
                </ul>
                <p>En Cossima, desciframos el mañana para que puedas tomar las mejores decisiones hoy, nos
                    adelantamos al futuro. Análisis exhaustivos, con información exclusiva, sobre los consumidores de
                    hoy y del mañana.</p>
            </div>
        </div>
        </main>
    )
}
export default Servicios;