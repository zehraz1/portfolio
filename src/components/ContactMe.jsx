/* eslint-disable react/no-unescaped-entities */
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactMe = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Submit');
  
  // Framer Motion's useAnimation hook to control animations
  const controls = useAnimation();
  
  // React Intersection Observer to detect when the section is in view
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Submitting...');

    emailjs
      .sendForm('service_bkoujm5', 'template_s7kymit', form.current, 'mkPG8OAYhgwN2_NKm')
      .then(
        () => {
          setButtonText('Submitted');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setButtonText('Submit');
        }
      );
    e.target.reset();
  };

  const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="pt-[15rem] md:pb-[12rem] pb-[5rem]" id="contact" ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls} // Trigger animations using useAnimation
        variants={formVariant}
      >
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl text-center font-light md:pb-[4rem] pb-[2rem] md:text-left md:ml-[5rem] xl:ml-[11rem] m-4">
          Let's get in touch!
        </h1>

        <section className="text-center text-white w-[90%] md:w-[80%] mx-auto ">
          <motion.form
            className="space-y-3"
            onSubmit={sendEmail}
            ref={form}
            initial="hidden"
            animate={controls} // Trigger animations using useAnimation
            variants={formVariant}
          >
            <motion.div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 space-y-3 sm:space-y-0" variants={formVariant}>
              <motion.input
                type="text"
                name="user_name"
                placeholder="Name"
                className="border p-2 md:p-6 border-customGrey rounded lg:text-lg lg:font-normal bg-transparent w-full"
                required
                variants={formVariant}
              />

              <motion.input
                type="email"
                name="user_email"
                placeholder="Email"
                className="border p-2 md:p-6 border-customGrey lg:text-lg lg:font-normal rounded bg-transparent w-full"
                required
                variants={formVariant}
              />
            </motion.div>

            <motion.input
              type="text"
              name="user_subject"
              placeholder="Subject"
              className="border p-2 md:p-6 border-customGrey lg:text-lg lg:font-normal rounded bg-transparent w-full"
              required
              variants={formVariant}
            />

            <motion.textarea
              name="message"
              placeholder="Message"
              className="border border-customGrey p-2 md:p-4 rounded bg-transparent lg:text-lg lg:font-normal w-full md:resize"
              rows="6"
              required
              variants={formVariant}
            ></motion.textarea>

            <motion.button
              className={`bg-customPurple md:w-[10rem] font-light md:flex md:justify-center md:text-lg p-2 md:p-4 hover:bg-customGrey text-white w-[40%] rounded-full mt-3 ${buttonText === 'Submitted' ? 'cursor-not-allowed' : ''}`}
              type="submit"
              disabled={buttonText === 'Submitted'}
              variants={formVariant}
            >
              {buttonText}
            </motion.button>
          </motion.form>
        </section>
      </motion.div>
    </div>
  );
};

export default ContactMe;
