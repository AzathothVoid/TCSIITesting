import React, { useState } from 'react';
import { useGetOrdersQuery, useDeleteOrderMutation } from '../features/orders';

const Orders = () => {

    const { data: orders, error, isLoading, refetch } = useGetOrdersQuery();

    const [deleteOrder, { isLoading: isDeleting }] = useDeleteOrderMutation();
    const [expandedOrderId, setExpandedOrderId] = useState(null);


    const handleDelete = async (orderId) => {
        await deleteOrder(orderId);
        refetch()
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='ms-4'>
            <h2 className='text-center my-4'>Orders</h2>
            {orders.length === 0 ? (
                <p className='fs-2'>You have no orders.</p>
            ) : (
            orders.map((order) => (
                <div key={order._id}>

                    <span className='fw-bold'>Name: {order.firstName}</span>
                    <button className='btn btn-primary bg-transparent w-25 border-0' onClick={() => setExpandedOrderId(expandedOrderId === order._id ? null : order._id)}>
                        {expandedOrderId === order._id ? <i class="bi bi-chevron-up text-dark fs-4 fw-bold"></i> : <i class="bi bi-chevron-down fs-4 text-dark fw-bold"></i>}
                    </button>
                    {expandedOrderId === order._id && (
                        <div>
                            <p>First Name: {order.firstName}</p>
                            <p>Last Name: {order.lastName}</p>
                            <p>Email: {order.email}</p>
                            <p>Address: {order.address}</p>
                            <p>Country: {order.country}</p>
                            <p>City: {order.city}</p>
                            <p>Zip: {order.zip}</p>
                            <p>Phone Number: {order.phoneNumber}</p>
                            <p>Order Notes: {order.orderNotes}</p>
                            <p>Total: {order.total}</p>
                            <h3>Products:</h3>
                            <ul>
                                {order.products.map((product, index) => (
                                    <li key={index}>
                                        Name: {product.Name}, Price: {product.price}, Quantity: {product.quantity}, Size: {product.size}, Item Price: {product.itemPrice}

                                    </li>
                                ))}

                            </ul>

                            <button onClick={() => handleDelete(order._id)} disabled={isDeleting}>
                                {isDeleting ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    )}
                    <hr />
                </div>
            )))}
        </div>
    );
};

export default Orders;
