import React, {useState, useEffect} from 'react'
import './FAQsStyles.css'
import {useGetFAQsQuery} from '../../../features/FAQs'

function FAQs() {

    const [FAQS, setFAQs] = useState([]);
    const { data: FAQsData} = useGetFAQsQuery();

    
    useEffect(() => {
        if (FAQsData) {
            setFAQs(FAQsData);
        }
      }, [FAQsData]);

    

    return (

        <div className="faqs-wrapper py-4 ps-4">
            <div className="row mb-3">
                <h5 className='text-center fw-bold'>Frequently Asked Questions</h5>
            </div>
            <div className="row acrd-row">
                <div className="accordion accordion-flush w-75" id="accordionFlushExample">
                    <p className='my-4 para text-center'>Check most frequently asked questions here, if you still need help then please contact us at contact@shopdefendo.com</p>
                    <h5 className='fw-bold text-uppercase'>generl + company</h5>
                    <div className="accordion-item my-2 ">
                        <h2 className="accordion-header ">
                            <button className="accordion-button collapsed text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            {FAQS[0]?.question}
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">{FAQS[0]?.answer}</div>
                        </div>
                    </div>
                    <div className="accordion-item my-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed  text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            {FAQS[1]?.question}
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">{FAQS[1]?.answer}</div>
                        </div>
                    </div>
                    <div className="accordion-item my-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            {FAQS[2]?.question}
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">{FAQS[2]?.answer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="row my-4 acrd-row">
                <div className="accordion accordion-flush w-75" id="accordionFlushExample">
                    <h5 className='fw-bold text-uppercase'>MATERIALS + PRODUCTS</h5>
                    <div className="accordion-item my-2 ">
                        <h2 className="accordion-header ">
                            <button className="accordion-button collapsed text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            {FAQS[3]?.question}
                            </button>
                        </h2>
                        <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">{FAQS[3]?.answer}

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed  text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            {FAQS[4]?.question}
                            </button>
                        </h2>
                        <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">{FAQS[4]?.answer}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-4 acrd-row">
                <div className="accordion accordion-flush w-75" id="accordionFlushExample">
                    <h5 className='fw-bold text-uppercase'>RETURNS + EXCHANGES</h5>
                    <div className="accordion-item my-2 ">
                        <h2 className="accordion-header ">
                            <button className="accordion-button collapsed text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            {FAQS[5]?.question}
                            </button>
                        </h2>
                        <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">{FAQS[5]?.answer}

                            </div>
                        </div>
                    </div>
                    <div className="accordion-item my-2">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed  text-light bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            {FAQS[6]?.question}
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">{FAQS[6]?.answer}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQs