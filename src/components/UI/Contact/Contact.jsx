import React from "react";

import { Phone, Clock } from "lucide-react";

import "./contact.css";

const Contact = () => {
    return (
        <div className = "container-contact">
            <a href="https://ufop.br/telefones-e-enderecos" className = "contact-phone" target = "__blank">
                <Phone className = "phone-icon" />
                <p className = "phone-paragraph">Telefones e endereços</p>
            </a>
            <a href="https://ufop.br/horarios-de-atendimento" className = "contact-clock" target = "_blank">
                <Clock className = "clock-icon"/>
                <p className = "clock-paragraph">Horários de atendimento</p>
            </a>
        </div>
    );
};

export default Contact;