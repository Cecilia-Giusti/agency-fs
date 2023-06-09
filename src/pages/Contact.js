import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import ContactForm from "../components/ContactForm";
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Contact = () => {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },

    out: {
      opacity: 0,
      x: 300,
    },
  };
  return (
    <main>
      <Mouse />
      <motion.div
        className='contact'
        initial='out'
        exit='out'
        animate='in'
        variants={pageTransition}
        transition={{ duration: 0.5 }}>
        <Navigation />
        <Logo />
        <ContactForm />
        <div className='contact-infos'>
          <div className='address'>
            <div className='content'>
              <h4>Adresse</h4>
              <p>12 rue Laplace</p>
              <p>64200 Biarritz</p>
            </div>
          </div>
          <div className='phone'>
            <div className='content'>
              <h4>téléphone</h4>
              <CopyToClipboard text='0646758392' className='hover'>
                <p
                  style={{ cursor: "pointer" }}
                  className='clipboard'
                  onClick={() => {
                    alert("Téléphone copié");
                  }}>
                  06 46 75 83 92
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <div className='email'>
            <div className='content'>
              <h4>email</h4>
              <CopyToClipboard text='fsagency@gmail.com' className='hover'>
                <p
                  style={{ cursor: "pointer" }}
                  className='clipboard'
                  onClick={() => {
                    alert("Email copié");
                  }}>
                  fsagency@gmail.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetwork />
          <div className='credits'>
            <p>Cecilia Giusti | Projet From Scratch - 2022</p>
          </div>
        </div>
        <Buttons left={"/projet-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
