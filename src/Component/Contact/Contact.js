import React from "react";
import './Contact.css';
import ContactCard from "./ContactCard/ContactCard";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {

    return (
        <section className="contact-container" id='contact'>
            <h5>Contact</h5>
            <div className="contact-content">
                <div style = {{ flex: 1 }}>
                    <ContactCard
                        iconUrl="Icons/email.png"
                        text="Raghavangra12@gmail.com"
                    />

                    <ContactCard
                        iconUrl="Icons/linkedin.png"
                        text="https://www.linkedin.com/in/raghavangra/"
                    />

                    <ContactCard
                        iconUrl="Icons/github.png"
                        text="https://github.com/raghavangra"
                    />
                </div>
                <div style = {{ flex: 1 }}>
                    <ContactForm />
                </div>
            </div>
        </section>
            
    )
}

export default Contact;