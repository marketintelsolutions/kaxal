import React from 'react'

const Service = ({ img, text, head }) => {
    return (
        <div className="zen-item">
            <img src={img} alt={img} />
            <h4>{head}</h4>
            <p className="text">{text}</p>
        </div>
    )
}

export default Service