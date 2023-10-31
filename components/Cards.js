import React from "react"
export default function Cards(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} className="card--img" />
            <div className = "card--right-column">
                <div className="card--eyebrow">
                    <img src="./images/pin.png" className="card--pin" />
                    <span className="card--location">{props.item.location}</span>
                    <span className="card--maplink"><a href={props.item.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <h1>{props.item.title}</h1>
                <p className="card--dates">{props.item.startDate} - {props.item.endDate}</p>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}