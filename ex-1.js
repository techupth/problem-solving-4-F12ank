function pivotIndex(nums, input) {
  console.log(nums, input);
  let leftSum = 0;
  let leftSumText = "";
  let rightSum = 0;
  let reverseNumber = nums.reverse();
  let rightSumText = "";

  for (let i = 0; i < input - 1; i++) {
    leftSum = nums[i] + leftSum;
    leftSumText = leftSumText + `nums[${i}] + `;
    // console.log(result)
  }
  for (let i = 0; i < nums.length; i++) {
    if (leftSum > rightSum) {
      rightSum = rightSum + reverseNumber[i];
      rightSumText = `nums[${nums.length - i}] + ` + rightSumText;
    }
  }

  return `left sum = ${leftSumText} = ${leftSum},
          right sum = ${rightSumText} = ${rightSum}`;
}

let result1 = pivotIndex([1, 7, 3, 6, 5, 6], 3);
console.log(result1);
