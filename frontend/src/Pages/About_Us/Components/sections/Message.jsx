
import React from 'react';
import './Message.css';

const Message = () => {
  return (
    <>
    <h2>Message from Assistant Director Alumni Relations</h2>
    <div className="message-container">
      <div className="message-content">
        <div className="message-text">
          <p>Welcome to the Directorate of Alumni Relations!</p>
          <p>
            As the <strong>Assistant Director</strong> of Alumni Relations, it gives me immense pleasure to extend a warm welcome to all alumni of SRM University-AP. Whether you graduated recently or many years ago, you remain an integral part of our academic community.
          </p>
          <p>
            The Directorate of Alumni Relations is dedicated to fostering and strengthening the lifelong bond between our esteemed alumni and the university. We are committed to providing opportunities for you to stay connected, engage with fellow alumni, and contribute to the continued success of our alma mater.
          </p>
          <p>
            Through this website, you will find a wealth of resources, including information on upcoming events, networking opportunities, alumni achievements, and ways to give back to the university that played a pivotal role in shaping your academic and professional journey.
          </p>
          <p>
            I encourage you to explore the various sections of our website, reconnect with old friends, and discover how you can play an active role in supporting and advancing the mission of our institution.
          </p>
          <p>
            Thank you for your ongoing support and dedication to SRM University-AP. Together, let's continue to celebrate the spirit of our alma mater and create lasting connections that enrich the lives of our alumni community.
          </p>
          <p>
            <strong>Dr. Satish Anamalamudi,</strong><br />
            Assistant Director | Alumni Relations,<br />
            Associate Professor, Department of CSE<br />
            SRM University, AP
          </p>
        </div>
        <div className="message-image">
          {/* Load the image from the public folder */}
          <img
            src="/Images/Satish Anamalamudi.png"
            alt="Assistant Director"
            style={{ objectFit: 'cover', width: '100%', height: '100%', float: 'right' }}
          />
        </div>
      </div>
    </div>
    </>
  );
}

export default Message;
