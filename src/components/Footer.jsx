import React from 'react'
import styled from 'styled-components';
import { FaDiscord, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";

function Footer() {
    const Wrapper = styled.section``
    return (
        <Wrapper>
            <section className='contact-short'>
                <div className='grid grid-two-colum'>
                    <div>
                        <h3>Ready To Race</h3>
                        <h3>Take a Test Ride Now</h3>
                    </div>
                    <div>
                        <button className='primary-button'>Know More</button>
                    </div>
                </div>
            </section>
            <footer>
                <div className='flexbox-containerfooter'>
                    <div className='footer-about'>
                        <h3>Paras Verma</h3>
                        <p>All types of vechiles including sports, Suv, Track are avaliable here</p>
                    </div>
                    <div className='footer-subscribe'>
                        <h3>Do Subscribe</h3>
                        <p>Dont Forget to subscribe.to never miss any crazy update</p>
                        <form action='#'>
                        <input 
                        type="email"
                        required="true"
                        autoComplete='off'
                        placeholder='Email' />
                        <input type="submit" value="Subscribe" />
                        </form>
                    </div>

                    <div className='footer-social'>
                        <h3>Follow Us</h3>
                        <div className='footer-social--icons'>
                            <div>
                                <FaDiscord className='icons' />
                            </div>
                            <div>
                                <FaYoutube className='icons' />
                            </div>
                            <div>
                                <FaInstagram className='icons' />
                            </div>
                            <div>
                                <FaFacebookF className='icons' />
                            </div>
                        </div>
                    </div>
                    <div className='footer-contact'>
                        <h3>Call Us</h3>
                        <p>+91 123456789</p>
                    </div>
                </div>
                <div className='footer-bottom--section'>
                        <hr />
                        <div className='flexbox-containerfooter-bottom'>
                            <p>@{new Date().getFullYear()} Paras Verma. All Rights Reserved</p>
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>
                        </div>
                    </div>
            </footer>
        </Wrapper>
    );
};

export default Footer;