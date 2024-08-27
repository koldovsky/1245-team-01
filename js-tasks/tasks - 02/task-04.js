function min(arr, toReturn) {
    let a = arr[0];
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a) {
        a = arr[i];
        index = i;
      }
    }
    if (toReturn == "value") {
      return a;
    }
    if (toReturn == "index") {
      return index;
    }
  }