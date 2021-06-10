import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import Layout from '../layouts/Layout';
import { useForm } from 'react-hook-form';

const Contact = () => {

    const { register, errors, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        console.log('Name: ', data.name);
        console.log('Email: ', data.email);
        console.log('Subject: ', data.subject);
        console.log('Message: ', data.message);
    };
    return (
        <Layout>
            <section id="contact">
                <div className="row">
                    <h2>Hollar at Me</h2>
                    <p className="message">Shoot me a message and I will typically respond within one business day.</p>
                    <form name="contact" onSubmit={handleSubmit(onSubmit)} data-netlify="true" id='contact-form' noValidate>
                        <div className='input-wrapper'>
                        <label htmlFor="name">Name</label>
                            <input
                                type='text'
                                name='name'
                                className='form-control formInput'
                                placeholder='Full Name'
                                ref={...register('name',{
                                    required: { value: true, message: 'Please enter your full name' },
                                    maxLength: {
                                    value: 40,
                                    message: 'Please use 40 characters or less'
                                    }
                                })}
                            ></input>
                            {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                        </div>
                        <div className='input-wrapper'>
                        <label htmlFor="email">Email</label>
                            <input
                                type='email'
                                name='email'
                                className='form-control formInput'
                                placeholder='Email address'
                                ref={...register('email',{
                                    required: true,
                                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                })}
                            ></input>
                            {errors.email && (
                                <span className='errorMessage'>Please enter a valid email address</span>
                            )}
                        </div>

                            <div className='input-wrapper'>
                            <label htmlFor="subject">Reason for Message</label>
                                <input
                                    type='text'
                                    name='subject'
                                    className='form-control formInput'
                                    placeholder='Subject'
                                    ref={...register('subject',{
                                        required: { value: true, message: 'Please enter a subject' },
                                        maxLength: {
                                        value: 75,
                                        message: 'Subject cannot exceed 75 characters'
                                        }
                                    })}
                                ></input>
                                {errors.subject && (
                                    <span className='errorMessage'>{errors.subject.message}</span>
                                )}
                            </div>


                            <div className='input-wrapper'>
                                <label htmlFor="message">How can I help?</label>
                                <textarea
                                    rows={3}
                                    name='message'
                                    className='form-control formInput'
                                    placeholder='How can I help?'
                                    ref={...register('message',{
                                        required: true
                                    })}
                                ></textarea>
                                {errors.message && <span className='errorMessage'>Please enter a message</span>}
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
