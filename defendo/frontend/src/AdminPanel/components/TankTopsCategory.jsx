import React, { useState, useEffect } from 'react';
import { useDeleteTankTopsDetailsMutation, useGetTankTopsDetailsQuery } from '../../features/TankTops';
import TankTopsProduct from '../All Products/TankTopsProduct';



const TankTopsCategory = () => {

    const [Products, setProducts] = useState([]);
    const { data } = useGetTankTopsDetailsQuery();
    const [ deleteTankTopsDetailsMutation ] = useDeleteTankTopsDetailsMutation();
    const [isAddProductPopupOpen, setAddProductPopupOpen] = useState(false);


    const handleDelete = async (id) => {
        try {

            await deleteTankTopsDetailsMutation(id);
            setProducts((prevProducts) =>
                prevProducts.filter((product) => product._id !== id)
            );
        } catch (error) {
            console.error('Error deleting TankTops:', error);
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
            <h2 className='text-center mt-4'>TankTops Category</h2>
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
                Products.map((prodcut, idx) => (
                    <div key={idx} className="d-flex font-semibold  px-5">
                        <div className="row">
                            <div className="col-md-3 border border-dark border-end-0 border-top-0 p-4 text-center">
                                <p className="fw-semibold ">{prodcut._id}</p>
                            </div>
                            <div className="col-md-2 border border-dark border-end-0 border-top-0 p-4 text-center">
                                <p className="fw-semibold">{prodcut.name}</p>
                            </div>
                            <div className="col-md-2 border border-dark border-end-0 border-top-0 p-4 text-center">
                                <p className=" fw-semibold ">{prodcut.price}</p>
                            </div>
                            <div className="col-md-2 border border-dark border-end-0 border-top-0 p-4 text-center">
                                {
                                    prodcut.quantity == 1 && (
                                        <p className=" fw-semibold">YES</p>
                                    )
                                }
                                {
                                    prodcut.quantity == 0 && (
                                        <p className=" fw-semibold">NO</p>
                                    )
                                }
                            </div>
                            <div className="col-md-3 border border-dark border-top-0 p-4 text-center">
                                <button type="button" class="btn btn-outline-danger px-0" onClick={() => handleDelete(prodcut._id)}><i class="bi bi-trash"></i></button>
                            </div>
                        </div>
                    </div>
                ))
            }
            <button type="button" onClick={handleAddProductClick} class="btn btn-primary px-0 w-25 text-center ms-5 m-4">Add Product <i class="bi bi-plus-circle-fill ms-2"></i></button>

            {isAddProductPopupOpen && (
                <div className="popup px-5">
                    
                    <TankTopsProduct />

                    <button onClick={() => setAddProductPopupOpen(false)} className='mx-5'>
                        Close
                    </button>
                </div>
            )}

        </div>
    );
};

export default TankTopsCategory;
