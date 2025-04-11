import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import config from "../../config";
import Loading from "../ui/loader";

export default function Contact() {
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    console.log(e);
    await emailjs
      .sendForm(config.EmailServiceKey, config.TemplateID, form.current!, {
        publicKey: config.PublicKey,
      })
      .then(
        () => {
          setIsLoading(false);
          console.log("SUCCESS!");
          toast.success("Your message send successfully");
        },
        (error: { text: unknown }) => {
          console.log("FAILED...", error.text);
          toast.error("Error:Something went wrong ");
        }
      );
  }
  if (isLoading) return <Loading />;
  return (
    <form
      id="contact"
      ref={form}
      onSubmit={(e) => sendEmail(e)}
      className=" p-4 py-8   "
    >
      <div className="max-w-3xl  rounded-2xl p-4 bg-[var(--primary)] text-[var(--text-color)] mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className=" mb-8">Fill out the form or connect with me below!</p>

        <div className="space-y-6 text-left">
          <div>
            <label className="block mb-1 text-sm font-medium ">Name</label>
            <input
              required
              type="text"
              name="user_name"
              className="w-full border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              required={true}
              type="email"
              name="user_email"
              className="w-full border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="youremail@email.com"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium ">Message</label>
            <textarea
              required
              name="message"
              rows={5}
              className="w-full border  rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="bg-[var(--accent-color)]  px-6 py-2 rounded-lg  transition"
          >
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
