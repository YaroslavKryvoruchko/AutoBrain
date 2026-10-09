import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './Services.css';

import TUNING from '../../asset/tuning.jpg';
import INSTAGRAM from '../../asset/instagram.png';
import FACEBOOK from '../../asset/facebook.png';
import TICTOK from '../../asset/tictok.png';
import YOUTUBE from '../../asset/youtube.svg';

const socials = [
  { src: INSTAGRAM, alt: 'Instagram' },
  { src: FACEBOOK, alt: 'Facebook' },
  { src: TICTOK, alt: 'TikTok' },
];

const services = [
  {
    title: 'Computer diagnostics',
    summary:
      'Deep-level scanning and fault code analysis for modern vehicle ECM, TCM, and BCM modules. Pinpoint accuracy for complex issues.',
    included: [
      'Full ECU / TCM / BCM scan & error code reading',
      'Live data stream & sensor diagnostics',
      'Detailed report & repair recommendations',
    ],
    mark() {
      return (
        <>
          <circle cx='12' cy='12' r='3.2' />
          <path d='M12 2.4v2.6M12 19v2.6M2.4 12h2.6M19 12h2.6M5.2 5.2l1.8 1.8M17 17l1.8 1.8M18.8 5.2 17 7M7 17l-1.8 1.8' />
        </>
      );
    },
  },
  {
    title: 'Battery & alternator',
    summary:
      'Comprehensive charging system tests, high-output alternator upgrades, and parasitic draw tracing for reliable starts every time.',
    included: [
      'Battery and charging system load test',
      'High-output alternator upgrades',
      'Parasitic draw tracing for reliable starts',
    ],
    mark() {
      return (
        <>
          <rect x='6.5' y='7' width='11' height='13' rx='1.6' />
          <path d='M10 4.2h4M12 10.2v4.2M10 12.3h4' />
        </>
      );
    },
  },
  {
    title: 'Custom wiring',
    summary:
      'Bespoke harness fabrication, accessory integration, and clean wire routing for restorations, engine swaps, and heavy equipment.',
    included: [
      'Custom harness fabrication',
      'Accessory integration and clean wire routing',
      'Restorations, engine swaps, and heavy equipment',
    ],
    mark() {
      return <path d='M2.5 15c2.2-7 3.6 7 5.8 0s3.6 7 5.8 0 3.6 7 5.8 0' />;
    },
  },
  {
    title: 'Lighting upgrades',
    summary:
      'LED conversions, custom HID projector retrofits, and auxiliary lighting installations engineered for maximum visibility and safety.',
    included: [
      'LED conversions and HID projector retrofits',
      'Auxiliary lighting installation',
      'Aiming and wiring for visibility and safety',
    ],
    mark() {
      return (
        <>
          <path d='M9.2 17.2h5.6M10 19.6h4' />
          <path d='M8 13.4a4.8 4.8 0 1 1 8 0c-.2 1.3-1.2 2-1.8 2.6H9.8c-.6-.6-1.6-1.3-1.8-2.6z' />
        </>
      );
    },
  },
  {
    title: 'Remote service',
    wide: true,
    summary:
      'Dealer-level diagnostics, programming, and coding from anywhere. Connect remotely for module work and fault tracing without a shop visit.',
    included: [
      'Remote ECU, TCM, and BCM programming and coding',
      'Live fault tracing and module configuration',
      'Worldwide support, with on-site work in Sacramento',
    ],
    mark() {
      return (
        <>
          <circle cx='12' cy='12' r='8' />
          <path d='M4 12h16M12 4c2.2 2.5 3.3 5.2 3.3 8s-1.1 5.5-3.3 8c-2.2-2.5-3.3-5.2-3.3-8s1.1-5.5 3.3-8z' />
        </>
      );
    },
  },
];

function Icon({ children }) {
  return (
    <span className='services_icon' aria-hidden='true'>
      <svg viewBox='0 0 24 24'>{children}</svg>
    </span>
  );
}

function CallLink() {
  return (
    <a href='tel:+19161234567'>
      <svg viewBox='0 0 24 24' aria-hidden='true'>
        <path d='M8.2 3.6h2.1l1 2.8-1.7 1a11.2 11.2 0 0 0 5 5l1-1.7 2.8 1v2.1a1.8 1.8 0 0 1-2 1.8A14.2 14.2 0 0 1 6.4 5.6a1.8 1.8 0 0 1 1.8-2z' />
      </svg>
      <span>Call</span>
    </a>
  );
}

function ServiceDetail({ service, onClose, closeRef }) {
  const leftSocials = socials.filter((item) => item.alt !== 'TikTok');
  const tiktok = socials.find((item) => item.alt === 'TikTok');

  return (
    <article className='services_detail'>
      <div className='services_detail_head'>
        <Icon>{service.mark()}</Icon>
        <h3>{service.title}</h3>
        <button
          ref={closeRef}
          type='button'
          className='services_close'
          aria-label='Close details'
          onClick={onClose}
        >
          <svg viewBox='0 0 12 12' aria-hidden='true'>
            <path d='M2 2.2 9.8 10M9.8 2.2 2 10' />
          </svg>
        </button>
      </div>
      <p>{service.summary}</p>
      <h4>What is included</h4>
      <ul>
        {service.included.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h4>Get in touch / book via</h4>
      <div className='services_reach'>
        <div className='services_socials'>
          {leftSocials.map((item) => (
            <a key={item.alt} href='#contact'>
              <img src={item.src} alt='' />
              <span>{item.alt}</span>
            </a>
          ))}
          <CallLink />
        </div>
        <div className='services_aside'>
          <p>Also check out</p>
          <div className='services_socials'>
            <a href='#contact'>
              <img src={tiktok.src} alt='' />
              <span>{tiktok.alt}</span>
            </a>
            <a href='#contact'>
              <img src={YOUTUBE} alt='' />
              <span>YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function Services() {
  const [activeTitle, setActiveTitle] = useState(null);
  const [shown, setShown] = useState(true);
  const timer = useRef(null);
  const closeRef = useRef(null);
  const stageRef = useRef(null);
  const gridRef = useRef(null);
  const active = services.find((service) => service.title === activeTitle);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const grid = gridRef.current;
    if (!stage || !grid) return;

    const query = window.matchMedia('(max-width: 800px)');

    const apply = () => {
      if (!query.matches) {
        stage.style.height = '';
        return;
      }

      const detail = stage.querySelector('.services_detail');
      const next =
        activeTitle && detail ? detail.offsetHeight : grid.offsetHeight;
      stage.style.height = `${next}px`;
    };

    apply();
    query.addEventListener('change', apply);
    window.addEventListener('resize', apply);

    return () => {
      query.removeEventListener('change', apply);
      window.removeEventListener('resize', apply);
    };
  }, [activeTitle, shown]);

  useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    if (!activeTitle || !shown) return;
    closeRef.current?.focus({ preventScroll: true });
  }, [activeTitle, shown]);

  function show(next) {
    if (next === activeTitle || timer.current) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (next) {
      document.getElementById('services')?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }

    if (reduceMotion) {
      setActiveTitle(next);
      return;
    }

    setShown(false);
    timer.current = window.setTimeout(() => {
      setActiveTitle(next);
      setShown(true);
      timer.current = null;
    }, 380);
  }

  const gridHidden = Boolean(activeTitle) || !shown;
  const detailHidden = !activeTitle || !shown;

  return (
    <section id='services'>
      <div className='services_inner'>
        <h2>Our core services</h2>
        <div className='services_stage' ref={stageRef}>
          <div
            ref={gridRef}
            className={gridHidden ? 'services_grid is_out' : 'services_grid'}
            inert={gridHidden ? true : undefined}
            aria-hidden={gridHidden || undefined}
          >
            {services.map((service) => {
              const card = (
                <>
                  <Icon>{service.mark()}</Icon>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <button type='button' onClick={() => show(service.title)}>
                    {service.action || 'View details →'}
                  </button>
                </>
              );

              if (service.wide) {
                return (
                  <article
                    className='services_card services_tuning'
                    key={service.title}
                  >
                    <div className='services_tuning_copy'>{card}</div>
                    <img
                      src={TUNING}
                      alt='Oscilloscope trace on a diagnostic screen'
                    />
                  </article>
                );
              }

              return (
                <article className='services_card' key={service.title}>
                  {card}
                </article>
              );
            })}
          </div>
          <div
            className={detailHidden ? 'services_pane is_out' : 'services_pane'}
            inert={detailHidden ? true : undefined}
            aria-hidden={detailHidden || undefined}
          >
            {active && (
              <ServiceDetail
                service={active}
                closeRef={closeRef}
                onClose={() => show(null)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
