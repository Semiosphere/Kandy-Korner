import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect( //event listener. When state changes, run this function
        () => {
            fetch("http://localhost:8088/products?_expand=productType&_sort=productTypeId")
                .then(res => res.json())
                    .then((productArray) => {
                        setProducts(productArray)
                    })
        },
        []
    )
    const addProduct = (eventId) => {
        
        const purchase = {
            productId: eventId,
            locationId: 1,
            employeeId: 1,
            customerId: parseInt(localStorage.getItem("kandy_customer")),
            quantity: 1
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(purchase)
        }

        return fetch("http://localhost:8088/purchases", fetchOption)
            .then(() => {
            })
    }
        
    
        //addProduct function needs to post a new obj to json.
        //

    return (
        <>
            <h2>Products</h2> 

            {
                products.map(
                    (productObject) => {
                        return <div><h3>{productObject.name}</h3> <button onClick={() => {addProduct(productObject.id)}}className="btn btn-primary">Add {productObject.name} to cart</button>
                            <li>Id: {productObject.id}</li>
                            <li>Type: {productObject.productType.type}</li>
                            <li>${productObject.price}</li>
                            </div>
                    }
                )
            }
        </>
    )
}
//when button is clicked, a new purchases obj should appear in api.