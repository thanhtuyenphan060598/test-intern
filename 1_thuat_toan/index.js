//cau 1) Thuật toán: Sử dụng ngôn ngữ lập trình bất kỳ để giải quyết các bài toán dưới đây
// Cho mảng số nguyên chưa được sắp xếp. Viết hàm xếp 5 số lớn nhất ra đầu mảng.
// Test case:
// findMax5([3,4,5,3,2,3,10,11]) => [11,10,5,4,3]
// findMax5([14,12,38,17,10,36,12,29,45,34,48,22]) => [48, 45, 38, 36, 34]
// findMax5([10,11,2,30,22,6,8,9,11,12,22]) => [30, 22, 22, 12, 11]
// Viết hàm nhận vào 1 mảng và trả ra phần tử xuất hiện nhiều lần nhất trong mảng.
// Test case:
// findFrequent([3, 7, 3]) ➞ 3
// findFrequent([null, "hello", true, null]) ➞ null
// findFrequent([false, "up", "down", "left", "right", true, false]) ➞ false

[10, 11, 2, 30, 22, 6, 8, 9, 11, 12, 22];

const findMax5 = (arr) => {
  arr.sort((a, b) => a - b);
  let arrNew = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arrNew.length < 5) {
      arrNew.push(arr[i]);
    }
  }
  return arrNew;
};

console.log(findMax5([10, 11, 2, 30, 22, 6, 8, 9, 11, 12, 22]));

const findFrequent = (arr) => {
  let count = 0;
  let valueMax = 0;
  let frequentValue = "";
  for (let i = 0; i < arr.length - 1; i++) {
    count = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    if (valueMax < count) {
      valueMax = count;
      frequentValue = arr[i];
    }
    // obj[`${arr[i]}`] = count;
  }
  return frequentValue;
};

console.log(
  findFrequent([false, "up", "down", "left", "right", true, false, true])
);
