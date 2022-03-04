import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect( //event listener. When state changes, run this function
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                    .then((customerArray) => {
                        setCustomers(customerArray)
                    })
        },
        []
    )

    return (
        <>
            <h2>Customers</h2>

            {
                customers.map(
                    (customerObject) => {
                        return <div><h4>{customerObject.name}</h4>
                            <p>Id: {customerObject.id}</p>
                            <p>Age: {customerObject.age}</p>
                            
                            </div>
                    }
                )
            }
        </>
    )
}