import React, { useState } from 'react';
import axios from 'axios';

function ReceiveProduct(props) {
    const [productID, setProductID] = useState("");
    const [quantity, setQuantity] = useState("");
    const [statusCode, setStatusCode] = useState(0);
    const [response, setResponse] = useState([]);
    const [waiting, setWaiting] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    function handleFieldChange(event) {
        switch (event.target.id) {
            case "productID":
                setProductID(event.target.value);
                break;
            case "quantity":
                setQuantity(event.target.value);
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setWaiting(true);
        setIsSubmit(true);

        axios(
            {
                method: 'patch',
                url: 'Inventory/Receive',
                params: {
                    id: productID,
                    quantity: quantity,
                }
            }
        ).then((res) => {
            setWaiting(false);
            setResponse(res.data);
            setStatusCode(res.status);
        }
        ).catch((err) => {
            setWaiting(false);
            setResponse(err.response.data);
            setStatusCode(err.response.status);
        });
        event.target.reset();
    }


    return (

        <div>
            <h1>Receive Product</h1>

            <p>{isSubmit ? <p>{waiting ? "Awaiting response..." : `Response recieved ${statusCode}: ${JSON.stringify(response)}`}</p> : ""}</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="productID">Product ID</label>
                <input id="productID" type="text" onChange={handleFieldChange} />
                <label htmlFor="quantity">Product Quantity</label>
                <input id="quantity" type="text" onChange={handleFieldChange} />
                <input type="submit" value="Submit!" />
            </form>
        </div>


    );
}
export { ReceiveProduct };