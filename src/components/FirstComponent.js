import React from 'react';
import './FirstComponent.css'

function FirstComponent(props){
    console.log(props)
    return(
        <div className="container">
            <br />
            <div className="card text-center">
                <div className="card-header">
                    Data From The API
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <p className="card-text"><b>Height:</b>  {props.data.height}</p>
                    <p className="card-text"><b>Gender:</b>  {props.data.gender}</p>
                </div>
            </div>       
        </div>
    )

}

export default FirstComponent