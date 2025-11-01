import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { FiMail, FiPhone } from 'react-icons/fi';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submittedName, setSubmittedName] = useState('');

  useEffect(() => {
    AOS.init({ once: true, duration: 600, easing: 'ease-in-out' });
  }, []);

  useEffect(() => {
    document.body.style.overflow = isSubmitted ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSubmitted]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xgvkgbgo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmittedName(formData.name);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        setSubmitError(null);
      } else {
        setSubmitError('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setSubmitError('Something went wrong. Please try again.');
    }
  };

  const renderModal = () => {
    if (!isSubmitted) return null;

    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="bg-white rounded-lg p-6 text-center shadow-2xl w-[90%] max-w-md mx-auto">
          <h2 className="text-xl font-bold mb-2">
            Thank you, {submittedName || 'Valued Guest'}!
          </h2>
          <p className="text-gray-600 mb-4">
            Your message has been sent. I’ll get back to you promptly.
          </p>
          <button
            className="bg-violet-500 hover:bg-violet-600 text-white py-1 px-4 rounded"
            onClick={() => {
              setIsSubmitted(false);
              setSubmittedName('');
            }}
          >
            Close
          </button>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <div className="container lg:mb-30 lg:mt-30" data-aos="fade" id="contacts">
      <div className="flex items-start justify-center  flex-col md:flex-row gap-6">
        <div className="flex flex-col items-center md:items-start justify-center ">
          <h1 className="text-[var(--text-color)] heading-size relative ">
            CONTACT ME
            <span className="block h-[4px] w-1/2 divider-color mx-auto mt-2 rounded-full" />
          </h1>
          <p className="text-start text-gray-600 mt-4 max-w-md leading-relaxed">
            Feel free to reach out for collaborations or freelance projects. I
            specialize in landing pages, modern web design, page builders, web
            development and data analytics. Let's build something great
            together!
          </p>
          <div className="flex flex-col items-start justify-center mt-4 w-full">
            <div className="flex flex-col items-start justify-center gap-3">
              <p className=" flex items-center justify-start gap-2 text-[var(--text-color)] ">
                {' '}
                <FiMail /> artbyjunylc@gmail.com
              </p>
              <p className=" flex items-center justify-start gap-2  text-[var(--text-color)] ">
                {' '}
                <FiPhone /> +63 9633 818 902
              </p>
            </div>
            <div className="flex items-start justify-start z-10 gap-2 ">
              <a
                href="https://github.com/Junyl2"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-start icon-hover"
              >
                <i className="fab fa-github text-[var(--text-color)] text-lg "></i>
              </a>
              <a
                href="https://www.linkedin.com/in/Junyl2"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-start icon-hover"
              >
                <i className="fab fa-linkedin-in text-[var(--text-color)] text-lg "></i>
              </a>
              <a
                href="mailto:your.artbyjunylc@gmail.com"
                className="rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-start icon-hover"
              >
                <i className="fas fa-envelope text-[var(--text-color)] text-lg "></i>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <h2 className="  contact-text global-text pb-5 max-w-md">
            You can fill up the form to message me directly, I'll get back to
            you as soon as possible!
          </h2>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-2 mb-4 border text-[var(--text-color)] border-gray-300 rounded"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-2 mb-4 border text-[var(--text-color)] border-gray-300 rounded"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
              className="w-full p-2 mb-4 border text-[var(--text-color)] border-gray-300 rounded"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="4"
              className="w-full p-2 mb-4 border text-[var(--text-color)] border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full contact-btn nav-glow cursor-pointer text-white py-2 rounded transition duration-300"
            >
              Send Message
            </button>

            {submitError && (
              <p className="text-red-500 text-center mt-2">{submitError}</p>
            )}
          </form>
        </div>
      </div>

      {renderModal()}
    </div>
  );
}

export default Contacts;
