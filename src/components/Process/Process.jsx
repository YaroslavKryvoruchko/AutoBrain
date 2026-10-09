import './Process.css';

const steps = [
  {
    number: '01',
    title: 'Interface',
    text: 'Connect diagnostic equipment to OBD-II or proprietary ports to pull current and historical data.',
  },
  {
    number: '02',
    title: 'Isolate',
    text: 'Test specific circuits, sensors, and relays using multimeters and oscilloscopes to find the physical fault.',
  },
  {
    number: '03',
    title: 'Rectify',
    text: 'Repair wiring, replace components, and clear codes. Perform operational testing to verify system integrity.',
  },
];

function Process() {
  return (
    <section id='process'>
      <div className='process_inner'>
        <h2>The diagnostic process</h2>
        <p className='process_lead'>
          Systematic approach to isolated electrical faults.
        </p>
        <ol className='process_steps'>
          {steps.map((step) => (
            <li key={step.number}>
              <span className='process_num'>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
