import React, { useState } from 'react'
import  "../Styles/Contact.css"

export default function Contact() {
  const [formData, setFormData]= useState({
    username: "",
    email: "",
    message:"",

  });
  const[success, setSuccess]= useState("waitig");
  const[error, setError]=useState("");

  /// entry input
  const handleInputChange = (e)=>{
    const {name, value} =e.target;
    setFormData((prev) => ({ ...prev, [name]: value}));
  };
  // form submission
  const handleFormSubmission = (e)=> {
    e.preventDefault();
    setSuccess("loading");
    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfuThXhEf__4X393g82NaYPR1hlf_m4gY1J7mOxCPGgQ3mAfQ/formResponse";
  
    const formBody = new FormData();
    formBody.append("entry.2005620554", formData.username);
    formBody.append("entry.1045781291", formData.email);
    formBody.append("entry.839337160", formData.message);
    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formBody
    })
    .then(() => {
      setSuccess("sent");
      setFormData({username: "", email: "", message:""});
    })
    .catch((error) => {
      setSuccess("error");
      setError(error.message);
    });
  };

  return (
    <div className="contact-main-div">
      <h1>Contact Form</h1>
      <form className="form" onSubmit={handleFormSubmission}>
        <input className="rounded-sm bg-grey-300" type="text" name="username" placeholder='Enter your name' required value={formData.username} onChange={handleInputChange}/><br />
        <input className="rounded-sm bg-grey-300" type="email" name='email' placeholder='Enter your email' required value={formData.email} onChange={handleInputChange}/><br /><br />
        <textarea className="rounded-5m bg-grey-300" name="message" placeholder='Enter your message here...' rows={5} required value={formData.message} onChange={handleInputChange}></textarea><br />
        <button className="bg-blue-600 text-white rounded-5m py-3 w-2xs cursor-pointer" type='submit'>{success === "loading" ? "sending..." : "send message"}</button>
        <p>
          {success === "sent" ? (
            <span>Your message has been sent successfully!</span>
          ) : (
            <span>{error}</span>
          )}
        </p>
      </form>
    </div>
  );
}
