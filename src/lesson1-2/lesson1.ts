/*  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
Возвращает true, если все аргументы, кроме первого входят в первый.
Первым всегда должен быть массив.*/

export function isInArray<T>(arr: T[], ...values: T[]): boolean {
  if (values.length <= 1) {
    return true;
  }

  for (let i = 1; i < values.length; i++) {
    if (arr.indexOf(values[i]) < 0) {
      return false;
    }
  }
  return true;
}

/*summator(), которая сумирует переданые ей аргументы.
   Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено*/

type T = number | string;

export function summator<T>(...values: T[]): number | string {
  let sum: number | string;

  sum = typeof values[0] === "string" ? "" : 0;

  for (let i = 0; i < values.length; i++) {
    if (typeof sum === "string" /* && typeof values[i] === "string"*/) {
      sum = sum + values[i];
    }
    if (typeof sum === "number" /*&& typeof values[i] === "number"*/) {
      sum = sum + +values[i];
    }
  }

  return sum;
}

/*Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
    и возвращает массив уникальных элементов. Аргумент не должен изменяться.
    Порядок элементов результирующего массива должен совпадать с порядком,
    в котором они встречаются в оригинальной структуре.*/

export function getUnique<T>(...values: T[]): T[] {
  const result = [];

  for (let i = 0; i < values.length; i++) {
    if (result.indexOf(values[i]) < 0) {
      result.push(values[i]);
    }
  }

  return result;
}

/* Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
   возвращает новый массив. Число показывает количество элементов в подмассивах,
   элементы подмассивов беруться из массива data.
   Оригинальный массив не должен быть изменен.*/

export function toMatrix<T>(data: T[][], rowSize: number): T[][] {
  const result = [];

  for (let i = 0; i < data.length; i++) {
    const res = [];
    for (let j = 0; j < data[i].length && j < rowSize; j++) {
      res.push(data[i][j]);
    }
    result.push(res);
  }
  return result;
}
