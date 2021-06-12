import React from 'react'
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik'
import * as Yup from 'yup';

const Contact = () => {

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
        onSubmit: (values, actions) => {
            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact-me", ...values })
            })
                .then(() => {
                    alert('Success');
                    actions.resetForm()
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
                <h2>Hollar at Me</h2>
                <p className="message">Shoot me a message and I will typically respond within one business day.<br />
                    <span>(All fields required BTW)</span>
                </p>

                <form data-netlify={true} onSubmit={formik.handleSubmit} name="contact-me" id='contact-form'>
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
                        {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div> : null}
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

                        {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}

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

                        {formik.touched.subject && formik.errors.subject ? <div className="error">{formik.errors.subject}</div> : null}

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

                        {formik.touched.message && formik.errors.message ? <div className="error">{formik.errors.message}</div> : null}

                    </div>
                    <button
                        type="button"
                        className="button outline"
                        onClick={formik.handleReset}
                        disabled={!formik.dirty || formik.isSubmitting}
                    >
                        Reset
                    </button>
                    <button className="button" type="submit">Send</button>
                </form>

            </div>
        </section>

    )
}

export default Contact
