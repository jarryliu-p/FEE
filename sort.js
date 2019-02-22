function bubleSort(arr) {
  var len = arr.length;
  for (let outer = len; outer >= 2; outer--) {
    for (let inner = 0; inner <= outer - 1; inner++) {
      console.log('outer[', outer, ']->', arr[outer]);
      console.log('inner[', inner, ']->', arr[inner]);
      console.log(arr)
      if (arr[inner] < arr[inner + 1]) {
        [arr[inner], arr[inner + 1]] = [arr[inner + 1], arr[inner]]
      }
      console.log('----------------------------------------------')
    }
  }
  return arr;
}

function selectSort(arr) {
  var len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i; j < len; j++) {
      console.log('i[', i, ']->', arr[i]);
      console.log('j[', j, ']->', arr[j]);
      console.log(arr)
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      console.log('----------------------------------------------')
    }
  }
  return arr
}

function insertSort(arr) {
  for(let i = 1; i < arr.length; i++) {  //外循环从1开始，默认arr[0]是有序段
      for(let j = i; j > 0; j--) {  //j = i,将arr[j]依次插入有序段中
          if(arr[j] < arr[j-1]) {
              [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
          } else {
              break;
          }
      }
  }
  return arr;
}

function quickSort(arr) {
  if(arr.length <= 1) {
      return arr;  //递归出口
  }
  var left = [],
      right = [],
      current = arr.splice(0,1);
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] < current) {
          left.push(arr[i])  //放在左边
      } else {
          right.push(arr[i]) //放在右边
      }
  }
  return quickSort(left).concat(current,quickSort(right));
}

const input = [1, 35, 46, 82, 4, 69, 28, 87, 735, 366, 54];

// bubleSort(input);
selectSort(input);