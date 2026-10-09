import { useState } from 'react';

import './Contact.css';

import INSTAGRAM from '../../asset/instagram.png';
import FACEBOOK from '../../asset/facebook.png';
import TICTOK from '../../asset/tictok.png';
import YOUTUBE from '../../asset/youtube.svg';

const services = [
  'Computer diagnostics',
  'Battery & alternator',
  'Custom wiring',
  'Lighting upgrades',
  'Remote service',
];

const socials = [
  { src: INSTAGRAM, alt: 'Instagram' },
  { src: FACEBOOK, alt: 'Facebook' },
  { src: TICTOK, alt: 'TikTok' },
  { src: YOUTUBE, alt: 'YouTube' },
];

function Socials() {
  return (
    <div className='contact_socials'>
      {socials.map((item) => (
        <a key={item.alt} href='#contact' aria-label={item.alt}>
          <img src={item.src} alt='' />
        </a>
      ))}
    </div>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section id='contact'>
      {/* <svg
        className='contact_chevrons'
        viewBox='0 0 640 900'
        preserveAspectRatio='none'
        aria-hidden='true'
      >
        <path d='M-40 0 420 450 -40 900h130L550 450 90 0Z' />
        <path d='M150 -30 610 450 150 930h130L740 450 280 -30Z' />
        <path d='M340 -60 800 450 340 960h130L930 450 470 -60Z' />
      </svg> */}

      <div className='contact_chevrons-test'>
        <div className='contact_chevrons-test_top'>
          <span></span>
        </div>
        <div className='contact_chevrons-test-bottom'>
          <span></span>
        </div>
      </div>

      <div className='contact_top'>
        <div className='contact_form'>
          <h2>Contact us</h2>
          <form onSubmit={handleSubmit}>
            <div className='contact_row'>
              <input
                type='text'
                name='name'
                placeholder='Name'
                aria-label='Name'
                required
              />
              <select
                name='service'
                aria-label='Select a service'
                defaultValue=''
                required
              >
                <option value='' disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <input
              type='email'
              name='email'
              placeholder='Email'
              aria-label='Email'
              required
            />
            <textarea
              name='message'
              placeholder='Message'
              aria-label='Message'
              required
            />
            <button type='submit'>Send</button>
            {sent && (
              <p className='contact_sent'>Message sent. We'll be in touch.</p>
            )}
          </form>
        </div>

        <div className='contact_info'>
          <div className='contact_detail'>
            <span className='contact_badge' aria-hidden='true'>
              <svg viewBox='0 0 24 24'>
                <path d='M7 3.5h3.2l1 3.2-2 1.2a12 12 0 0 0 5.9 5.9l1.2-2 3.2 1V20a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 6.1 1.5 1.5 0 0 1 5 4.5L7 3.5Z' />
              </svg>
            </span>
            <div>
              <p className='contact_kicker'>Call now</p>
              <a href='tel:+19161234567'>+1(916) 123-4567</a>
              <p className='contact_note'>We're here to help!</p>
            </div>
          </div>

          <div className='contact_detail'>
            <span className='contact_badge' aria-hidden='true'>
              <svg viewBox='0 0 24 24'>
                <path d='M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z' />
                <circle cx='12' cy='11' r='2.2' />
              </svg>
            </span>
            <div>
              <p className='contact_kicker'>Serving Sacramento</p>
              <p className='contact_place'>&amp; remote worldwide</p>
            </div>
          </div>

          <Socials />
        </div>
      </div>

      <footer className='contact_footer'>
        <div className='contact_brand'>
          <p className='contact_brand_name'>Auto</p>
          <p className='contact_tag'>Professional auto electrical</p>
          <ul>
            <li>Diagnostics</li>
            <li>Performance</li>
            <li>Repair</li>
          </ul>
        </div>

        <div className='contact_location'>
          <p className='contact_foot_label'>Location</p>
          <p>Sacramento &amp; remote worldwide</p>
        </div>

        <nav className='contact_nav' aria-label='Footer'>
          <p className='contact_foot_label'>Navigate</p>
          <a href='#services'>Services</a>
          <a href='#about'>About</a>
          <a className='contact_nav_desk' href='#contact'>
            Contact
          </a>
          <a href='#brands'>Brands</a>
          <a href='#review'>Review</a>
          <p className='contact_nav_place'>Sacramento \ remote worldwide</p>
        </nav>

        <div className='contact_reach'>
          <p className='contact_foot_label'>Connect</p>
          <a href='mailto:info@autobrain.pro'>info@autobrain.pro</a>
          <a className='contact_phone_desk' href='tel:+19159159999'>
            +1-915-915-9999
          </a>
          <a className='contact_phone_mobile' href='tel:+19161234567'>
            +1 (916) 123-4567
          </a>
          <Socials />
        </div>
      </footer>

      <p className='contact_copy'>
        <span className='contact_copy_full'>
          All rights reserved. © copyright | made by qwebfactory
        </span>
        <span className='contact_copy_short'>© Copyright | qwebfactory</span>
      </p>

      <a className='contact_callbar' href='tel:+19161234567'>
        <svg viewBox='0 0 24 24' aria-hidden='true'>
          <path d='M7 3.5h3.2l1 3.2-2 1.2a12 12 0 0 0 5.9 5.9l1.2-2 3.2 1V20a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 6.1 1.5 1.5 0 0 1 5 4.5L7 3.5Z' />
        </svg>
        Call now: +1 (916) 123-4567
      </a>
    </section>
  );
}

export default Contact;
