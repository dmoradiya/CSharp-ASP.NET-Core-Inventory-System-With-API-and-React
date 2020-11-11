import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FullActiveInventory(props) {
    const displayName = FullActiveInventory.name;

    // Configure our state, and our setState standin methods.
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Build the table based on forecast data.
    function renderProductsTable(products) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Product ID</th>                       
                        <th>Product Name</th>
                        <th>Product Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product =>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    async function populateProductData() {
        const response = await axios.get('Inventory/FullActiveInventory');
        setProducts(response.data);
        setLoading(false);
    }

    useEffect(() => {
        populateProductData();
    }, [loading]);

    let contents = loading
        ? <p><em>Loading...</em></p>
        : renderProductsTable(products);

    return (
        <div>
            <h1 id="tabelLabel" >Products</h1>
            {contents}

            <button className="btn btn-primary" onClick={() => { setLoading(true) }}>Refresh</button>
        </div>
    );
}

export { FullActiveInventory };
