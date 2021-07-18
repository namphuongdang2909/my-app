import React from 'react'
import './card.scss'

const Card = ({ data, handleClickDetailBtn }) => {
    const { id = 0, name = '', website = '', username = '' } = data;

    const firstLetterOfName = name.charAt(0).toUpperCase();


    return <div className="card">
        <div className="card-avatar">
            {firstLetterOfName}
        </div>
        <div className="card-details">
            <p className="card-details-name text">
                {name}
            </p>
            <p className="card-details-username text">
                @{username}
            </p>
            <a className="card-details-website text" href={`https://${website}`} target="_blank">
                {website}
            </a>
        </div>
        <div className="btn card-button">
            <span onClick={() => handleClickDetailBtn(id)}>MORE DETAILS</span>
        </div>
    </div>
}

export default Card;