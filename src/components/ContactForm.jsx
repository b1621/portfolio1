import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const inputStyle =
    " border-slate-700 bg-transparent rounded-md border py-2 px-3 w-[100%] md:w-[45%] outline-none ";

  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    const isEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );

    if (isEmpty) {
      toast.error("Please fill out all fields!!!");
      return;
    }

    try {
      //   console.log("sending email");
      toast.loading("Sending Email");

      const response = await emailjs.sendForm(
        "service_e2zpskd",
        "template_ksmfbuz",
        form.current,
        "r1AExEyk446y-0Kfi"
      );

      console.log(response.text);
      e.target.reset();
      setFormData({ user_name: "", user_email: "", message: "" });
      toast.success("Email sent successfully");
    } catch (error) {
      console.error("Email sending failed:", error);

      if (error.response) {
        // The request was made and the server responded with an error status code
        toast.error(error.text);
        console.log("error with response ...");
        console.error(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("error without response ...");
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.log("error with setting up the request ...");
        console.error("Request error:", error.message);
      }
    } finally {
      toast.dismiss();
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="">
      <div
        className=" bg-bgcolor2 rounded-lg my-10 mx-5 sm:20 lg:mx-40 p-2 "
        data-aos="zoom-in"
      >
        <h2 className=" text-3xl sm:text-4xl text-center mt-4 mb-12 text-slate-300">
          Drop Me A Message
        </h2>
        <div className="  m-5 ">
          <div className=" space-y-3 md:space-y-0 md:space-x-5 mx-auto flex flex-col md:flex md:flex-row">
            <input
              placeholder="your name"
              className={`${inputStyle} transition duration-300 focus:border-green-700`}
              type="text"
              id="name"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="your email"
              className={`${inputStyle} transition duration-300 focus:border-green-700`}
              id="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
            />
          </div>
          <div className=" my-5 ">
            <textarea
              className={`${inputStyle} transition duration-300 focus:border-green-700`}
              placeholder="your message ... "
              id="message"
              cols="30"
              rows="9"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="border px-10 rounded-md py-1 border-green-700 text-green-700 transition duration-300 hover:bg-green-700 hover:text-slate-200"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
