import React from 'react';
import "./KontaktBtn.css"

const KontaktBtn = ({link, label, icon: Icon, color}) => {
    return (
        <a href={link} id="contactLink" style={{"backgroundColor": color}}>
            {Icon && <Icon id="linkIcon" />}
            <h3 id="name">{label}</h3>
        </a>
    );
};

export default KontaktBtn;