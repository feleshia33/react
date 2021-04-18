import React from 'react'

function ContactCard(props) {
    return(
            <div className="contact-card">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
            <p>More info about {props.contact.name}: {props.contact.desc}</p>
            </div>
    )
}

export default ContactCard 