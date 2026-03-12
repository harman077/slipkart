import React, { useState } from "react";
import "./contact.css";
import { toast } from "react-toastify";

const Contact = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)

        setTimeout(() => {
            toast.success('Message sent sucessfully.')
            setForm({
                name: "",
                email: "",
                message: ""
            })
        }, 1000)
    }

    return (
        <div className="contact-container">

            <h1>Contact Us</h1>
            <p>Have questions about SlipCart? Send us a message.</p>

            <div className="contact-box">

                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Email: support@slipkart.com</p>
                    <p>Phone: +91 9888369563</p>
                    <p>Location: Punjab, India</p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>

                    <input
                        type="text"
                        value={form.name}
                        name="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        value={form.email}
                        name="email"
                        placeholder="Your Email"
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        value={form.message}
                        placeholder="Your Message"
                        rows="5"
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Send Message</button>

                </form>

            </div>

        </div>
    );
};

export default Contact;