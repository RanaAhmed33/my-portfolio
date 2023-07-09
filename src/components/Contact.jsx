import React, { useRef } from "react";
// import facebook from '../assets/socials/facebook.png';
// import instagram from '../assets/socials/instagram.png';
// import dribbble from '../assets/socials/dribbble.png';
// import email from '../assets/socials/sms.png';



import emailjs from '@emailjs/browser';
import { toast } from "react-hot-toast";
import Social from "./Social";


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm(
      'service_kkpu47e',
      'template_lklevp5',
      form.current,
      '6gpmUGeXs4bqVFHL0')
      .then((result) => {
        console.log(result.text);
        toast.success("message send successfully");
        form.current("")
      }, (error) => {
        console.log(error.text);

      });
    e.target.reset()
  };

  return (
    <div className="md:px-10 px-7 my-10" id="contact">
      <div className="flex flex-col md:flex-row">
        {/* text and icons */}
        <div className="md:w-1/2">
          <h1 className="text-rose-700 font-semibold text-3xl mt-16">
            CONNECT WITH ME
          </h1>
          <p className="my-3  text-rose-700 md:w-3/4 leading-[2]">
            IF YOU PLEASED ? PLEASE CONTACT WITH ME
          </p>

          <Social></Social>





          {/* social icons */}
          {/* <div className="flex ">
            <a href="https://www.linkedin.com/in/joshua-harris-321a24190/" target="_blank" rel="noreferrer">
              <img src={facebook} alt="" />
            </a>
            <a className="ml-4" href="https://github.com/joshua-harris" target="_blank" rel="noreferrer">
              <img src={instagram} alt="" />
            </a>
            <a className="ml-4" href="mailto:anpch@example.com" target="_blank" rel="noreferrer">
              <img src={dribbble} alt="" />
            </a>
            <a className="ml-4" href="mailto:anpch@example.com" target="_blank" rel="noreferrer">
              <img src={email} alt="" />
            </a>
          </div> */}



        </div>
        {/* form */}
        <div className="md:w-1/2">
          <p className=" mt-16 text-rose-700 font-semibold text-3xl mb-6">CONTACT FORM</p>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name:" className="bg-[#F5F5F5] bg-opacity-10 text-white py-3 px-3 md:w-3/4 w-full rounded " />
            <input type="  email" name="user_email" placeholder="Email:" className="bg-[#F5F5F5] bg-opacity-10 text-white py-3 px-3 md:w-3/4 w-full rounded my-3" />
            <textarea name="message" id="message" cols="54" rows="4" className="bg-[#F5F5F5] bg-opacity-10 text-white py-3 px-3 md:w-3/4 w-full rounded mb-2" placeholder="Message:"></textarea>

            <button className="btn btn-outline btn-secondary transition-all duration-500  py-2 px-12 rounded   block">SUBMIT</button>

          </form>
        </div>
      </div>
    </div>






    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>

  );
};

export default Contact;
