"use client";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


export default function Footer() {

  const currentYear = new Date().getFullYear();


  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "/Education" },
    { name: "Projects", href: "/Projects" },
    { name: "Contact", href: "/Contact" },
  ];


const socials = [
  {
    name: "GitHub",
    href: "https://github.com/shamsul756",
    icon: <FaGithub size={20} />,
    hover:
      "hover:text-white hover:border-white/40",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shamsul-islam-6608813a2/",
    icon: <FaLinkedin size={20} />,
    hover:
      "hover:text-blue-400 hover:border-blue-400/40",
  },
];


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (

    <footer
      className="
      relative
      overflow-hidden
      border-t
      border-white/10
      bg-slate-950/80
      backdrop-blur-xl
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        bottom-0
        left-1/3
        w-72
        h-72
        bg-cyan-500/10
        rounded-full
        blur-3xl
        -z-10
        "
      />


      <div
        className="
        absolute
        top-0
        right-1/4
        w-72
        h-72
        bg-indigo-500/10
        rounded-full
        blur-3xl
        -z-10
        "
      />



      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        pt-16
        pb-8
        "
      >


        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-4
          gap-10
          "
        >



          {/* Brand */}

          <div className="
          lg:col-span-2
          space-y-5
          ">


            <a
              href="#hero"
              className="
              inline-block
              text-3xl
              font-black
              tracking-wide
              bg-gradient-to-r
              from-indigo-400
              via-cyan-400
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              Shamsul
              <span className="text-white">
                .dev
              </span>

            </a>



            <p
              className="
              text-slate-400
              max-w-sm
              leading-relaxed
              "
            >
              Hi, I'm{" "}
              <span className="text-white font-medium">
                Shamsul Islam Sujon
              </span>
              {" "}
              — a Frontend Developer passionate about
              creating elegant, accessible, and
              performance-focused web applications.
            </p>



            {/* Social */}

            <div className="
            flex
            gap-3
            pt-2
            ">


              {
                socials.map((item)=>(

                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className={`
                    w-11
                    h-11
                    flex
                    items-center
                    justify-center
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    text-slate-300
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    ${item.hover}
                    `}
                  >
                    {item.icon}

                  </a>

                ))
              }


            </div>


          </div>





          {/* Quick Links */}

          <div className="space-y-5">

            <h3 className="
            text-white
            font-semibold
            text-lg
            ">
              Quick Links
            </h3>


            <ul className="space-y-3">

              {
                quickLinks.map((link)=>(

                  <li key={link.name}>

                    <a
                      href={link.href}
                      className="
                      text-slate-400
                      hover:text-cyan-400
                      transition
                      "
                    >
                      {link.name}
                    </a>

                  </li>

                ))
              }

            </ul>


          </div>





          {/* Contact */}

          <div className="space-y-5">


            <h3 className="
            text-white
            font-semibold
            text-lg
            ">
              Get In Touch
            </h3>



            <ul className="space-y-4">


              <li>

                <a
                  href="mailto:webdevlopershamsul@gmail.com"
                  className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                  hover:text-cyan-400
                  transition
                  "
                >

                  <span className="
                  w-9
                  h-9
                  rounded-lg
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  ">
                    <Mail size={16}/>
                  </span>


                  <span className="text-sm">
                    webdevlopershamsul@gmail.com
                  </span>


                </a>


              </li>





              <li>

                <a
                  href="https://wa.me/8801307510449"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  flex
                  items-center
                  gap-3
                  text-slate-400
                  hover:text-green-400
                  transition
                  "
                >

                  <span className="
                  w-9
                  h-9
                  rounded-lg
                  bg-white/5
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-green-400
                  ">
                    <Phone size={16}/>
                  </span>


                  <span className="text-sm">
                    +880 1307 510449
                  </span>


                </a>


              </li>





              <li className="
              flex
              items-center
              gap-3
              text-slate-400
              ">

                <span className="
                w-9
                h-9
                rounded-lg
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                text-indigo-400
                ">
                  <MapPin size={16}/>
                </span>


                <span className="text-sm">
                  Sylhet, Bangladesh
                </span>


              </li>


            </ul>


          </div>



        </div>






        {/* Bottom */}

        <div
          className="
          mt-12
          pt-6
          border-t
          border-white/10
          flex
          flex-col
          sm:flex-row
          items-center
          justify-between
          gap-5
          "
        >

          <p className="
          text-slate-500
          text-sm
          ">
            © {currentYear} Shamsul Islam Sujon.
            All rights reserved.
          </p>



          <div className="
          flex
          items-center
          gap-5
          ">

            <p className="
            text-slate-500
            text-sm
            ">
              Built with{" "}
              <span className="text-cyan-400">
                Next.js
              </span>
              {" & "}
              <span className="text-cyan-400">
                Tailwind CSS
              </span>
            </p>



            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="
              w-10
              h-10
              rounded-xl
              flex
              items-center
              justify-center
              bg-white/5
              border
              border-white/10
              text-slate-300
              hover:text-cyan-400
              hover:border-cyan-400/40
              hover:-translate-y-1
              transition
              "
            >
              <ArrowUp size={18}/>
            </button>


          </div>


        </div>


      </div>


    </footer>

  );
}