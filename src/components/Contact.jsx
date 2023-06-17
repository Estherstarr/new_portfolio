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
    <div className="bg-blue-purple h-96 rounded-tl-3xl">
        <div className="w-2/3 mx-auto">
        <h3 class="h3-contact">Contact me</h3>
        <p class="contact-text">
              If you have an application you are interested in developing, a
              feature that you need built or a project that needs coding. I’d
              love to help with it
        </p>
        <form className="flex" onSubmit={handleSubmit(onSubmit)} action="https://formspree.io/f/mdobgbjy" method="POST">
            <input 
            type="text"
            name="name"
            {...register("Name")} 
            placeholder="Onomeh"
            />
            <input 
            type="text"
            name="email"
            {...register("email")} 
            placeholder="Onomeh@gmail.com"
            />
            <input 
            type="textarea"
            name="name"
            maxlength="500"
            {...register("Name")} 
            placeholder="Write your message here"
            />
            <input type="hidden" name="_next" value="/success" />
            <input type="submit" />
        </form>

        </div>
    </div>
  )
}

export default Contact