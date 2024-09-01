/* eslint-disable react/no-unescaped-entities */
import linkedinIcon from '../assets/mdi_linkedin.svg';
import githubIcon from '../assets/mdi_github.svg';
import emailIcon from '../assets/material-symbols_mail-rounded.svg';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bkoujm5', 'template_s7kymit', form.current, {
        publicKey: 'mkPG8OAYhgwN2_NKm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };


  return (
    <div className="2xl:pl-48 2xl:p-10" id='contact'>
      <div>
        
        <h1 className="text-white text-5xl"> Let's Get in Touch!</h1>
        <div className='mt-[54px] absolute'>
            <h1 className="text-white text-3xl">Visit my profiles </h1>
            <div className='absolute mt-4 text-xl text-white'>
                <a className='flex items-center  hover:text-customGray ' href='https://www.linkedin.com/in/zehra-zaidi-bb004b1b2/'><img src={linkedinIcon} className='w-16 mb-2 mr-2'/>LinkedIn</a>
                <a className='flex items-center  hover:text-customGray ' href='https://github.com/zehraz1/Portfolio-Projects/'><img src={githubIcon} className='w-16 mb-2 mr-2'/>Github</a>
                <a className='flex items-center  hover:text-customGray ' href='mailto:zehraahmedzaidi@gmail.com'><img src={emailIcon} className='w-16 mb-2 mr-2'/>Email</a>
               
            </div>
        </div>

=        <section className="flex justify-end mr-56  text-white">
            <form className="space-y-7" onSubmit={sendEmail} ref={form}>
                <input type="text" name="user_name" placeholder="Name" className="w-80 h-10 border p-2 border-zinc-50 rounded bg-transparent mr-5" required></input>

                <input type="email" name="user_email" placeholder="Email" className="w-80 h-10 border p-2 border-zinc-50 rounded bg-transparent " required></input>

                <input type="text" name="user_subject" placeholder="Subject" className="w-[660px] h-10 border p-2 border-zinc-50 rounded bg-transparent block" required></input>

                <textarea name="message" placeholder="Message" className=" border w-[660px] h-72 p-2 border-zinc-50 rounded bg-transparent block resize" required></textarea>

                <button className="bg-white w-44 rounded font-bold text-black" type="submit">Submit</button>

            </form>
        </section>
      </div>
    </div>
  )
}

export default ContactMe;
