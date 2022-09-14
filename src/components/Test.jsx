import { data } from '../data/data';
import style from '../../src/Style.module.css';
import React, { useState } from 'react';
import { generate } from 'shortid';

function Test() {
  const [render, setRender] = useState(false);
  const [activeId, setActiveId] = useState('');
  data.map(item => (item.id = generate()));
  function showAnswer(e) {
    setRender(!render);

    const id = e.currentTarget.getAttribute('data-id');
    const obj = data.find(item => item.id === id);
    console.log(obj.answers);

    if (obj !== undefined) {
      const normalizedString = obj.answers.toString();
      const upperString = normalizedString.replace(/^(.)/, match =>
        match.toUpperCase()
      );
      setActiveId(upperString);
    }
  }

  console.log(activeId.slice(1));

  return (
    <div>
      <ul className={style.list}>
        {data.map(item => (
          <li data-id={item.id} key={item.id}>
            <p className={style.questions}>{item.questions}</p>
            <button onClick={showAnswer} data-id={item.id} type="button">
              Ответ
            </button>
            {activeId ===
              item.answers
                .toString()
                .replace(/^(.)/, match => match.toUpperCase()) &&
            render === true ? (
              <p className={style.answers} data-id={item.id}>
                {item.answers.replace(/^(.)/, match => match.toUpperCase())}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
