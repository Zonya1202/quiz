import React from 'react';
import Result from './Result';

const Game = () => {
  const questions = [
    {
      title: 'React - это ... ?',
      variants: ['библиотека', 'фреймворк', 'приложение'],
      correct: 0,
    },
    {
      title: 'Компонент - это ... ',
      variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
      correct: 1,
    },
    {
      title: 'Что такое JSX?',
      variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
      ],
      correct: 2,
    },
  ];

  const [count, setCount] = React.useState(0);
  const [step, setStep] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    if (question.correct === index) {
      setCount(count + 1);
    }
    setStep(step + 1);
  };

  const procentage = Math.round((step / questions.length) * 100);
  return (
    <>
      {step !== questions.length ? (
        <>
          <div className="progress">
            <div style={{ width: `${procentage}%` }} className="progress__inner"></div>
          </div>
          <h1>{question.title}</h1>
          <ul>
            {question.variants.map((text, index) => (
              <li onClick={() => onClickVariant(index)} key={text}>
                {text}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Result value={count} />
      )}
    </>
  );
};

export default Game;
