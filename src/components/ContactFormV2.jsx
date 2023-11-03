const ContactFormV2 = () => {
  return (
    <div className=" h-full flex flex-col justify-center">
      <form
        action=""
        className=" w-full md:w-2/3 mx-auto space-y-5 text-slate-200"
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
            className="w-full placeholder:text-sm bg-transparent border border-slate-500 rounded-md py-2 px-3 outline-none"
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
            className="w-full bg-transparent border border-slate-500 rounded-md py-2 px-3 outline-none placeholder:text-sm"
          />
        </div>
        <div className=" space-y-1">
          <label htmlFor="message" className="text-sm">
            Your Message
          </label>
          <textarea
            name=""
            placeholder="drop me your message ..... "
            id="message"
            cols="20"
            rows="6"
            className="w-full bg-transparent border border-slate-500 rounded-md py-2 px-3 outline-none placeholder:text-sm"
          ></textarea>
        </div>
        <div className="flex flex-row-reverse">
          <button className="border border-green-700 rounded-md px-7 text-sm py-1  bg-green-950 duration-500 transition hover:bg-green-900 ">
            Send{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormV2;
