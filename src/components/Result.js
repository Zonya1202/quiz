import React from 'react';

const Result = ({ value }) => {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="gavno" />
      <h2>Вы отгадали {value} ответа из 3</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
};

export default Result;
