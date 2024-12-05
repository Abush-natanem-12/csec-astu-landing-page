const ContactComponent = function () {
  return (
    <form
      id="contact"
      className="w-[95%] md:w-[90%] lg:w-[85%] 2xl:w-[80%] mx-auto mb-14 lg:mb-24 flex flex-col items-start"
    >
      <h2 className="text-xl lg:text-2xl text-white py-4 w-full font-bold tracking-[1px]">
        Send Us Your Message
      </h2>
      <div className="flex flex-col w-[90%] md:w-[70%] 2xl:w-[40%] gap-5 items-start">
        <input
          className="w-full px-4 py-4 text-base xl:text-xl bg-[rgba(119,119,119,0.1)] rounded-lg border1 text-white3 outline-none"
          type="text"
          placeholder="Full Name"
        />
        <input
          className="w-full px-4 py-4 text-base xl:text-xl bg-[rgba(119,119,119,0.1)] rounded-lg border1 text-white3 outline-none"
          type="text"
          placeholder="Email"
        />
        <textarea
          className="w-full px-4 py-4 text-base xl:text-xl bg-[rgba(119,119,119,0.1)] rounded-lg border1 text-white3 outline-none resize-none"
          placeholder="Message"
          rows="5"
        />
        <button className="w-full py-4 text-white bg-primary rounded-lg text-xl">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactComponent;
