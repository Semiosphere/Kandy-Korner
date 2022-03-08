import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [product, setProducts] = useState([])

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
        
    
        
        

    return (
        <>
            <h2>Products</h2> 

            {
                product.map(
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
