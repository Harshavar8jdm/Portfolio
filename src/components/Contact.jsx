import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'PCB Design',
    message: ''
  });

  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // We use FormData to gather all the form values
    const formToSubmit = new FormData(e.target);

    // TODO: Replace this with your actual Web3Forms access key
    formToSubmit.append("access_key", "95accf4c-7200-4223-8c5e-942937abcb2b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formToSubmit
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        // Reset form
        setFormData({ name: '', email: '', service: 'PCB Design', message: '' });
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-100 dark:bg-pcb-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold inline-block relative pcb-trace pb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-coral"
          >
            Got a board that needs building? Let's talk.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 mt-16">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Connection Details</h3>
              <div className="space-y-4">
                <a href="mailto:harshaganesh300@gmail.com" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-accent-cyan dark:hover:text-accent-cyan transition-colors group">
                  <div className="w-10 h-10 rounded bg-white dark:bg-pcb-base border border-slate-200 dark:border-pcb-trace flex items-center justify-center group-hover:border-accent-cyan transition-colors">
                    <Mail size={20} className="text-accent-amber" />
                  </div>
                  <span className="font-mono text-sm">harshaganesh300@gmail.com</span>
                </a>

                <a href="tel:+919844553752" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-accent-cyan dark:hover:text-accent-cyan transition-colors group">
                  <div className="w-10 h-10 rounded bg-white dark:bg-pcb-base border border-slate-200 dark:border-pcb-trace flex items-center justify-center group-hover:border-accent-cyan transition-colors">
                    <Phone size={20} className="text-accent-amber" />
                  </div>
                  <span className="font-mono text-sm">+91-9844553752</span>
                </a>

                <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300 group">
                  <div className="w-10 h-10 rounded bg-white dark:bg-pcb-base border border-slate-200 dark:border-pcb-trace flex items-center justify-center">
                    <MapPin size={20} className="text-accent-amber" />
                  </div>
                  <span className="font-mono text-sm">Tirupati, Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Social Links</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/harsha-ganesh-ee"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-pcb-base border border-slate-200 dark:border-pcb-trace flex items-center justify-center hover:bg-accent-cyan hover:border-accent-cyan hover:text-pcb-dark transition-all duration-300"
                >
                  <FaLinkedin size={22} />
                </a>
                <a
                  href="https://github.com/Harshavar8jdm"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-pcb-base border border-slate-200 dark:border-pcb-trace flex items-center justify-center hover:bg-accent-cyan hover:border-accent-cyan hover:text-pcb-dark transition-all duration-300"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-pcb-base border border-slate-200 dark:border-pcb-trace rounded-xl p-8 shadow-sm">

              {/* Optional: spam protection for Web3Forms */}
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-mono text-slate-600 dark:text-slate-400 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 dark:bg-pcb-light border border-slate-200 dark:border-pcb-trace rounded-lg px-4 py-3 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-mono text-slate-600 dark:text-slate-400 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 dark:bg-pcb-light border border-slate-200 dark:border-pcb-trace rounded-lg px-4 py-3 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-mono text-slate-600 dark:text-slate-400 mb-2" htmlFor="service">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-pcb-light border border-slate-200 dark:border-pcb-trace rounded-lg px-4 py-3 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors appearance-none"
                >
                  <option value="PCB Design">PCB Design</option>
                  <option value="Hardware Prototyping">Hardware Prototyping</option>
                  <option value="Board Bring-Up & Debugging">Board Bring-Up & Debugging</option>
                  <option value="Embedded Firmware">Embedded Firmware</option>
                  <option value="Other">Other Inquiry</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-mono text-slate-600 dark:text-slate-400 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full bg-slate-50 dark:bg-pcb-light border border-slate-200 dark:border-pcb-trace rounded-lg px-4 py-3 focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-accent-cyan text-pcb-dark font-bold py-4 rounded-lg shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] hover:-translate-y-1 transition-all duration-300 disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-pcb-dark border-t-transparent rounded-full animate-spin"></span> Sending...</span>
                ) : (
                  <><Send size={20} /> Send Message</>
                )}
              </button>

              {status === "success" && (
                <div className="mt-4 p-3 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded font-mono text-sm text-center">
                  Message transmitted successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 p-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded font-mono text-sm text-center">
                  Failed to send message. Please try emailing directly.
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
