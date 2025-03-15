const Contact = () => {
  return (
    <section id="contact" className="p-12 poppins-regular">
      <div className="flex flex-col items-center  gap-4">
        <div className="flex tracking-widest items-center gap-2 text-teal-300">
          <span>04.</span>
          <p>What's Next?</p>
        </div>
        <p className="text-4xl  lg:text-5xl text-gray-200 font-bold ">
          Get In Touch
        </p>
        <p className="text-sm md:text-base text-[#8892b0] md:tracking-wide order leading-loose md:w-[70%] text-center mx-auto">
          I'm currently exploring new opportunities and would love to connect!
          If you have a role that aligns with my skills or just want to chat,
          feel free to reach out. I'm always open to new conversations!
        </p>
        <button
          onClick={() => {
            window.location.href = "mailto:pralhadrana123@gmail.com";
          }}
          className="relative py-3 mt-10 px-8 border border-teal-300 rounded-md text-teal-300 bg-transparent overflow-hidden group"
        >
          <span
            className="absolute inset-0 bg-teal-300
          scale-x-0 group-hover:scale-x-100 transform transition-transform duration-300 origin-left rounded-md"
          ></span>
          <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0a182d]">
            Say Hello{" "}
          </span>
        </button>
      </div>
    </section>
  );
};

export default Contact;
