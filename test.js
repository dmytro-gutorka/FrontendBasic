function matrix(array) {
  for (let inx = 0; inx < array.length; inx++) {
    console.log(`level ${inx}`);

    for (let num of array[inx]) {
      if (array[inx].indexOf(num) === inx) {
        console.log(num, array[inx].indexOf(num));
        console.log(inx);
        // console.log(num)
        num < 0 ? array[inx].splice(inx, 1, 0) : array[inx].splice(inx, 1, 1);
      }
    }
  }

  return array;
}

console.log(
  matrix([
    [-1, 4, -5, -9, 3, 8],
    [6, 8, -7, 4, -5, -1],
    [3, 5, 1, -9, -1, 6],
    [1, 5, -7, 15, -9, 3],
    [-3, 2, 1, -5, -6, 0],
    [8, 2, 0, -2, 4, -5],
  ])
);
