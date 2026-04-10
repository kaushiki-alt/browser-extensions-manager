import React from 'react'

const Card = (props) => {
    const { logo, name, isActive, description, toggle, remove } = props;
    return (
        <div className="card">
            <div className="content">
                <img src={logo} alt={name} />
                <div className="text" >
                    <h3>{name}</h3>
                    <p>{description}</p>
                </div>
            </div>
            <div className="buttons" >
                <button className="remove" onClick={() => remove(name)}> Remove </button>
                <input type="checkbox" role="switch" className={`switch ${isActive ? 'active' : 'inactive'}`} onChange={() => toggle(name)}   checked={isActive} />
            </div>
        </div>
    )
}

export default Card;
