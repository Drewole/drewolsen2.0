import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik'
import * as Yup from 'yup';

const Contact = () => {
    const showToast = () => {
        toast("Your submission has been sent!", {
            position: toast.POSITION.BOTTOM_CENTER,
            // autoClose: false,
            draggablePercent: 60
        })
        toast.error("Please check your submission for errors.", {
            position: toast.POSITION.BOTTOM_CENTER,
            // autoClose: false,
            draggablePercent: 60
        })
    };

    const formik = useFormik({

        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .required('Required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            subject: Yup.string()
                .max(30, 'Must be 30 characters or less')
                .required('Required'),
            message: Yup.string()
                .required('Required'),
        }),

        // onSubmit: (values, actions) => {
        //     setTimeout(() => {
        //         console.log(JSON.stringify(values, null, 2));
        //         showToast();
        //         actions.resetForm()
        //         actions.setSubmitting(false);
        //     }, 1000);

        // },
        onSubmit: (values, actions) => {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact-me", ...values })
            })
                .then(() => {
                    showToast();
                    actions.resetForm();
                })
                .catch(() => {
                    alert('Error');
                })
                .finally(() => actions.setSubmitting(false))
        }
    });
    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    return (
        <section id="contact">
            <div className="row">
                <h2>What's Up?</h2>
                <p className="message">Shoot me a message and I will typically respond within one business day.<br />
                    <span>(All fields required BTW)</span>
                </p>

                <form data-netlify="true" onSubmit={formik.handleSubmit} name="contact-me" id='contact-form'>
                    <input type="hidden" name="form-name" value="contact-me" />
                    <div className="input-wrapper">

                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.name}
                        />
                        <label className="form-label" htmlFor="name">Full Name</label>
                        <div className="error">{formik.touched.name && formik.errors.name ? formik.errors.name : null}</div>
                    </div>

                    <div className="input-wrapper">

                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <label className="form-label" htmlFor="email">Email Address</label>

                        <div className="error">{formik.touched.email && formik.errors.email ? formik.errors.email : null}</div>

                    </div>
                    <div className="input-wrapper">

                        <input
                            id="subject"
                            name="subject"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.subject}
                        />
                        <label className="form-label" htmlFor="subject">Subject</label>

                        <div className="error">{formik.touched.subject && formik.errors.subject ? formik.errors.subject : null}</div>

                    </div>
                    <div className="input-wrapper">

                        <textarea
                            id="message"
                            name="message"
                            type="textarea"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.message}
                        />
                        <label className="form-label" htmlFor="message">How can I help?</label>

                        <div className="error">{formik.touched.message && formik.errors.message ? formik.errors.message : null}</div>

                    </div>
                    <button className="button" type="submit">Send</button>
                    <button
                        type="reset"
                        className="reset"
                        onClick={formik.handleReset}
                    >
                        Reset
                    </button>
                    <ToastContainer />
                </form>

            </div>
        </section>

    )
}

export default Contact
