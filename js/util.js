const randomNumber = (min, max) => {
  if (min > max) {
    return -1;
  }

  if (min < 0 || max < 0) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const stringCount = (text, sign) => {
  return text.length <= sign ? true : false;
}

const getRandomElementArr = (arr) => {
  return arr[randomNumber(0, arr.length - 1)];
}

export { randomNumber, stringCount, getRandomElementArr };
