import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import './Review.css';

const PAGE_SIZE = 2;

const reviews = [
  {
    name: 'John D., Ferrari Owner',
    quote: 'Reprogrammed a module and coded a key remotely. Fast and flawless.',
  },
  {
    name: 'Alex M., McLaren Owner',
    quote:
      "Fixed faults the dealer couldn't trace for weeks. A true McLaren pro!",
  },
  {
    name: 'Sarah K., Lamborghini Owner',
    quote: 'Coded a new module the same day. Clear, precise, and done right.',
  },
  {
    name: 'Mark R., Porsche Owner',
    quote:
      'Traced an electrical fault others kept guessing at. Honest and exact.',
  },
];

const pageCount = Math.ceil(reviews.length / PAGE_SIZE);

const faqs = [
  {
    question: 'Do you program and code ECU or other control modules?',
    answer:
      'Yes. We provide ECU, ECM, and TCU programming, module flashing, adaptation, coding, and configuration. We can also assist with replacement modules and certain module recovery situations.',
  },
  {
    question: 'I lost all the keys to my car. Can you program new ones?',
    answer:
      'Yes. Lost-key programming is available for many vehicles, including cases where no working key remains. What is possible depends on the model and its security system.',
  },
  {
    question: 'I am not located in California. Can you still help me?',
    answer:
      'Yes. Remote programming, coding, and diagnostics are available worldwide. On-site work is based in Sacramento.',
  },
];

function Stars() {
  return (
    <div className='review_stars' aria-label='5 stars'>
      {Array.from({ length: 5 }, (_, index) => (
        <svg key={index} viewBox='0 0 20 20' aria-hidden='true'>
          <path d='m10 1.6 2.2 4.8 5.2.5-4 3.4 1.2 5.1L10 13.2 5.4 15.4 6.6 10.3 2.6 6.9l5.2-.5L10 1.6z' />
        </svg>
      ))}
    </div>
  );
}

function Review() {
  const [page, setPage] = useState(0);
  const [shown, setShown] = useState(true);
  const [openIndex, setOpenIndex] = useState(0);
  const [answerMin, setAnswerMin] = useState(0);
  const timer = useRef(null);
  const faqRef = useRef(null);

  useLayoutEffect(() => {
    const root = faqRef.current;
    if (!root) return;

    const measure = () => {
      const heights = [...root.querySelectorAll('.faq_measure p')].map(
        (item) => item.offsetHeight,
      );
      const next = heights.length ? Math.max(...heights) : 0;
      setAnswerMin((current) => (current === next ? current : next));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(root);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    return () => window.clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      showPage((page + 1) % pageCount);
    }, 10000);

    return () => window.clearInterval(id);
  }, [page]);

  function showPage(next) {
    if (next === page || timer.current) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion) {
      setPage(next);
      return;
    }

    setShown(false);
    timer.current = window.setTimeout(() => {
      setPage(next);
      setShown(true);
      timer.current = null;
    }, 380);
  }

  const visible = reviews.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);

  return (
    <section id='review'>
      <div className='review_inner'>
        <div className='review_column'>
          <h2>Reviews</h2>
          <div className={shown ? 'review_cards' : 'review_cards is_out'}>
            {visible.map((review) => (
              <article className='review_card' key={review.name}>
                <Stars />
                <p className='review_quote'>"{review.quote}"</p>
                <p className='review_name'>— {review.name}</p>
              </article>
            ))}
          </div>
          <div className='review_dots' role='tablist' aria-label='Review pages'>
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type='button'
                className={index === page ? 'is_active' : ''}
                aria-label={`Show reviews ${index + 1}`}
                aria-selected={index === page}
                onClick={() => showPage(index)}
              />
            ))}
          </div>
        </div>

        <div className='review_faq' id='faq'>
          <div
            className='faq_body'
            ref={faqRef}
            style={{ '--faq-answer': `${answerMin}px` }}
          >
          <h2>Faq</h2>
          <div className='faq_measure' aria-hidden='true'>
            {faqs.map((item) => (
              <p key={item.question}>{item.answer}</p>
            ))}
          </div>
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article className='faq_item' key={item.question}>
                <button
                  type='button'
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <svg
                    className='faq_chevron'
                    viewBox='0 0 12 8'
                    aria-hidden='true'
                  >
                    <path d='M1.2 1.4 6 6.2 10.8 1.4' />
                  </svg>
                </button>
                {isOpen && (
                  <div className='faq_answer'>
                    <p>{item.answer}</p>
                  </div>
                )}
              </article>
            );
          })}
          {openIndex < 0 && <div className='faq_answer' />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
