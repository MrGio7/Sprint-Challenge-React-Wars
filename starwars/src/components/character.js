import React from "react";

function Character(props){
    return(
        <div className='character-card'>
            <h3>{props.charProp.name}</h3>
            <p>
            <strong>Gender: </strong> {props.charProp.gender}
            </p>
            <p>
            <strong>Birthday: </strong> {props.charProp.birth_year}
            </p>
            <p>
            <strong>Height: </strong> {props.charProp.height}
            </p>
            <p>
            <strong>Eye Color: </strong> {props.charProp.eye_color}
            </p>
        </div>
    )
}

export default Character;