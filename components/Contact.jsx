import { METHODS } from 'http';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [mail, setMail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState('Send message');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText('Sending...');
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          mail,
          phone,
          name,
          subject,
          message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      const { error } = await res.json();
      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Send');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Send message');
      setName('');
      setPhone('');
      setMail('');
      setSubject('');
      setMessage('');
    }
    console.log(name, mail, subject, message);
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (name.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (mail.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    // console.log('errors', errors);
    return isValid;
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#6fa2c7]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="rounded-xl hover:scale-105 ease-in duration-150">
                <img
                  className="rounded-xl"
                  src="https://source.unsplash.com/-0xCCPIbl3M"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Gwénaël Guérin</h2>
                <p>Fullstack Junior Developer</p>
                <p className="py-4">
                  I am available for full-time positions. Contact me and let the
                  magic happen !
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me !</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/gw%C3%A9na%C3%ABl-gu%C3%A9rin-0636901a7/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
                      <AiFillLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://github.com/gwen-guerin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
                      <AiFillGithub />
                    </div>
                  </a>
                  <a href="mailto:gwenael.guerin@protonmail.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
                      <AiOutlineMail />
                    </div>
                  </a>
                  <Link
                    href="https://online.flippingbook.com/view/1070624447/"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Fullname<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="name"
                    />
                    {errors?.fullname && (
                      <p className="text-red-500">Fullname cannot be empty.</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      value={phone}
                      name="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    value={mail}
                    name="mail"
                    onChange={(e) => setMail(e.target.value)}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                  {errors?.email && (
                    <p className="text-red-500">Email cannot be empty.</p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    Subject<span className="text-red-500">*</span>
                  </label>
                  <input
                    value={subject}
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                  {errors?.subject && (
                    <p className="text-red-500">Subject cannot be empty.</p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">
                    Message<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    rows="10"
                  ></textarea>
                  {errors?.message && (
                    <p className="text-red-500">
                      Message body cannot be empty.
                    </p>
                  )}
                </div>
                <button
                  // onClick={() => handleSubmit}
                  className="w-full p-4 text-gray-100 mt-4"
                >
                  {buttonText}
                </button>
                <div className="text-left">
                  {showSuccessMessage && (
                    <p className="text-green-500 font-semibold text-sm my-2">
                      Thank you! Your Message has been delivered.
                    </p>
                  )}
                  {showFailureMessage && (
                    <p className="text-red-500">
                      Oops! Something went wrong, please try again.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-125 ease-in duration-150">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#6fa2c7]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
