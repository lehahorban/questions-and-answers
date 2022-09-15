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
  {
    questions: '23. Что возвращает метод массива includes?',
    answers: 'true, если элемент найден в массиве, и false, если нет',
  },
  {
    questions: '24. Для чего используется splice?',
    answers: 'для вырезания и замены элементов в исходном массиве',
  },
  {
    questions: '25. Какие аргументы принимает splice?',
    answers:
      '1 аргумент - индекс массива, из которого начинается вырезание, второй - количество вырезанных элементов, 3 и все последующие - элементы для замены',
  },
  {
    questions: '26. Что возвращает splice?',
    answers: 'Массив вырезанных элементов',
  },
  {
    questions: '27. Для чего используется slice?',
    answers: 'для копирования части массива',
  },
  {
    questions: '28. Какие аргументы принимает slice?',
    answers:
      '1 аргумент - индекс, с которого начинается копирование массива, 2 - индекс, на котором копирования заканчивается (но он в список не входит)',
  },
  {
    questions: '29. Какой цикл for позволяет перебрать элементы массива?',
    answers: 'обычный for и for … of',
  },
  {
    questions: '30. Что мы передаем в метод map в качестве аргумента?',
    answers:
      'callback-функцию, первый аргумент которой - перебираемый элемент массива, второй - индекс перебираемого элемента в массиве, третий - ссылка на перебираемый массив',
  },
  {
    questions: '31. Что возвращает метод .forEarch?',
    answers: 'undefined',
  },
  {
    questions: '32. Что возвращает метод find?',
    answers:
      'первый найденный элемент в массиве или undefined, если элемент не найден',
  },
  {
    questions: '32. Что возвращает метод findIndex?',
    answers:
      'индекс первого найденного элемента в массиве или -1, если элемент не найден',
  },
  {
    questions: '33. Что передается колбеку, который мы передаем в reduce?',
    answers:
      'аккумулятор, перебираемый элемент массива, индекс перебираемого элемента массива и ссылка на перебираемый массив',
  },
  {
    questions: '34. Для чего используются JS-классы?',
    answers: 'для создания объектов по шаблону',
  },
  {
    questions: '35. Где хранятся методы объекта, созданного с помощью класса?',
    answers: 'в прототипах класса',
  },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
  // {
  //   questions: '1. Какой typeof null?',
  //   answers: 'object',
  // },
];
