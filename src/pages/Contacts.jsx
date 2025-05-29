import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

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
        setSubmittedName(formData.name); // Save name BEFORE clearing
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
    <div className="container" id="contacts" data-aos="fade">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center p-6">
          <h1 className="text-[var(--text-color)] text-center heading-size relative">
            CONTACT ME
            <span className="block h-[3px] w-1/2 bg-violet-400 mx-auto mt-2 rounded-full" />
          </h1>
          <p className="text-center text-gray-600 mt-4 max-w-md">
            Feel free to reach out for collaborations or freelance projects! I
            specialize in landing pages, modern web design, page builders, and
            full web development. Let's build something great together!
          </p>

          <div className="flex items-center justify-center z-10 space-x-3 mt-4">
            <a
              href="https://github.com/Junyl2"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center icon-hover"
            >
              <i className="fab fa-github text-white text-sm md:text-xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/Junyl2"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center icon-hover"
            >
              <i className="fab fa-linkedin-in text-white text-sm md:text-xl"></i>
            </a>
            <a
              href="mailto:your.artbyjunylc@gmail.com"
              className="rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center icon-hover"
            >
              <i className="fas fa-envelope text-white text-sm md:text-xl"></i>
            </a>
            <a
              href="https://facebook.com/junyl2"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full w-8 h-8 md:w-12 md:h-12 flex items-center justify-center icon-hover"
            >
              <i className="fab fa-facebook-f text-white text-sm md:text-xl"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-6">
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
