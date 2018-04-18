function computeAverageOfNumbers(nums) {
  if (nums && nums.length > 0) {
    var sum = 0;
    for (var i in nums) {
      sum += nums[i];
    }
    return sum / nums.length;
  }
  return 0;
}

var input = [1, 2, 3, 4, 5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
