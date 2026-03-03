import { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiCheck, FiX, FiArrowUpRight, FiGithub, FiLinkedin } from 'react-icons/fi';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submittedName, setSubmittedName] = useState('');

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    document.body.style.overflow = submitStatus ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [submitStatus]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xgvkgbgo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmittedName(formData.name);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setSubmitStatus(null);
    setSubmittedName('');
  };

  const renderModal = () => {
    if (!submitStatus) return null;

    const isSuccess = submitStatus === 'success';

    return ReactDOM.createPortal(
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--color-bg-primary)]/80 backdrop-blur-sm p-4"
        onClick={closeModal}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[var(--color-bg-primary)] border border-[var(--color-border)] p-8 md:p-12 text-center max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Icon */}
          <div
            className={`w-16 h-16 mx-auto mb-6 flex items-center justify-center ${
              isSuccess
                ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                : 'bg-red-500/10 text-red-500'
            }`}
          >
            {isSuccess ? (
              <FiCheck className="text-3xl" />
            ) : (
              <FiX className="text-3xl" />
            )}
          </div>

          {/* Content */}
          <h3
            className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {isSuccess ? `Thanks, ${submittedName}!` : 'Something went wrong'}
          </h3>
          <p
            className="text-[var(--color-text-tertiary)] mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {isSuccess
              ? "Your message has been sent successfully. I'll get back to you soon."
              : 'There was an error sending your message. Please try again or email me directly.'}
          </p>

          {/* Button */}
          <button
            onClick={closeModal}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white font-medium transition-all duration-300 hover:bg-[var(--color-accent-hover)]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {isSuccess ? 'Got it' : 'Close'}
          </button>
        </motion.div>
      </div>,
      document.body
    );
  };

  return (
    <section
      ref={sectionRef}
      id="contacts"
      className="py-24 md:py-32 lg:py-40 lg:pl-[72px]"
    >
      <div className="container">
        {/* Editorial Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-28"
        >
          {/* Breadcrumb style header */}
          <div className="flex items-center gap-4 mb-8">
            <span
              className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-text-muted)]"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Contact / Inquiries
            </span>
            <span className="flex-1 h-px bg-[var(--color-border)]" />
          </div>

          {/* Large editorial title */}
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[var(--color-text-primary)] leading-[0.9] tracking-[-0.04em] mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Let's
            <br />
            <span className="text-[var(--color-accent)]">Connect</span>
          </h2>

          <p
            className="text-lg text-[var(--color-text-tertiary)] max-w-md"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Have a project in mind? I'm currently available for freelance work and collaboration opportunities.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left side - Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            {/* Contact details */}
            <div className="space-y-8">
              {/* Email */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs text-[var(--color-accent)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    01
                  </span>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Email
                  </span>
                </div>
                <a
                  href="mailto:artbyjunylc@gmail.com"
                  className="group flex items-center gap-3 text-xl md:text-2xl font-medium text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <FiMail className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
                  <span>artbyjunylc@gmail.com</span>
                  <FiArrowUpRight className="text-sm opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-xs text-[var(--color-accent)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    02
                  </span>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Location
                  </span>
                </div>
                <div
                  className="flex items-center gap-3 text-xl md:text-2xl font-medium text-[var(--color-text-primary)]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  <FiMapPin className="text-[var(--color-text-muted)]" />
                  <span>Philippines</span>
                  <span className="text-sm text-[var(--color-text-muted)] font-normal">(Remote-friendly)</span>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[var(--color-border)]" />

              {/* Social links */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs text-[var(--color-accent)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    03
                  </span>
                  <span
                    className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Social
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/Junyl2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <FiGithub className="text-lg" />
                    <span className="text-sm">GitHub</span>
                  </a>
                  <span className="text-[var(--color-border)]">|</span>
                  <a
                    href="https://www.linkedin.com/in/Junyl2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <FiLinkedin className="text-lg" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Availability badge */}
              <div className="inline-flex items-center gap-3 px-4 py-3 bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
                <span className="w-2 h-2 bg-[var(--color-accent)] animate-pulse" />
                <span
                  className="text-sm text-[var(--color-text-secondary)]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Available for new projects
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            {/* Form header */}
            <div className="flex items-center gap-4 mb-8">
              <span
                className="text-[10px] tracking-[0.3em] uppercase text-[var(--color-text-muted)]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Send a Message
              </span>
              <span className="flex-1 h-px bg-[var(--color-border)]" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-3 text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-3 text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-3 text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-3 text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-[var(--color-border)] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                />
              </div>

              {/* Submit button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-[var(--color-accent)] text-white font-medium transition-all duration-300 hover:bg-[var(--color-accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Editorial footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 md:mt-28 pt-8 border-t border-[var(--color-border)]"
        >
          <p
            className="text-sm text-[var(--color-text-muted)]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Typically respond within 24-48 hours. For urgent inquiries, please reach out via email directly.
          </p>
        </motion.div>
      </div>

      {renderModal()}
    </section>
  );
}

export default Contacts;
