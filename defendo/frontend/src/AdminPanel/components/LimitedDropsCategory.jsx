import React, { useState, useEffect } from 'react';
import LimitedDropsProduct from '../All Products/LimitedDropsProduct';
import { useGetLimitedDropsDetailsQuery, useDeleteLimitedDropsMutation  } from '../../features/limitedDrops';


const LimitedDropsCategory = () => {

    const [Products, setProducts] = useState([]);
    const { data } = useGetLimitedDropsDetailsQuery();
    const [ deleteLimitedDropsDetailsMutation ] = useDeleteLimitedDropsMutation();
    const [isAddProductPopupOpen, setAddProductPopupOpen] = useState(false);


    const handleDelete = async (id) => {
        try {
            await deleteLimitedDropsDetailsMutation(id);
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product._id !== id)
            );
        } catch (error) {
            console.error('Error deleting newRelease:', error);
        }
    };
    const handleAddProductClick = () => {

        setAddProductPopupOpen(true);
    };


    useEffect(() => {
        if (data) {
            setProducts(data);
        };
        console.log(Products);
    }, [data]);

    return (
        <div className='p-2 container'>
            <h2 className='text-center mt-4'>Limited Drops Category</h2>
            <div className="d-flex font-semibold  px-5 pt-5 ">
                <div className="row">
                    <div className="col-md-3 border border-dark border-end-0 p-4 text-center">
                        <p className="fw-semibold ">ID</p>
                    </div>
                    <div className="col-md-2 border border-dark border-end-0 p-4 text-center">
                        <p className="fw-semibold">Name</p>
                    </div>
                    <div className="col-md-2 border border-dark border-end-0 p-4 text-center">
                        <p className=" fw-semibold ">Price</p>
                    </div>
                    <div className="col-md-2 border border-dark border-end-0 p-4 text-center">
                        <p className=" fw-semibold t">InStock</p>
                    </div>
                    <div className="col-md-3 border border-dark p-4 text-center">
                        <p className=" fw-semibold ">Action</p>
                    </div>
                </div>
            </div>
            {
                Products.map((product, idx) => (
                    <div key={idx} className="d-flex font-semibold  px-5">
                        <div className="row">
                            <div className="col-md-3 border border-dark border-end-0 border-top-0 p-4 text-center">
                                <p className="fw-semibold ">{product._id}</p>
                            </div>
                            <div className="col-md-2 border border-dark border-end-0 border-top-0 p-4 text-center">
                                <p className="fw-semibold">{product.name}</p>
                            </div>
                            <div className="col-md-2 border border-dark border-end-0 border-top-0 p-4 text-center">
                                <p className=" fw-semibold ">{product.price}</p>
                            </div>
                            <div className="col-md-2 border border-dark border-end-0 border-top-0 p-4 text-center">
                                {
                                    product.quantity == 1 && (
                                        <p className=" fw-semibold">YES</p>
                                    )
                                }
                                {
                                    product.quantity == 0 && (
                                        <p className=" fw-semibold">NO</p>
                                    )
                                }
                            </div>
                            <div className="col-md-3 border border-dark border-top-0 p-4 text-center">
                                <button type="button" class="btn btn-outline-danger px-0" onClick={() => handleDelete(product._id)}><i class="bi bi-trash"></i></button>
                            </div>
                        </div>
                    </div>
                ))
            }
            <button type="button" onClick={handleAddProductClick} class="btn btn-primary px-0 w-25 text-center ms-5 m-4">Add Product <i class="bi bi-plus-circle-fill ms-2"></i></button>

            {isAddProductPopupOpen && (
                <div className="popup">

                    <LimitedDropsProduct />

                    <button onClick={() => setAddProductPopupOpen(false)} className='mx-5'>
                        Close
                    </button>
                </div>
            )}

        </div>
    );
};

export default LimitedDropsCategory;
