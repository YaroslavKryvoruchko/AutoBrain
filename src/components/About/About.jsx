import './About.css';

import ABOUT_PHOTO from '../../asset/about-photo.png';

function About() {
  return (
    <section id='about'>
      <div className='about_inner'>
        <div className='about_copy'>
          <h2>Precision diagnostics.</h2>
          <p>
            AutoBrain specializes in supercar and exotic vehicle electronics
            with a strong focus on McLaren. Using professional dealer-grade
            equipment and OEM software, I solve the toughest diagnostic,
            programming, and coding challenges — on-site or remotely.
          </p>
        </div>
        <div className='about_photo'>
          <img
            src={ABOUT_PHOTO}
            alt='Diagnostic laptop connected to a supercar engine'
          />
        </div>
      </div>
    </section>
  );
}

export default About;
