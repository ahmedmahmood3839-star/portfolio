import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowRight, BsCheckCircleFill, BsExclamationTriangleFill, BsGithub } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";

import { fadeIn } from "../../variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [feedbackMsg, setFeedbackMsg] = useState("");
  const [mailtoUrl, setMailtoUrl] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFeedbackMsg(
          "Inquiry validated. Please click below to send directly via your email client to ahmedmahmood3839@gmail.com."
        );
        if (data.mailtoFallback) {
          setMailtoUrl(data.mailtoFallback);
        }
      } else {
        setStatus("error");
        setFeedbackMsg(
          data.error || "Validation error. Please reach out directly to ahmedmahmood3839@gmail.com."
        );
        const fallback = `mailto:ahmedmahmood3839@gmail.com?subject=${encodeURIComponent(
          formData.subject || "Portfolio Contact"
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        setMailtoUrl(fallback);
      }
    } catch (err) {
      setStatus("error");
      setFeedbackMsg(
        "Network connection issue. Please email Ahmad directly at ahmedmahmood3839@gmail.com."
      );
      const fallback = `mailto:ahmedmahmood3839@gmail.com?subject=${encodeURIComponent(
        formData.subject || "Portfolio Contact"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      setMailtoUrl(fallback);
    }
  };

  return (
    <div className="min-h-full bg-primary/30 py-28 md:py-36 flex items-center overflow-y-auto">
      <div className="container mx-auto px-4 sm:px-6 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form container */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* heading */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-center mb-6"
          >
            <span className="inline-block bg-accent/15 border border-accent/30 text-accent text-xs font-semibold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
              Get in Touch
            </span>
            <h2 className="h2 mb-2">
              Let&apos;s <span className="text-accent">connect.</span>
            </h2>
            <p className="text-white/70 text-xs sm:text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Have a mobile app, web application, or technical project in mind? Reach out directly or send a message below.
            </p>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
              <a
                href="mailto:ahmedmahmood3839@gmail.com"
                className="inline-flex items-center gap-x-2 bg-white/10 hover:bg-accent text-white text-xs font-medium px-4 py-1.5 rounded-full border border-white/15 transition-all duration-300"
              >
                <HiEnvelope className="text-sm text-accent" />
                <span>ahmedmahmood3839@gmail.com</span>
              </a>
              <a
                href="https://github.com/ahmedmahmood3839-star"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-x-2 bg-white/10 hover:bg-white/20 text-white text-xs font-medium px-4 py-1.5 rounded-full border border-white/15 transition-all duration-300"
              >
                <BsGithub className="text-sm" />
                <span>@ahmedmahmood3839-star</span>
              </a>
            </div>
          </motion.div>

          {/* status notification */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-x-2.5">
                <BsCheckCircleFill className="text-emerald-400 text-lg flex-shrink-0" />
                <span>{feedbackMsg}</span>
              </div>
              {mailtoUrl && (
                <a
                  href={mailtoUrl}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors"
                >
                  Open in Mail Client
                </a>
              )}
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/40 text-red-200 text-xs sm:text-sm text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            >
              <div className="flex items-center gap-x-2.5">
                <BsExclamationTriangleFill className="text-red-400 text-lg flex-shrink-0" />
                <span>{feedbackMsg}</span>
              </div>
              {mailtoUrl && (
                <a
                  href={mailtoUrl}
                  className="bg-accent hover:bg-accent/80 text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors"
                >
                  Send via Mail Client
                </a>
              )}
            </motion.div>
          )}

          {/* form */}
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-4 sm:gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            noValidate
          >
            {/* input group: name & email */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="input"
                disabled={status === "loading"}
                required
                aria-label="Your Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="input"
                disabled={status === "loading"}
                required
                aria-label="Your Email"
              />
            </div>

            {/* subject */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject (e.g. Mobile App Development, Consulting)"
              className="input"
              disabled={status === "loading"}
              required
              aria-label="Subject"
            />

            {/* message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your project, timeline, or inquiry..."
              className="textarea h-36"
              disabled={status === "loading"}
              required
              aria-label="Message"
            />

            {/* submit button */}
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[240px] px-6 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent hover:bg-accent group mx-auto xl:mx-0 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === "loading"}
            >
              <span className="font-semibold text-xs sm:text-sm text-white whitespace-nowrap">
                {status === "loading" ? "Validating..." : "Prepare & Send Email"}
              </span>
              <BsArrowRight className="ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
