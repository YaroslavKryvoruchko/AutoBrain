import './Brands.css';

import BMW from '../../asset/brands/bmw-m.png';
import FERRARI from '../../asset/brands/ferrari.png';
import PORSCHE from '../../asset/brands/porsche.png';
import ROLLS from '../../asset/brands/rolls-royce.png';
import LAMBORGHINI from '../../asset/brands/lamborghini.png';
import BENTLEY from '../../asset/brands/bentley.png';
import MCLAREN from '../../asset/brands/mclaren.png';
import KOENIGSEGG from '../../asset/brands/koenigsegg.png';
import PHONE from '../../asset/hero/phone.svg';
import { PHONE_TEL } from '../../links';

const brands = [
  { src: BMW, name: 'BMW M' },
  { src: FERRARI, name: 'Ferrari' },
  { src: PORSCHE, name: 'Porsche' },
  { src: ROLLS, name: 'Rolls-Royce' },
  { src: LAMBORGHINI, name: 'Lamborghini' },
  { src: BENTLEY, name: 'Bentley' },
  { src: MCLAREN, name: 'McLaren' },
  { src: KOENIGSEGG, name: 'Koenigsegg' },
];

function Brands() {
  return (
    <section id='brands'>
      <div className='brands_logos'>
        {[0, 1].map((copy) => (
          <ul className='brands_track' key={copy} aria-hidden={copy === 1}>
            {brands.map((brand) => (
              <li key={brand.name}>
                <img src={brand.src} alt={copy === 0 ? brand.name : ''} />
              </li>
            ))}
          </ul>
        ))}
      </div>

      <div className='brands_content'>
        <h2>Ready to bring your supercar to life?</h2>
        <div className='brands_actions'>
          <a className='brands_call' href={PHONE_TEL}>
            Call now
            <img src={PHONE} alt='' />
          </a>
          <a className='brands_contact' href='#contact'>
            Contact us
            <svg viewBox='0 0 24 24' aria-hidden='true'>
              <path d='M5 6.5h14v9H8l-3 2.5v-2.5H5v-9Z' />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Brands;
