const ContactPage = () => {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          {/* Header */}
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Contact Us</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column: Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
              <form action="#" method="POST">
                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-600">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-600">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
  
                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-gray-600">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      required
                      rows="6"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
  
                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
  
            {/* Right Column: Address and Contact Information */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Office</h3>
              <p className="text-gray-600 mb-4">
                Feel free to drop by or reach out to us via the following contact information.
              </p>
  
              {/* Address */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Address</h4>
                  <p className="text-gray-600">
                    1234 Street Name, City, State, 56789
                  </p>
                </div>
  
                {/* Phone */}
                <div>
                  <h4 className="font-semibold text-gray-800">Phone</h4>
                  <p className="text-gray-600">
                    <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (234) 567-890</a>
                  </p>
                </div>
  
                {/* Email */}
                <div>
                  <h4 className="font-semibold text-gray-800">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>
                  </p>
                </div>
  
                {/* Social Links */}
                <div className="flex space-x-4 mt-4">
                  <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-facebook-f text-2xl"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a href="https://linkedin.com" target="_blank" className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-linkedin-in text-2xl"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" className="text-blue-600 hover:text-blue-800">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactPage;
  