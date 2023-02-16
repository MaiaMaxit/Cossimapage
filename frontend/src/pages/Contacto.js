import '../styles/components/pages/Contacto.css';
import React, { useState } from 'react';
import axios from 'axios';

const Contacto = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.date.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <main className="holder contacto">
            <div>
                <h2>CONTACTANOS</h2>
                <form className="formulario" onSubmit={handleSubmit}>
                    <p>
                        <label>APELLIDO Y NOMBRE</label>
                        <input type= "text" name="nombre" value={form.Data.nombre} onChange={handleChange} />
                    </p>
                    <p>
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </p>
                    <p>
                    <label>Telefono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>
                    <p>
                    <label>Contanos tu experiencia</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}>
                        </textarea>
                    </p>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> : null}
                    <p className='centrar'><input type="submit" value="ENVIAR" />
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