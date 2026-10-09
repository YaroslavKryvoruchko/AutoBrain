import React, { useEffect, useState } from 'react';

import INSTAGRAM from '../../asset/instagram.png';
import FACEBOOK from '../../asset/facebook.png';
import TICTOK from '../../asset/tictok.png';
import YOUTUBE from '../../asset/youtube.svg';

import './Header.css';

function Header() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;

    const wide = window.matchMedia('(min-width: 1101px)');
    if (wide.matches) return undefined;

    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={open ? 'is_open' : ''}>
      <div className='logo'>
        <a href='#hero' onClick={close}>
          <h2>Auto</h2>
        </a>
      </div>
      <button
        className='header_toggle'
        type='button'
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className='header_panel'>
        <hr className='header_rule' />
        <p className='header_label'>Menu</p>
        <div className='nav_bar'>
          <ul>
            <li>
              <a href='#services' onClick={close}>
                services
              </a>
            </li>
            <li>
              <a href='#brands' onClick={close}>
                brands
              </a>
            </li>
            <li>
              <a href='#about' onClick={close}>
                about
              </a>
            </li>
            <li>
              <a href='#review' onClick={close}>
                review
              </a>
            </li>
            <li>
              <a href='#contact' onClick={close}>
                contact
              </a>
            </li>
          </ul>
        </div>
        <hr className='header_rule' />
        <p className='header_label'>Social Media</p>
        <div className='social_media'>
          <div className='social_media_icons'>
            <img src={INSTAGRAM} alt='Instagram' />
            <img src={FACEBOOK} alt='Facebook' />
            <img src={TICTOK} alt='TikTok' />
            <img src={YOUTUBE} alt='YouTube' />
          </div>
          <div className='social_media_btn'>
            <button>whatsapp</button>
            <button>call</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
