import React, { useEffect, useState } from "react"

export const OrderList = () => {
    const [orders, setOrders] = useState([])

    useEffect( //event listener. When state changes, run this function
        () => {
            fetch(`http://localhost:8088/purchases?customerId=${localStorage.getItem("kandy_customer")}&_expand=product`)
                .then(res => res.json())
                    .then((orderArray) => {
                        setOrders(orderArray)
                    })
        },
        []
    )

    return (
        <>
            <h2>Orders</h2>

            {
                orders.map(
                    (orderObject) => {
                        return <div><h4>{orderObject.name}</h4>
                            <h4>{orderObject.product.name}</h4>
                            <p>Qty: {orderObject.quantity}</p>
                            <p>${orderObject.product.price}</p>
                            
                            </div>
                    }
                )
            }
        </>
    )
}