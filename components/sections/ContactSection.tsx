"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../common/Icons";
import { motion } from "framer-motion";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { Card } from "../ui/Card";
import Button from "../ui/Button";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-indigo-400" />,
      label: "Email",
      value: "mt.tuongpham@gmail.com",
      href: "mailto:mt.tuongpham@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-cyan-400" />,
      label: "Phone",
      value: "(+84) 795533253", // Placeholder phone or standard template
      href: "tel:+84900000000",
    },
    {
      icon: <GithubIcon className="h-5 w-5 text-purple-400" />,
      label: "GitHub",
      value: "github.com/pmt2205",
      href: "https://github.com/pmt2205",
    },
    {
      icon: <LinkedinIcon className="h-5 w-5 text-indigo-400" />,
      label: "LinkedIn",
      value: "linkedin.com/in/pmt2205", // Placeholder linkedin
      href: "https://www.linkedin.com/in/pmt2205/",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock sending process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      
      // Reset success state after 4 seconds
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-950/40 relative">
      <div className="absolute bottom-0 left-0 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl animate-pulse" />
      
      <Container>
        <SectionTitle title="Get In Touch" subtitle="Contact Me" />

        <div className="mx-auto max-w-5xl grid gap-8 lg:grid-cols-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Let's connect!
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              If you have any opportunities for a Fullstack Developer Fresher or would like to collaborate on a project, feel free to contact me via email or fill out the contact form. I will get back to you as soon as possible!
            </p>

            <div className="mt-4 flex flex-col gap-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.label !== "Email" && info.label !== "Phone" ? "_blank" : undefined}
                  rel={info.label !== "Email" && info.label !== "Phone" ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  <Card className="flex items-center gap-4 p-4 hover:bg-slate-900/80 transition-all duration-300" glow={false}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 border border-slate-800">
                      {info.icon}
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        {info.label}
                      </span>
                      <span className="block text-sm font-semibold text-white mt-0.5 break-all">
                        {info.value}
                      </span>
                    </div>
                  </Card>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <Card className="relative overflow-hidden p-6 sm:p-8">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-cyan-400 animate-bounce" />
                  <h4 className="mt-6 text-xl font-bold text-white">Message Sent Successfully!</h4>
                  <p className="mt-2 text-sm text-slate-400 max-w-xs">
                    Thank you for reaching out. I will read your message and reply as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      placeholder="Collaboration opportunity"
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Hi, I would like to discuss..."
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-sm text-white placeholder-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gap-2 mt-2 h-11"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
