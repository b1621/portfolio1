import React from "react";

const Contact = () => {
  const inputStyle =
    " border-slate-700 bg-transparent rounded-md border py-2 px-3 w-[30%] outline-none ";
  return (
    <div className=" border border-green-800" id="contact">
      <div className="border h-screen ml-32 flex flex-col justify-between">
        <div className="border">
          <div className="border border-slate-600 bg-custom-800 rounded-lg my-20 mx-40 p-2">
            <h2 className=" text-3xl text-center my-2">Drop Me A Message</h2>
            <div className="my-5">
              <div className=" space-x-5 mx-auto">
                <input
                  placeholder="your name"
                  className={inputStyle}
                  type="text"
                />
                <input
                  type="text"
                  placeholder="your email"
                  className={inputStyle}
                />
              </div>
              <div className=" my-5">
                <textarea
                  className={`${inputStyle}`}
                  name=""
                  placeholder="your message ... "
                  id=""
                  cols="70"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="border">footer</div>
      </div>
    </div>
  );
};

export default Contact;
