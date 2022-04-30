import React, { useState } from 'react';

function Slides({ slides }) {
  const [current, setCurrent] = useState(1);

  const restarthandler = () => {
    setCurrent(1);
  };
  const prevhandler = () => {
    setCurrent((prev) => prev - 1);
  };
  const nexthandler = () => {
    setCurrent((prev) => prev + 1);
  };

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={restarthandler} disabled={ current === 1 }>
          Restart
        </button>
        <button data-testid="button-prev" className="small" onClick={prevhandler} disabled={ current === 1 }>
          Prev
        </button>
        <button data-testid="button-next" className="small" onClick={nexthandler} disabled={ current === slides.length }>
          Next
        </button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slides[current-1].title}</h1>
        <p data-testid="text">{slides[current-1].text}</p>
      </div>
    </div>
  );
}

export default Slides;
