import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiMapPin } from 'react-icons/fi'

const Contact = () => {
  const contactMethods = [
    {
      icon: <FiMail className="w-5 h-5" />,
      label: "Email",
      value: "khushim1109@gmail.com",
      link: "mailto:khushim1109@gmail.com"
    },
    {
      icon: <FiGithub className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/Khushi256",
      link: "https://github.com/Khushi256"
    },
    {
      icon: <FiLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "Khushi Mishra",
      link: "https://linkedin.com/in/khushi-mishra-06815931b"
    },
    {
      icon: <FiTwitter className="w-5 h-5" />,
      label: "Twitter",
      value: "Khushim1109",
      link: "https://x.com/Khushim1109"
    }
  ]

  return (
    <section id="contact" className="h-screen bg-[#0A0018] py-16 px-4 md:px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Get In <span className="bg-gradient-to-r from-[#FD81C0] to-[#8B5CF6] bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FD81C0] to-[#8B5CF6] mx-auto rounded-full mb-4" />
          <p className="text-white/60 text-sm md:text-base">
            Available for freelance work and part-time opportunities
          </p>
        </motion.div>

        {/* Main Content Card - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
        >
          {/* Location Badge */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <FiMapPin className="w-4 h-4 text-[#FD81C0]" />
            <span className="text-white/60 text-sm">India • Remote</span>
          </div>

          {/* Contact Methods - 2 Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#FD81C0]/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-[#FD81C0] to-[#8B5CF6] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {method.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-white/50 text-xs mb-0.5">{method.label}</p>
                  <p className="text-white text-sm font-medium truncate">{method.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.a
              href="mailto:khushim1109@gmail.com"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#FD81C0] to-[#8B5CF6] rounded-lg text-white text-sm font-medium shadow-lg shadow-[#FD81C0]/20 hover:shadow-[#FD81C0]/40 transition-all duration-300"
            >
              <FiMail className="w-4 h-4" />
              Send Email
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
