export const data = [
  {
    questions: '1. Какой typeof null?',
    answers: 'object',
  },
  {
    questions: '2. Что возвращает оператор ИЛИ?',
    answers:
      'первое значение, булевое значение которого true, если все значения false, он возвращает последнее значение;',
  },
  {
    questions: '3. Что возвращает оператор И?',
    answers:
      'первое значение, булевое значение которого false, если все значение true, он возвращает последнее',
  },
  {
    questions:
      '4. С помощью какого оператора можно указать switch что делать, если ни один из вариантов выбора не подошел?',

    answers: 'default',
  },
  {
    questions:
      '5. С помощью какого оператора можно прервать проверки в switch/case, если произошло совпадение?',
    answers: 'с помощью оператора break.',
  },
  {
    questions: '6. Опишите синтаксис оператора for',
    answers:
      'Оператор for состоит из: (стартовое значение; условие; изменение значения) { тело цикла }',
  },
  {
    questions: '7. Опишите порядок выполнения в цикле for:',
    answers:
      '1. Установка стартового значения. 2. Проверка условия. 3. Тело цикла. 4. Изменение стартового значения',
  },
  {
    questions: '8. Какой оператор прерывает цикл?',
    answers: 'оператор break',
  },
  {
    questions:
      '9. Какой оператор прерывает текущую иттерацию цикла, но продолжает его?',
    answers: 'оператор continue',
  },
  {
    questions: '10. Какой оператор возвращает остаток от деления?',
    answers: 'оператор %',
  },
  {
    questions:
      '11. В чем разница между Function Declaration и Function Expression?',
    answers:
      'Function Declaration можно вызывать до ее объявления, а Function Expression - нет',
  },
  {
    questions: '12. Что возвращает функция, в которой нет return?',
    answers: 'она возвращает undefined.',
  },
  {
    questions:
      '13. Где как правило хранятся методы у объекта, созданного с помощью функции-конструктора?',
    answers: 'в прототипах',
  },
  {
    questions: '14. С помощью чего можно получить массив ключей объекта?',
    answers: 'Object.keys',
  },
  {
    questions: '15. С помощью чего можно получить массив значений объекта?',
    answers: 'Object.values',
  },
  {
    questions: '16. Что возвращает метод массива pop?',
    answers: 'вырезанный элемент массива',
  },
  {
    questions: '17. Что возвращает метод массива push?',
    answers: 'новую длину массива',
  },
  {
    questions: '18. Какой метод добавляет элемент в начало массива?',
    answers: 'unshift',
  },
  {
    questions: '19. Для чего используют indexOf?',
    answers: 'для поиска первого вхождения элемента в массив',
  },
  {
    questions: '20. Какие аргументы принимает indexOf?',
    answers:
      ' первый аргумент - элемент для поиска, второй - с какого индекса начинать поиск',
  },
  {
    questions: '21. Что возвращает indexOf?',
    answers:
      'позицию первого вхождения элемента в массив или -1 если элемент в массиве не найден',
  },
  {
    questions: '22. Для чего используется массива includes?',
    answers: 'для проверки входит ли вообще элемент в массив',
  },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
  //   {
  //     questions: '1. Какой typeof null?',
  //     answers: 'object',
  //   },
];
