import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textYellow font-semibold flex items-center tracking-wide">
        IV. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a href="https://wa.me/message/MZ3C3ZOJDVJTB1">
        <button className="w-40 h-14 border border-textYellow mt-6 font-titleFont text-sm text-textYellow tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
