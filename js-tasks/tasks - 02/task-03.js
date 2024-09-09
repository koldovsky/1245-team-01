let min = function (list) {
    let a = list[0];
    for (let i = 0; i < list.length; i++) {
      if (list[i] < a) {
        a = list[i];
      }
    }
    list[0] = a;
    return list[0];
  };
  
  let max = function (list) {
    let a = list[0];
    for (let i = 0; i < list.length; i++) {
      if (list[i] > a) {
        a = list[i];
      }
    }
    list[0] = a;
    return list[0];
  }; 