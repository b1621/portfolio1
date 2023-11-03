import { useRef, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ContactFormV2 = () => {
  const inputStyle =
    "w-full placeholder:text-sm bg-transparent border border-slate-500 rounded-md py-2 px-3 outline-none transition duration-500 focus:border-green-800";

  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

  return (
    <div className=" h-full flex flex-col justify-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className=" w-full md:w-2/3 mx-auto space-y-5 text-slate-200"
        data-aos="zoom-in"
      >
        {/* <h2>Send Me some messgae</h2> */}
        <div className=" space-y-1">
          <label htmlFor="name" className="text-sm">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="full name"
            className={inputStyle}
            name="user_name"
            value={formData.user_name}
            onChange={handleInputChange}
          />
        </div>
        <div className=" space-y-1">
          <label htmlFor="email" className="text-sm">
            Your Email
          </label>
          <input
            type="email"
            placeholder="test@email.com"
            id="email"
            className={inputStyle}
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
          />
        </div>
        <div className=" space-y-1">
          <label htmlFor="message" className="text-sm">
            Your Message
          </label>
          <textarea
            placeholder="drop me your message ..... "
            id="message"
            cols="20"
            rows="6"
            className={inputStyle}
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex flex-row-reverse">
          <button
            className="border border-green-700 rounded-md px-7 text-sm py-1  bg-green-950 duration-500 transition hover:bg-green-900 "
            type="submit"
          >
            Send{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormV2;
