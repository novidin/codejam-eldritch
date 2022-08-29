export function getRandomArray(start, finish, arrLength) {
  let arr = [];
  let s = Math.ceil(start);
  let f = Math.floor(finish);
  function getRandom(min, max) {
      let res = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!arr.includes(res)) arr.push(res);
      if (arr.length === arrLength) return;
      getRandom(s, f);
  };
  getRandom(s, f);
  return arr;
};