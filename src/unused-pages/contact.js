import React from "react"
import Layout from "../layouts/Layout"
import { useForm } from "react-hook-form"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const ContactPage = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)
  const mailFormat = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/"

  return (
    <Layout>
      <header>
        <Navigation />
      </header>

      <section className="contact">
        <h2>How can I help?</h2>
        <form data-netlify="true" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            name="fullName"
            ref={register({
              required: "I'm sorry, what should I call you?",
            })}
          />
          <input
            type="email"
            ref={register({
              required: "This is important. (It will never be sold)",
              pattern: mailFormat,
            })}
          />
          <textarea
            name="message"
            ref={register({ required: "Oops.What did you need again?" })}
          ></textarea>

          <input type="submit" />
          <input type="hidden" name="form-name" value="contact" />
        </form>
      </section>

      <Footer />
    </Layout>
  )
}

export default ContactPage
