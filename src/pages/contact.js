import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import Layout from '../layouts/Layout';

const Contact = () => {
    const notify = () => toast("Received your message!");

    return (
        <Layout>
            <section id="contact">
                <div className="row">
                    <h2>Hollar at Me</h2>
                    <p className="message">Shoot me a message and I will typically respond within one business day.</p>
                    <form name="contact" method="POST" data-netlify="true" id='contact-form' noValidate>
                        {/* Row 1 of form */}
                        <div className='row formRow'>
                            <div className='col-6'>
                                <input
                                    type='text'
                                    name='name'
                                    className='form-control formInput'
                                    placeholder='Name'
                                ></input>
                            </div>
                            <div className='col-6'>
                                <input
                                    type='email'
                                    name='email'
                                    className='form-control formInput'
                                    placeholder='Email address'
                                ></input>
                            </div>
                        </div>
                        {/* Row 2 of form */}
                        <div className='row formRow'>
                            <div className='col'>
                                <input
                                    type='text'
                                    name='subject'
                                    className='form-control formInput'
                                    placeholder='Subject'
                                ></input>
                            </div>
                        </div>
                        {/* Row 3 of form */}
                        <div className='row formRow'>
                            <div className='col'>
                                <textarea
                                    rows={3}
                                    name='message'
                                    className='form-control formInput'
                                    placeholder='Message'
                                ></textarea>
                            </div>
                        </div>
                        <button className='button' type='submit'>
                            Submit
                        </button>
                    </form>

                </div>
            </section>
            <Footer />
        </Layout>

    )
}

export default Contact
