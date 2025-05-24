import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from 'emailjs-com'

const Contact = () => {

  const [formData, setFormData] = useState({
      name:'',
      email:'',
      message:'',
  })

  {/*Fucntion to submit the email */}

  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;

  const handleSubmit = (e)=>{
    e.preventDefault()

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
    .then((result)=>{
      alert("Message Sent!")
      setFormData({name:'', email:'', message:''})
    }).catch(()=>alert("Oops!, Something went wrong. Please try again"))
  }

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20px"
    >
      <RevealOnScroll>
        <div className="px-4 w-150">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-center bg-clip-text text-transparent ">
            Get In Touch
          </h2>
          <form action="" className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Enter Your Name..."
                className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                required
                onChange={(e)=>setFormData({...formData, name:e.target.value})}
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                required
                onChange={(e)=>setFormData({...formData, email:e.target.value})}
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded py-3 px-4 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Got questions or just want to chat? Type away!"
                required
                onChange={(e)=>setFormData({...formData, message:e.target.value})}
                
              />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Send Message</button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
