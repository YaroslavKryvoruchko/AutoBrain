import './Mission.css';

function Mission() {
  return (
    <section id='mission'>
      <div className='mission_panel'>
        <h2>Our mission</h2>
        <div className='mission_grid'>
          <article className='mission_card mission_statement'>
            <div className='mission_icon' aria-hidden='true'>
              <svg viewBox='0 0 24 24'>
                <path d='M12 3.2v6.2' />
                <path d='M7.1 6.7a6.6 6.6 0 1 0 9.8 0' />
              </svg>
            </div>
            <p>
              To eliminate the guesswork from automotive repair. We believe that
              modern vehicles are rolling computers, and they require a
              technical, data-driven approach. Our mission is to provide fleet
              managers and individual owners with absolute certainty through
              precise diagnostics and robust electrical solutions.
            </p>
          </article>

          <article className='mission_card mission_stat'>
            <p className='mission_label'>Vehicles serviced</p>
            <p className='mission_value mission_value_accent'>2,000+</p>
          </article>

          <article className='mission_card mission_stat'>
            <p className='mission_label'>Diagnostic accuracy</p>
            <p className='mission_value'>99.8%</p>
          </article>

          <article className='mission_card mission_evolution'>
            <div className='mission_icon mission_icon_chip' aria-hidden='true'>
              <svg viewBox='0 0 24 24'>
                <rect x='8' y='8' width='8' height='8' rx='1' />
                <path d='M12 8V4M12 20v-4M8 12H4M20 12h-4M9.5 4v2.2M14.5 4v2.2M9.5 17.8V20M14.5 17.8V20M4 9.5h2.2M4 14.5h2.2M17.8 9.5H20M17.8 14.5H20' />
              </svg>
            </div>
            <div>
              <h3>The Evolution of Repair</h3>
              <p>
                As vehicles transitioned from mechanical to digital, the
                industry lagged. Auto Electrical was founded to bridge that gap,
                bringing oscilloscope-level precision to everyday automotive
                repair.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Mission;
