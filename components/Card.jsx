import React from "react"

export default function Card(props){
    return (
        <div>
        <div className="card">
            <div className="place-img">
                <img  src={props.imageUrl} />
            </div>
            <div className="card-info">
                <div className="location">
                    <img src="./images/location-pin.png" />
                    <h4>{props.country}</h4>
                    <div className="google-map-link">
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                </div>
                <h1>{props.place}</h1>
                <h3>{props.dateOfCreation}</h3>
                <p>{props.description}</p>
            </div>
        </div>
        <hr />
        </div>
    )
}
