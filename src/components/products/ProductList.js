import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect( //event listener. When state changes, run this function
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
                .then(res => res.json())
                    .then((productArray) => {
                        setProducts(productArray)
                    })
        },
        []
    )

    return (
        <>
            <h2>Products</h2>

            {
                products.map(
                    (productObject) => {
                        return <div><h3>{productObject.name}</h3>
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