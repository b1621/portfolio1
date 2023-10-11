const Sidebar = () => {
  return (
    <div className=" w-32 border fixed h-full flex flex-col justify-end">
      <div className="border mb-10 ">
        <div className="border w-20 mx-auto space-y-3">
          <img
            className=" w-9 h-9 bg-slate-200 rounded-full p-1"
            src="/pageicons/briefing_1705213.png"
            alt=""
          />
          <img
            className=" w-9 h-9 bg-slate-200 rounded-full p-1"
            src="/pageicons/contact-mail.png"
            alt=""
          />
          <img
            className=" w-9 h-9 bg-slate-200 rounded-full p-1"
            src="/pageicons/contact.png"
            alt=""
          />
          <img
            className=" w-9 h-9 bg-slate-200 rounded-full p-1"
            src="/pageicons/user.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
