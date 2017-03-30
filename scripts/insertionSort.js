const InsertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let qMcK = arr[i];

    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > qMcK) {
        arr[j + 1] = arr[j];
        arr[j] = qMcK;
      }
    }
  }
  return arr;
};

export default InsertionSort;
