import {FC, FormEvent, useState} from 'react';
import validator from 'validator';

export const SectionContact:FC = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [ openAlert, setOpenAlert ] = useState(false);
    const [errormsg, setErrormsg] = useState('');

    const [btnForm, setBtnForm] = useState(false);

    const data = {
        name,
        email,
        phone,
        message,
    }

    const handleClose = () => {
        setOpenAlert(false);
        console.log('boton cerrar')
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(isFormValid()){
            setErrormsg('')
            setBtnForm(true);
      
            console.log('Enviando...')

            fetch('/api/send-email', {
              method: 'POST',
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
                "Accept": "application/json, text/plain, */*",
              },

            }).then((res) => {

              console.log('Response received')

              if(res.status === 200){
                console.log('Response succeeded')
                setName('')
                setEmail('')
                setPhone('')
                setMessage('')
                setOpenAlert(true)
                setBtnForm(false)
              }

            }).catch((error) => {

              console.log(error)
              console.log('peto la app')
              
            })
          }
    }

    const isFormValid = () => {
        if(name.trim().length === 0){
          setErrormsg('El nombre es requerido')
          setOpenAlert(true)
          return false
        } else if(!validator.isEmail(email)){
          setErrormsg('El correo es requerido')
          setOpenAlert(true)
          return false
        } else if(!(phone.length >= 10) || !(Number(phone) * 0 === 0)){
            setErrormsg('El numero es requerido')
            setOpenAlert(true)
            return false
        }else if(message.length < 10){
          setErrormsg('El mensaje es requerido')
          setOpenAlert(true)
          return false
        }
        return true
      }


      if(openAlert){
        setTimeout(() => {
            setOpenAlert(false)
        }, 3000)
      }

  return (
    <div className='section-contact'>
        <div className='section-contact-container-text'>
            <div className='section-contact-title'>Contactános</div>
            <div className='section-contact-description'>Escríbenos por whatsApp o llena el formulario de contactos y nos comunicaremos lo más pronto posible.</div>
            <button className='section-contact-button'>Contactar por whatsApp</button>
        </div>

        <div className='section-contact-container-form' id='formulario'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Nombre:</label>
                <input 
                    type="text" 
                    id='name' 
                    name='name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder='Coloca tu nombre' 
                    className='section-contact-input' 
                />
                
                <label htmlFor='Email'>Email:</label>
                <input 
                    type="email" 
                    id='Email' 
                    name='nmail' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='correo@correo.com' 
                    className='section-contact-input' 
                />
                
                <label htmlFor='Phone'>Teléfono:</label>
                <input 
                    type="tel" 
                    id='Phone' 
                    name='phone' 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder='Coloca tu # de teléfono' 
                    className='section-contact-input' 
                />
                
                <label htmlFor='Message'>Mensaje:</label>
                <textarea 
                    id='Message' 
                    name='message' 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder='Coloca tu mensaje' 
                    className='section-contact-input section-contact-input-message' 
                />
                {
                    btnForm
                    ? <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    : <input type="submit" value="Enviar" className='section-contact-input-submit' />
                }    
            </form>
        </div>

        <div
            className={
                openAlert 
                ? 
                    errormsg ? 'visible-alert background-red animate__animated animate__fadeIn' : 'visible-alert background-green animate__animated animate__fadeIn' 
                : 'unvisible-alert'
            }
        >
            <button onClick={handleClose}>
                X
            </button>
            <div>
                {
                    errormsg 
                    ? errormsg
                    : 'Formulario enviado!'
                }
            </div>
        </div>

        <div className='section-contact-container-map'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15947.574926088382!2d-79.88860897671384!3d-2.193916074413534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6e64c00a5ebf%3A0xb983f0134e08ebb!2sMalec%C3%B3n%202000!5e0!3m2!1ses-419!2sec!4v1678897897375!5m2!1ses-419!2sec" 
                style={{border:"0" }}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                
            </iframe>
        </div>
    </div>
  )
}
