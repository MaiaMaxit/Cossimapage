import '../styles/components/pages/Contacto.css';
const Contacto = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>CONTACTANOS</h2>
                <form action="" method="" className="formulario">
                    <p>
                    <label for="nombre">APELLIDO Y NOMBRE (Requerido)</label>
                    <input type="text" name="" />
                    </p>
                    <p>
                    <label for="email">CORREO ELECTRONICO (Requerido)</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">TELEFONO</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje">ESCRIBINOS TU MENSAJE</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <input type="submit" value="ENVIAR" />
                </p>
                </form>
            </div>
            <div>
            <h2> Tambien nos encontras en:</h2>
<div class="datos">
<h6>INSTAGRAM</h6>
<p>@cossima.jean</p>
<h6>WHATSAPP</h6>
<p>2257549455</p>
<h6>SUCURSAL</h6>
<p>HIPOLITO YRYGOYEN 176</p>
</div>
</div>
        </main>
    )
}
export default Contacto;