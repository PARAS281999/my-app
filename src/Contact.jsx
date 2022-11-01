import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function Contact() {
    return (
        <><div className='Navbar-contact'>
            <Navbar />
        </div><div className='background-image'>
                <img className="styles-image" src="https://www.bugatti.com/fileadmin/_processed_/sei/p63/se-image-cc9cf414b3c6684cb1d83602ef2d087d.jpg" alt="background" />
                <h1 className="styles-header">
                    Contact Us</h1>
            </div>
            <div className='upper-text'>
                <h3>Connect with us</h3>
                <p>Your complete satisfaction is of primary importance to us. should you ever have questions or comments about your Hyundai vehicle, we suggets you follow these steps so your concerns can be addressed as quickly and efficiently as possible.</p>
            </div>
            <div className='flexbox-containerupper'>
                <div className='contact-details'>
                    <h3>Enquiry</h3>
                    <p>For any queries related to Product, Price, Company, Dealership, Warranty, Service, Finance, Insurance and vehicle support. Please submit your queries on the links given below. Our representative will contact you shortly.</p>
                </div>
                <div className='contact-details'>
                    <h3>Feedback</h3>
                    <p>Express your grievances and feedback to executive team regarding our products and service. Your message will be promptly handled under the direct supervision of our executive management.</p>
                </div>
            </div>
            <div className='flexbox-containerupper1'>
            <div className='contact-details'>
                    <h3>Call Us</h3>
                    <p>For a quick response, we request you to be ready with your vehicle registration number or VIN number.Call us for enquiry / feedback at.</p>
                </div>
                <div className='contact-details'>
                    <h3>Email us</h3>
                    <p>If for any reason, you are not able to register your enquiry/ feedback.Please write to us on following email</p>
                </div>
            </div>
            <div>
                <Footer />
            </div></>

    )
}

export default Contact;