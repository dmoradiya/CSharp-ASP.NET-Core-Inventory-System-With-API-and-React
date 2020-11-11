import React, { useState } from 'react';
import axios from 'axios';

function CreateProduct(props) {
    const [productID, setProductID] = useState("");
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [discontinue, setDiscontinue] = useState("");
    const [statusCode, setStatusCode] = useState(0);
    const [response, setResponse] = useState([]);
    const [waiting, setWaiting] = useState(false);

    function handleFieldChange(event) {
        switch (event.target.id) {
            case "productID":
                setProductID(event.target.value);
                break;
            case "name":
                setName(event.target.value);
                break;
            case "quantity":
                setQuantity(event.target.value);
                break;
            case "discontinue":
                setDiscontinue(event.target.value);
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setWaiting(true);

        axios(
            {
                method: 'post',
                url: 'Inventory/Create',
                params: {
                    id: productID,
                    name: name,
                    quantity: quantity,
                    discontinue: discontinue
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
    }


    return (
        
        <div>
            <h1>Create Product</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="productID">Product ID</label>
                <input id="productID" type="text" onChange={handleFieldChange} />
                <label htmlFor="name">Product Name</label>
                <input id="name" type="text" onChange={handleFieldChange} />
                <label htmlFor="quantity">Product Quantity</label>
                <input id="quantity" type="text" onChange={handleFieldChange} />
                <label htmlFor="discontinue"> IsDiscontinue?:</label>
                <select id="discontinue" onChange={handleFieldChange}>
                    <option value="true">YES</option>
                    <option value="false">NO</option>
                </select>
                <input type="submit" value="Submit!" />
            </form>
        </div>
        
        
        );
}
export { CreateProduct };