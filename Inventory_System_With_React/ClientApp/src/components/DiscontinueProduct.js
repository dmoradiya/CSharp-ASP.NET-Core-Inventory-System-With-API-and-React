import React, { useState } from 'react';
import axios from 'axios';

function DiscontinueProduct(props) {
    const [productID, setProductID] = useState("");
    const [statusCode, setStatusCode] = useState(0);
    const [response, setResponse] = useState([]);
    const [waiting, setWaiting] = useState(false);

    function handleFieldChange(event) {
        switch (event.target.id) {
            case "productID":
                setProductID(event.target.value);
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        setWaiting(true);

        axios(
            {
                method: 'patch',
                url: 'Inventory/Discontinue',
                params: {
                    id: productID,
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
                <input type="submit" value="Submit!" />
            </form>
        </div>


    );
}
export { DiscontinueProduct };