import React, { useState } from "react";
import axios from "axios";
import "./ContactUs.css";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://brickland-backend-4.onrender.com/send-email`, {
        name,
        email,
        city,
        mobile,
        message,  
      });
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setCity("");
      setMobile("");
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
    {/* new data  */}
    <div className="contact-area ptb-120">
    
  <div className="container">
    <div
      className="row justify-content-center"
    >
      <div
        className="col-lg-4 col-md-5"
       
      >
        <div className="contact-info-box">
          <div className="box">
            <div className="icon">
              <i className="ri-map-pin-line" />
            </div>
            <div className="info">
              <h4>Our Location</h4>
              <span>
                 511, Floor P5, Urbtech NPX Tower, Sector 153, Noida 201310</span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="ri-phone-line" />
            </div>
            <div className="info">
              <h4>Phone Number</h4>
              <span>
                <a href="tel:8869003900">+91 88 6900 3900</a>
              </span>
              <span>
                <a href="tel:8869003900">+91 88 6900 3900</a>
              </span>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <i className="ri-mail-send-line" />
            </div>
            <div className="info">
              <h4>Our Email</h4>
              <span>
                <a href="mailto:info@bricklandindia.com">
                  info@bricklandindia.com
                </a>
              </span>
              <span>
                <a href="mailto:info@bricklandindia.com">info@bricklandindia.com</a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-8 col-md-7"
        data-cue="slideInUp"
        data-show="true"
        
      >
        <div className="contact-wrap-form">
          <h3>Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={name}
                required="true"
                onChange={(e) => setName(e.target.value)}
              />
              <div className="icon">
                <i className="ri-user-3-line" />
              </div>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email address"
                required="true"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="icon">
                <i className="ri-mail-line" />
              </div>
            </div>
            <div className="form-group">
              <label>Your Phone</label>
              <input
                type="phone"
                className="form-control"
                placeholder="Enter your phone"
                name="IN"
                required="true"
                title="Enter a valid number"
                pattern="[1-9]{1}[0-9]{9}"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <div className="icon">
                <i className="ri-phone-line" />
              </div>
            </div>
            <div className="form-group">
              <label>Your City</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <div className="icon">
                <i className="ri-building-line" />
              </div>
            </div>
            <div className="form-group extra-top">
              <label>Your Message</label>
              <textarea
                className="form-control"
                placeholder="Your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="icon">
                <i className="ri-message-2-line" />
              </div>
            </div>
            <div className="contact-btn">
              <button type="submit" className="default-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
{/* old-data  */}
      
      <div className="flex flex-col md:flex-row row py-4 ">
        <div className="investors-clinic-info col-lg-6">
          <h2>BRICKLAND CONSULTING AT A GLANCE</h2>
          <p>
            Brickland Consulting, A Certified Real Estate Company is a Paramount
            in the real estate realm with an Experience of 10+ years. Brickland
            Consulting has managed to Build Stronger Connections in the
            Industry.
          </p>
          <p>
            We specialise in proffering Proficient Consultation Services
            Professionally & Independently to Investors World widely.
          </p>
          <p>
            Brickland Consulting is committed to offer Advanced and New-Fangled
            approach with Technical Strategies to help out Our Customers with
            Satisfactory Investments. Today Investors Clinic stands tall with
            1.5 Lacs Customers and 100+ Leading Developers with whom we have
            reached Bigger Milestones of Success.
          </p>
        </div>
<div className="col-lg-6">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.013265772742!2d77.46944977605534!3d28.4490164923896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1d2674b122b%3A0x6e55647845991a81!2sBrickland%20Consulting%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1715928315808!5m2!1sen!2sin"
  width={600}
  height={450}
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

</div>
      </div>
    </>
  );
};

export default ContactForm;
