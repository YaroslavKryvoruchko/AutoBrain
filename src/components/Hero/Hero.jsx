import './Hero.css';

import PHONE from '../../asset/hero/phone.svg';
import WHATSAPP_HERO from '../../asset/hero/hero-whatsapp.svg';

import LOCATOON from '../../asset/hero/location.svg';
import WORLD from '../../asset/hero/world.svg';
import MEDAL from '../../asset/hero/medal.svg';
import TOOL from '../../asset/hero/tool.svg';

function Hero() {
  return (
    <section id='hero'>
      <div className='hero_center'>
        <h1 className='top_line'>EXOTIC &</h1>
        <h1>SPECIALIST</h1>
        <p>
          Supercar & exotic vehicle electronics. Dealer-level
          <br /> diagnostics, programming, and coding.
        </p>
        <div className='hero_center_btn'>
          <button>
            <a href='"'>call now</a>
            <img src={PHONE} alt='phone-icon' />
          </button>
          <button className='whatsapp'>
            <a href='"'>whatsapp</a>
            <img src={WHATSAPP_HERO} alt='whatsapp-icon' />
          </button>
        </div>
      </div>
      <div className='hero_botton'>
        <ul>
          <li>
            <img src={LOCATOON} alt='' />
            <p>Sacramento HQ</p>
          </li>
          <hr />
          <li>
            <img src={WORLD} alt='' />
            <p>Remote worldwide</p>
          </li>
          <hr />
          <li>
            <img src={MEDAL} alt='' />
            <p>5+ years experience</p>
          </li>
          <hr />
          <li>
            <img src={TOOL} alt='' />
            <p>Dealer-grade tools</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
