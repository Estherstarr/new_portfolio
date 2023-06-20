import React from 'react'
import { useForm } from "react-hook-form"

const Contact = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
    fetch("https://formspree.io/f/mdobgbjy", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
        if (response.ok) {
            console.log("Form submitted successfully");
            // Redirect to a specific page after form submission
            window.location.href = "/success";
        } else {
            console.log("Failed to submit form");
        }
        })
        .catch((error) => {
        console.log("Error occurred while submitting form", error);
        })};  
      return (
    <div className="bg-blue-purple rounded-tl-3xl bg-[url('/assets/images/contact-form.png')] bg-cover bg-right-top pb-24">
        <div className="w-2/4 mx-auto">
        <h3 class="text-center text-3xl font-bold text-white pt-24 ">Contact me</h3>
        <p class="contact-text text-white text-xl text-center p-6">
              If you have an application you are interested in developing, a
              feature that you need built or a project that needs coding. I’d
              love to help with it
        </p>
        <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)} action="https://formspree.io/f/mdobgbjy" method="POST">
            <input className="mb-6 py-2 pr-9 pl-4 rounded-md" 
            type="text"
            name="name"
            {...register("Name")} 
            placeholder="Onomeh"
            required
            />
            <input className="mb-6 py-2 pr-9 pl-4 rounded-md"
            type="text"
            name="email"
            {...register("email")} 
            placeholder="Onomeh@gmail.com"
            required
            />
            <textarea
            className="py-2 pr-9 pl-4 rounded-md"
            rows="5"
            type="textarea"
            name="name"
            maxlength="500"
            {...register("Name")} 
            placeholder="Write your message here"
            required
            >
            </textarea> 
            
            <input type="hidden" name="_next" value="/success" />
            <button className="pt-2 pb-3 p w-32 text-center mt-3 bg-white text-light-purple rounded-md mx-auto shadow "type="submit">Get In Touch</button>
        </form>

        </div>
    </div>
  )
}

export default Contact