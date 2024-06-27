import React, { useRef} from "react";
import './ContactForm.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_vn08pv2', 'template_86zo8kp', form.current, {
                publicKey: 'EA96YpJqJaXyTsNc1',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert("Message Sent");
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
            e.target.reset();
    };

    return (

        <div className="contact-form-content">
            <form ref={form} onSubmit={sendEmail}>
                
                <input type="text" name="firstname" placeholder="First Name" required />
                <input type="text" name="lastname" placeholder="Last Name" />
                
                <input type="email" name="email" placeholder="Email" 
                pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i" required />
                <textarea type="text" name="message" placeholder="Message" rows={7} required />
                
                <button type= "submit">SEND</button>
        
            </form>
        </div>
    )
}

export default ContactForm;