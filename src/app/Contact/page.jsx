"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  User,
  MessageSquare,
  Send,
  MapPin,
  Copy,
  Check,
} from "lucide-react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copied, setCopied] = useState(false);

  const WHATSAPP_NUMBER = "8801307510449";
  const CONTACT_EMAIL = "webdevlopershamsul@gmail.com";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isValid =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.message.trim();


  const buildMessage = () =>
    `Name: ${formData.name}

Email: ${formData.email}

Message:
${formData.message}`;


  const handleEmailSend = () => {
    if (!isValid) return;

    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${formData.name}`
    );

    const body = encodeURIComponent(buildMessage());

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };


  const handleWhatsAppSend = () => {
    if (!isValid) return;

    const text = encodeURIComponent(buildMessage());

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank"
    );
  };


  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(CONTACT_EMAIL);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };


  return (
    <>
    <Navbar/>
    <section
      id="contact"
      className="
      relative
      py-24
      px-6
      max-w-7xl
      mx-auto
      overflow-hidden
      "
    >

      {/* Background Glow */}
      <div className="
      absolute
      top-1/3
      left-1/4
      w-72
      h-72
      bg-cyan-500/10
      rounded-full
      blur-3xl
      -z-10
      "/>

      <div className="
      absolute
      bottom-0
      right-1/4
      w-72
      h-72
      bg-indigo-500/10
      rounded-full
      blur-3xl
      -z-10
      "/>



      {/* Heading */}
      <div className="text-center mb-16 space-y-4">

        <p className="
        text-cyan-400
        font-semibold
        tracking-wider
        uppercase
        text-sm
        ">
          Get In Touch
        </p>


        <h2 className="
        text-4xl
        lg:text-5xl
        font-black
        text-white
        ">

          Let's Build Something{" "}

          <span className="
          bg-gradient-to-r
          from-indigo-400
          via-cyan-400
          to-purple-500
          text-transparent
          bg-clip-text
          ">
            Great Together
          </span>

        </h2>


        <p className="
        text-slate-400
        max-w-xl
        mx-auto
        ">
          Have a project in mind? Send me a message and
          let's create something amazing together.
        </p>

      </div>




      <div className="
      grid
      lg:grid-cols-5
      gap-10
      ">


        {/* Contact Info */}
        <div className="
        lg:col-span-2
        space-y-5
        ">


          {/* Email */}

          <div className="
          flex
          items-center
          gap-4
          p-5
          rounded-2xl
          bg-white/5
          border
          border-white/10
          hover:border-cyan-400/40
          transition
          ">

            <div className="
            w-12
            h-12
            flex
            items-center
            justify-center
            rounded-xl
            bg-cyan-500/10
            text-cyan-400
            ">
              <Mail />
            </div>


            <div className="flex-1">

              <p className="text-sm text-slate-400">
                Email
              </p>

              <p className="text-white text-sm">
                {CONTACT_EMAIL}
              </p>

            </div>


            <button
              onClick={handleCopyEmail}
              className="
              text-slate-400
              hover:text-cyan-400
              "
            >

              {
                copied
                ?
                <Check className="text-green-400"/>
                :
                <Copy/>
              }

            </button>

          </div>





          {/* WhatsApp */}

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-4
            p-5
            rounded-2xl
            bg-white/5
            border
            border-white/10
            hover:border-green-400/40
            transition
            "
          >

            <div className="
            w-12
            h-12
            flex
            items-center
            justify-center
            rounded-xl
            bg-green-500/10
            text-green-400
            ">
              <Phone/>
            </div>


            <div>

              <p className="text-sm text-slate-400">
                WhatsApp
              </p>

              <p className="text-white">
                +880 1307 510449
              </p>

            </div>


          </a>





          {/* Location */}

          <div className="
          flex
          gap-4
          p-5
          rounded-2xl
          bg-white/5
          border
          border-white/10
          ">

            <div className="
            w-12
            h-12
            flex
            items-center
            justify-center
            rounded-xl
            bg-indigo-500/10
            text-indigo-400
            ">
              <MapPin/>
            </div>


            <div>

              <p className="text-sm text-slate-400">
                Based in
              </p>

              <p className="text-white">
                Sylhet, Bangladesh
              </p>

            </div>

          </div>


        </div>





        {/* Form */}

        <div className="
        lg:col-span-3
        p-8
        rounded-3xl
        bg-slate-900/60
        backdrop-blur-xl
        border
        border-white/10
        shadow-2xl
        space-y-5
        ">


          <Input
            icon={<User/>}
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
          />


          <Input
            icon={<Mail/>}
            label="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
          />



          <div>

            <label className="
            flex
            items-center
            gap-2
            text-sm
            text-slate-300
            mb-2
            ">
              <MessageSquare size={16}/>
              Your Message
            </label>


            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className="
              w-full
              p-4
              rounded-xl
              bg-white/5
              border
              border-white/10
              text-white
              outline-none
              focus:border-cyan-400
              "
            />

          </div>




          <div className="
          flex
          flex-col
          sm:flex-row
          gap-4
          ">


            <button
              disabled={!isValid}
              onClick={handleEmailSend}
              className="
              flex-1
              flex
              justify-center
              items-center
              gap-2
              py-4
              rounded-xl
              bg-gradient-to-r
              from-indigo-500
              to-cyan-500
              text-white
              font-semibold
              disabled:opacity-40
              "
            >

              <Send size={18}/>
              Send Email

            </button>



            <button
              disabled={!isValid}
              onClick={handleWhatsAppSend}
              className="
              flex-1
              flex
              justify-center
              items-center
              gap-2
              py-4
              rounded-xl
              border
              border-green-400/30
              text-green-400
              hover:bg-green-500/10
              disabled:opacity-40
              "
            >

              <Phone size={18}/>
              WhatsApp

            </button>


          </div>


        </div>


      </div>


    </section>
    <Footer/>
    </>
  );
}





function Input({
  icon,
  label,
  name,
  value,
  onChange,
  placeholder,
}) {

  return (

    <div>

      <label className="
      flex
      gap-2
      items-center
      text-sm
      text-slate-300
      mb-2
      ">
        {icon}
        {label}
      </label>


      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
        w-full
        px-4
        py-3
        rounded-xl
        bg-white/5
        border
        border-white/10
        text-white
        outline-none
        focus:border-cyan-400
        "
      />

    </div>

  );
}