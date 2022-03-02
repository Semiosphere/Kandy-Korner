import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setLocations] = useState([])

    useEffect( //event listener. When state changes, run this function
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                    .then((locationArray) => {
                        setLocations(locationArray)
                    })
        },
        []
    )

    return (
        <>
            <h2>Locations</h2>

            {
                locations.map(
                    (locationObject) => {
                        return <div><h3>{locationObject.address}</h3>
                            <p>Open every day from {locationObject.openHour} am to {locationObject.closeHour} pm</p>
                            </div>
                    }
                )
            }
        </>
    )
}